"use client";
import React, { useState, useEffect, lazy, Suspense } from "react";
import { FaGithub, FaLinkedin, FaArrowUp, FaStar, FaShare, FaBookmark } from "react-icons/fa";
import { ChevronRight, Info } from "lucide-react";
import { TemplateSelector } from "./components/TemplateSelector";
import { FeatureSelector } from "./components/FeatureSelector";
import { initialFeatures } from "./data/features";
import { templates } from "./data/templates";
import type { Template, Feature } from "./types";
import ReactMarkdown from "react-markdown";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./components/ui/select";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./components/ui/card";
import { Badge } from "./components/ui/badge";
import { toast } from "sonner";
import JSZip from "jszip";
import { Toaster } from "react-hot-toast";

const categories = [
  { id: 'all', name: 'All Categories' },
  { id: 'web', name: 'Web Applications' },
  { id: 'front', name: 'Frontend Applications' },
  { id: 'mobile', name: 'Mobile Applications' },
  { id: 'backend', name: 'Backend Applications' },
  { id: 'enterprise', name: 'Enterprise Applications' }
];

function App() {
  const [step, setStep] = useState<"template" | "features" | "commands">("template");
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [features, setFeatures] = useState<Feature[]>(initialFeatures);
  const [isGenerating, setIsGenerating] = useState(false);
  const [commands, setCommands] = useState<string[]>([]);
  const [readme, setReadme] = useState<string>("");
  const [isCopied, setIsCopied] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);

  useEffect(() => {
    // Load favorites from localStorage when app starts
    const savedFavorites = localStorage.getItem('favorites');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getProgressPercentage = () => {
    switch (step) {
      case "template":
        return 33;
      case "features":
        return 66;
      case "commands":
        return 100;
      default:
        return 0;
    }
  };

  const handleFavorite = (templateId: string) => {
    if (templateId === "toggle-favorites") {
      setShowOnlyFavorites(!showOnlyFavorites);
      return;
    }
    
    setFavorites((prev) => {
      const newFavorites = prev.includes(templateId)
        ? prev.filter((id) => id !== templateId)
        : [...prev, templateId];
      
      localStorage.setItem('favorites', JSON.stringify(newFavorites));
      return newFavorites;
    });
  };

  const handleTemplateSelect = (template: Template) => {
    setSelectedTemplate(template);
    setStep("features");
  };

  const handleToggleFeature = (id: string) => {
    setFeatures((prevFeatures) =>
      prevFeatures.map((feature) =>
        feature.id === id ? { ...feature, enabled: !feature.enabled } : feature
      )
    );
  };

  const handleGenerateCommands = async () => {
    if (!selectedTemplate) {
      console.error("❌ No template selected");
      alert("الرجاء اختيار قالب قبل المتابعة.");
      return;
    }

    setIsGenerating(true);
    try {
      console.log("📤 Sending request to generate commands...");

      const response = await fetch("/api/download", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          template: selectedTemplate.id,
          features: features.filter((f) => f.enabled).map((f) => f.id),
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "فشل في توليد الأوامر");
      }

      const data = await response.json();
      setCommands(data.commands);
      setReadme(data.readme);
      setStep("commands");
    } catch (error) {
      console.error("❌ Failed to generate commands:", error);
      alert(
        error instanceof Error
          ? error.message
          : "فشل في توليد الأوامر. يرجى التحقق من وحدة التحكم للحصول على التفاصيل."
      );
    } finally {
      setIsGenerating(false);
    }
  };

  const handleDownloadFiles = async () => {
    try {
      // تحميل Documentation (README.md)
      const readmeBlob = new Blob([readme], { type: 'text/markdown' });
      const readmeUrl = window.URL.createObjectURL(readmeBlob);
      const readmeLink = document.createElement('a');
      readmeLink.href = readmeUrl;
      readmeLink.download = 'README.md';
      document.body.appendChild(readmeLink);
      readmeLink.click();
      document.body.removeChild(readmeLink);
      window.URL.revokeObjectURL(readmeUrl);

      // تحميل Installation Commands
      const commandsBlob = new Blob([commands.join('\n')], { type: 'text/plain' });
      const commandsUrl = window.URL.createObjectURL(commandsBlob);
      const commandsLink = document.createElement('a');
      commandsLink.href = commandsUrl;
      commandsLink.download = 'installation-commands.txt';
      document.body.appendChild(commandsLink);
      commandsLink.click();
      document.body.removeChild(commandsLink);
      window.URL.revokeObjectURL(commandsUrl);

      toast.success('Files downloaded successfully!');
    } catch (error) {
      console.error('Error downloading files:', error);
      toast.error('Error downloading files');
    }
  };

  const handleCopyCommands = async () => {
    try {
      await navigator.clipboard.writeText(commands.join("\n"));
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
      toast.success('Commands copied to clipboard!');
    } catch (error) {
      console.error('Error copying commands:', error);
      toast.error('Error copying commands');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster position="bottom-right" />
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">
            Voltix Setup Tool
          </h1>
          <p className="text-xl text-gray-600">
            Create a new project in minutes, not hours
          </p>
          <div className="flex gap-5 mt-5 justify-center">
            <button
              className="flex gap-2 px-6 py-3 items-center rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition duration-200"
              onClick={() => window.open("https://github.com/Bodyhc", "_blank")}>
              <FaGithub size={20} />
              GitHub
            </button>
            <button
              className="flex gap-2 px-6 py-3 items-center rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition duration-200"
              onClick={() => window.open("https://www.linkedin.com/in/abdullahsoliman/", "_blank")}>
              <FaLinkedin size={20} />
              LinkedIn
            </button>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">Progress</span>
              <span className="text-sm font-medium text-gray-700">{getProgressPercentage()}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div 
                className="bg-blue-600 h-2.5 rounded-full transition-all duration-500 ease-in-out"
                style={{ width: `${getProgressPercentage()}%` }}
              ></div>
            </div>
          </div>

          <div className="flex items-center justify-center mb-12">
            <div className={`flex items-center ${step === "template" ? "text-blue-600" : "text-gray-400"}`}>
              <span className="font-medium">Choose Template</span>
            </div>
            <ChevronRight className="mx-4 text-gray-400" />
            <div className={`flex items-center ${step === "features" ? "text-blue-600" : "text-gray-400"}`}>
              <span className="font-medium">Configure Features</span>
            </div>
            <ChevronRight className="mx-4 text-gray-400" />
            <div className={`flex items-center ${step === "commands" ? "text-blue-600" : "text-gray-400"}`}>
              <span className="font-medium">Get Commands</span>
            </div>
          </div>

          {step === "template" ? (
            <div className="space-y-6">
              <TemplateSelector
                selectedCategory={selectedCategory}
                selectedTemplate={selectedTemplate}
                onCategorySelect={setSelectedCategory}
                onTemplateSelect={handleTemplateSelect}
                favorites={favorites}
                onFavorite={handleFavorite}
                showOnlyFavorites={showOnlyFavorites}
              />
            </div>
          ) : step === "features" ? (
            <>
              <FeatureSelector
                features={features}
                onToggleFeature={handleToggleFeature}
              />

              <div className="mt-8 flex justify-between">
                <button
                  className="px-6 py-2 rounded-lg border-2 border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => setStep("template")}>
                  Back
                </button>
                <button
                  className="px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200 disabled:opacity-50"
                  onClick={handleGenerateCommands}
                  disabled={isGenerating}>
                  {isGenerating ? "Generating..." : "Generate Commands"}
                </button>
              </div>
            </>
          ) : (
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Template Information</h2>
                {selectedTemplate && (
                  <div className="mb-4">
                    <h3 className="text-xl font-medium text-gray-900">
                      {selectedTemplate.name}
                    </h3>
                    <p className="text-gray-600 mt-2 text-lg">
                      {selectedTemplate.description}
                    </p>
                  </div>
                )}
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-semibold text-gray-800">Installation Commands</h2>
                  <button
                    onClick={handleCopyCommands}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-200 text-gray-700"
                  >
                    {isCopied ? (
                      <>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-green-600">COPIED!</span>
                      </>
                    ) : (
                      <>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                          <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                        </svg>
                        <span>COPY</span>
                      </>
                    )}
                  </button>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg overflow-x-auto border border-gray-200">
                  <pre className="text-base font-mono">{commands.join("\n")}</pre>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Documentation</h2>
                <div className="prose max-w-none">
                  <ReactMarkdown>{readme}</ReactMarkdown>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <button
                  className="px-8 py-3 rounded-lg border-2 border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors duration-200 text-lg"
                  onClick={() => setStep("features")}>
                  Back
                </button>
                <div className="flex gap-4">
                  <button
                    className="px-8 py-3 rounded-lg bg-green-600 text-white hover:bg-green-700 transition-colors duration-200 flex items-center gap-3 text-lg font-medium"
                    onClick={handleDownloadFiles}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    Download Files
                  </button>
                  <button
                    className="px-8 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200 text-lg font-medium"
                    onClick={() => {
                      setStep("template");
                      setSelectedTemplate(null);
                      setFeatures(initialFeatures);
                      setCommands([]);
                      setReadme("");
                    }}>
                    Start New Project
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300"
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </div>
  );
}

export default App;
