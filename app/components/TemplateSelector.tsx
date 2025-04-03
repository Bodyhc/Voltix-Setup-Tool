import { templates } from "../data/templates";
import type { Template } from "../types";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Bookmark, Info } from "lucide-react";
import { toast } from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

const categories = [
  { id: "all", name: "All Templates", icon: "📋" },
  { id: "web", name: "Web Apps", icon: "🌐" },
  { id: "front", name: "Frontend", icon: "💻" },
  { id: "mobile", name: "Mobile", icon: "📱" },
  { id: "backend", name: "Backend", icon: "⚙️" },
  { id: "enterprise", name: "Enterprise", icon: "🏢" }
];

interface TemplateSelectorProps {
  selectedCategory: string;
  selectedTemplate: Template | null;
  onCategorySelect: (category: string) => void;
  onTemplateSelect: (template: Template) => void;
  favorites: string[];
  onFavorite: (templateId: string) => void;
  showOnlyFavorites: boolean;
}

export function TemplateSelector({
  selectedCategory,
  selectedTemplate,
  onCategorySelect,
  onTemplateSelect,
  favorites,
  onFavorite,
  showOnlyFavorites
}: TemplateSelectorProps) {
  const filteredTemplates = templates.filter((template) => {
    if (showOnlyFavorites) {
      return favorites.includes(template.id);
    }
    return selectedCategory === "all" || template.category === selectedCategory;
  });

  return (
    <div className="space-y-8">
      <motion.div 
        className="flex flex-wrap items-center justify-center gap-3 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {categories.map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Button
              variant={selectedCategory === category.id ? "default" : "outline"}
              className={`px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 ${
                selectedCategory === category.id 
                  ? "bg-blue-600 text-white hover:bg-blue-700 shadow-lg" 
                  : "border-blue-200 text-blue-600 hover:bg-blue-50 hover:border-blue-400"
              }`}
            onClick={() => onCategorySelect(category.id)}
            >
              <span className="mr-2 transform transition-transform group-hover:scale-110">{category.icon}</span>
              {category.name}
            </Button>
          </motion.div>
        ))}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: categories.length * 0.1 }}
        >
          <Button
            variant={showOnlyFavorites ? "default" : "outline"}
            className={`px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 ${
              showOnlyFavorites
                ? "bg-blue-600 text-white hover:bg-blue-700 shadow-lg"
                : "border-blue-200 text-blue-600 hover:bg-blue-50 hover:border-blue-400"
            }`}
            onClick={() => onFavorite("toggle-favorites")}
          >
            <Bookmark 
              className={`h-5 w-5 mr-2 transition-colors duration-300 ${
                showOnlyFavorites ? "text-white fill-current" : "text-blue-600"
              }`}
            />
            {showOnlyFavorites ? "Show All" : "Show Favorites"}
            {favorites.length > 0 && (
              <span className={`ml-2 px-2 py-0.5 text-sm rounded-full inline-flex items-center justify-center ${
                showOnlyFavorites 
                  ? "bg-white text-blue-600" 
                  : "bg-blue-100 text-blue-600"
              }`}>
                {favorites.length}
              </span>
            )}
          </Button>
        </motion.div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="wait">
          {filteredTemplates.length === 0 ? (
            <motion.div 
              key="empty"
              className="col-span-full text-center py-12"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <Bookmark className="h-16 w-16 mx-auto mb-6 text-gray-400 animate-pulse" />
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                {showOnlyFavorites ? "No favorites yet" : "No templates found"}
              </h3>
              <p className="text-gray-600 max-w-md mx-auto">
                {showOnlyFavorites 
                  ? "Click the bookmark icon on any template to add it to your favorites and quickly access it later."
                  : "Try selecting a different category or clearing the filters."}
              </p>
            </motion.div>
          ) : (
            <motion.div 
              key="grid"
              className="col-span-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {filteredTemplates.map((template, index) => (
                <motion.div
            key={template.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Card 
                    className={`group cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 border-2 ${
                      selectedTemplate?.id === template.id 
                        ? "border-blue-500 ring-2 ring-blue-500 bg-blue-50" 
                        : "border-blue-200 hover:border-blue-300"
                    }`}
                    onClick={() => onTemplateSelect(template)}
                  >
                    <CardHeader className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors duration-300">
                            <span className="text-xl group-hover:scale-110 transition-transform duration-300 inline-block">
                              {template.icon}
                            </span>
                          </div>
                          <div className="space-y-1">
                            <CardTitle className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                              {template.name}
                            </CardTitle>
                            <Badge 
                              variant="secondary" 
                              className={`${
                                selectedTemplate?.id === template.id 
                                  ? "bg-blue-200 text-blue-700" 
                                  : "bg-gray-100 text-gray-600 group-hover:bg-blue-100 group-hover:text-blue-600"
                              } transition-colors duration-300`}
                            >
                              {categories.find(c => c.id === template.category)?.name || template.category}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <CardDescription className="text-gray-600 text-base group-hover:text-gray-700 transition-colors duration-300">
                        {template.description}
                      </CardDescription>
                    </CardHeader>
                    <CardFooter className="flex justify-between items-center pt-4 border-t border-gray-100">
                      <Button 
                        variant={selectedTemplate?.id === template.id ? "default" : "outline"}
                        className={`flex-1 mr-2 transition-all duration-300 hover:scale-105 ${
                          selectedTemplate?.id === template.id 
                            ? "bg-blue-600 hover:bg-blue-700 shadow-lg" 
                            : "border-blue-200 text-blue-600 hover:bg-blue-50 hover:border-blue-400"
                        }`}
            onClick={() => onTemplateSelect(template)}
                      >
                        {selectedTemplate?.id === template.id ? "Selected" : "Select Template"}
                      </Button>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              variant="outline"
                              className={`p-2 rounded-lg transition-all duration-300 border-2 hover:scale-110 ${
                                favorites.includes(template.id)
                                  ? "border-blue-500 bg-blue-50 hover:bg-blue-100 shadow-md"
                                  : "border-gray-200 hover:border-blue-200 hover:bg-gray-50"
                              }`}
                              onClick={(e) => {
                                e.stopPropagation();
                                onFavorite(template.id);
                                toast.success(
                                  favorites.includes(template.id)
                                    ? `${template.name} removed from favorites`
                                    : `${template.name} added to favorites`,
                                  {
                                    icon: favorites.includes(template.id) ? '🗑️' : '⭐',
                                    duration: 2000
                                  }
                                );
                              }}
                            >
                              <Bookmark
                                className={`h-5 w-5 transition-all duration-300 ${
                                  favorites.includes(template.id)
                                    ? "text-blue-600 fill-current"
                                    : "text-gray-400 hover:text-blue-500"
                                }`}
                              />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            {favorites.includes(template.id)
                              ? "Remove from favorites"
                              : "Add to favorites"}
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="ml-2 text-gray-400 hover:text-blue-500"
                              onClick={(e) => {
                                e.stopPropagation();
                                toast.success("Template details coming soon!", {
                                  icon: 'ℹ️',
                                  duration: 2000
                                });
                              }}
                            >
                              <Info className="h-5 w-5" />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            View template details
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}