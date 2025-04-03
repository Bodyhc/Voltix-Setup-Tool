import path from "path";
import fs from "fs-extra";
import { execSync } from "child_process";
import AdmZip from "adm-zip";

// تحديد المسار المطلق للملفات
const APP_ROOT = process.cwd();

interface Template {
  name: string;
  description: string;
  category: string;
  installCommand: string;
}

interface Feature {
  name: string;
  description: string;
  category: string;
  installCommand: string;
}

interface ProgressInfo {
  stage: string;
  progress: number;
  message: string;
}

export async function generateCommands(
  templateId: string,
  selectedFeatures: string[]
): Promise<{ commands: string[]; readme: string }> {
  const templatesPath = path.join(process.cwd(), "templates", "templates.json");
  const featuresPath = path.join(process.cwd(), "features", "features.json");

  console.log("Templates Path:", templatesPath);
  console.log("Features Path:", featuresPath);
  console.log("Current Directory:", process.cwd());

  if (!fs.existsSync(templatesPath) || !fs.existsSync(featuresPath)) {
    throw new Error(`Files not found!\nTemplates: ${templatesPath}\nFeatures: ${featuresPath}`);
  }

  const templatesData = fs.readJSONSync(templatesPath);
  const featuresData = fs.readJSONSync(featuresPath);

  const template = templatesData[templateId];
  if (!template) throw new Error(`Template '${templateId}' not found!`);

  const commands: string[] = [];

  // Create project using template
  commands.push(`# Create ${template.name} project`);
  commands.push(template.installCommand);

  // Install selected features
  if (selectedFeatures.length > 0) {
    commands.push("\n# Install selected features");
    for (const featureId of selectedFeatures) {
      const feature = featuresData[featureId];
      if (feature) {
        commands.push(feature.installCommand);
      }
    }
  }

  const readme = `# ${template.name} Project

Created with [Voltix](https://yourwebsite.com)
Start developing quickly with your chosen template!

## Installation and Setup

1. Run the following commands in order:

\`\`\`bash
${commands.join("\n")}
\`\`\`

## Installed Features
${selectedFeatures
    .map((featureId) => {
      const feature = featuresData[featureId];
      return feature ? `- ${feature.name}: ${feature.description}` : null;
    })
    .filter(Boolean)
    .join("\n")}

## References
- [${template.name} Documentation](https://example.com/${templateId})
${selectedFeatures
    .map((featureId) => {
      const feature = featuresData[featureId];
      return feature
        ? `- [${feature.name} Documentation](https://example.com/${featureId})`
        : null;
    })
    .filter(Boolean)
    .join("\n")}
`;

  return { commands, readme };
}

export async function executeCommands(
  templateId: string,
  selectedFeatures: string[],
  onProgress?: (info: ProgressInfo) => void
): Promise<{ success: boolean; error?: string; projectPath?: string }> {
  try {
    const templatesPath = path.join(process.cwd(), "templates", "templates.json");
    const featuresPath = path.join(process.cwd(), "features", "features.json");

    console.log("Templates Path:", templatesPath);
    console.log("Features Path:", featuresPath);
    console.log("Current Directory:", process.cwd());

    const templatesData = fs.readJSONSync(templatesPath);
    const featuresData = fs.readJSONSync(featuresPath);

    const template = templatesData[templateId];
    if (!template) throw new Error(`Template '${templateId}' not found!`);

    const projectDir = path.join(process.cwd(), "temp", templateId);
    await fs.ensureDir(projectDir);
    process.chdir(projectDir);

    if (selectedFeatures.length > 0) {
      onProgress?.({
        stage: "features",
        progress: 50,
        message: "Installing selected features...",
      });
      console.log("Installing selected features...");
      for (const featureId of selectedFeatures) {
        const feature = featuresData[featureId];
        if (feature) {
          console.log(`Installing ${feature.name}...`);
          execSync(feature.installCommand, { stdio: "inherit" });
        }
      }
    }

    onProgress?.({
      stage: "readme",
      progress: 75,
      message: "Generating documentation...",
    });
    const { readme } = await generateCommands(templateId, selectedFeatures);
    fs.writeFileSync("README.md", readme);

    onProgress?.({
      stage: "complete",
      progress: 100,
      message: "Project created successfully!",
    });

    return { success: true, projectPath: projectDir };
  } catch (error) {
    console.error("Error executing commands:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error occurred",
    };
  }
} 