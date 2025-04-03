import path from "path";
import fs from "fs-extra";
import archiver from "archiver";

export async function generateProject(
  templateId: string,
  selectedFeatures: string[]
): Promise<string> {
  console.log(
    `\n🚀 Generating project: ${templateId} with features: [${selectedFeatures.join(
      ", "
    )}]`
  );

  // ✅ تحميل بيانات القوالب والميزات مع التحقق
  const templatesPath = path.resolve("templates", "templates.json");
  const featuresPath = path.resolve("features", "features.json");

  if (!fs.existsSync(templatesPath) || !fs.existsSync(featuresPath)) {
    throw new Error("❌ templates.json أو features.json غير موجود!");
  }

  const templates = fs.readJSONSync(templatesPath);
  const features = fs.readJSONSync(featuresPath);
  console.log("📜 Loaded templates and features successfully.");

  // ✅ التحقق من صحة القالب
  const template = templates[templateId];
  if (!template) throw new Error(`❌ Template '${templateId}' not found!`);

  // ✅ تحديد مسار المشروع المؤقت
  const projectDir = path.join(process.cwd(), "temp", templateId);
  await fs.ensureDir(projectDir);

  // ✅ التحقق من وجود ملفات القالب ونسخها
  const templatePath = path.join(process.cwd(), "templates", templateId);
  if (!fs.existsSync(templatePath)) {
    throw new Error(`❌ Template directory not found: ${templatePath}`);
  }
  await fs.copy(templatePath, projectDir);
  console.log("📁 Template files copied successfully.");

  // ✅ قراءة أو إنشاء `package.json`
  const packageJsonPath = path.join(projectDir, "package.json");
  let packageJson = {
    name: templateId,
    version: "1.0.0",
    dependencies: {},
    devDependencies: {},
  };

  if (fs.existsSync(packageJsonPath)) {
    try {
      packageJson = fs.readJSONSync(packageJsonPath);
    } catch (error) {
      console.error("❌ Failed to parse package.json:", error);
      throw new Error("❌ Invalid JSON format in package.json");
    }
  }

  // ✅ إضافة الميزات المختارة
  for (const featureId of selectedFeatures) {
    const feature = features[featureId];
    if (!feature) {
      console.warn(`⚠ Feature '${featureId}' not found. Skipping.`);
      continue;
    }
    console.log(features);
    // 📂 إضافة الملفات الخاصة بالميزة
    const featureDir = path.join(process.cwd(), "features", featureId);
    for (const file of feature.files) {
      const featureFilePath = path.join(featureDir, file);
      const destinationPath = path.join(projectDir, file);

      if (fs.existsSync(featureFilePath)) {
        await fs.copy(featureFilePath, destinationPath);
        console.log(`✅ Copied: ${featureFilePath} -> ${destinationPath}`);
      } else {
        console.warn(`⚠ File '${file}' not found for feature '${featureId}'`);
      }
    }

    // 📦 إضافة الحزم إلى package.json
    Object.assign(packageJson.dependencies, feature.dependencies || {});
    Object.assign(packageJson.devDependencies, feature.devDependencies || {});
  }

  console.log("⚙️ Features added successfully.");

  // 📝 إنشاء ملف README.md
  const readmeContent = `# 🚀 مشروع ${template.name}

🎯 **تم إنشاؤه باستخدام [Voltix](https://yourwebsite.com)**  
⚡ **ابدأ التطوير بسرعة مع القالب الذي اخترته!**

## 📂 **طريقة التثبيت والتشغيل**
1. قم بتثبيت الحزم:
   \`\`\`bash
   npm install
   \`\`\`
2. شغل المشروع:
   \`\`\`bash
   npm run dev
   \`\`\`

## 📞 **الدعم والتواصل**
للمزيد من المعلومات، تفضل بزيارة [موقعنا الرسمي](https://yourwebsite.com).
`;
  fs.writeFileSync(path.join(projectDir, "README.md"), readmeContent);
  console.log("📝 README.md file created.");

  // 📝 حفظ `package.json` المحدث
  fs.writeFileSync(
    packageJsonPath,
    JSON.stringify(packageJson, null, 2),
    "utf8"
  );

  console.log("📦 package.json updated.");

  // 🗜️ ضغط المشروع كملف ZIP
  const zipPath = path.join(process.cwd(), "temp", `${templateId}.zip`);
  const output = fs.createWriteStream(zipPath);
  const archive = archiver("zip", { zlib: { level: 9 } });

  archive.pipe(output);
  archive.directory(projectDir, false);
  await archive.finalize();

  // ✅ التحقق مما إذا كان `ZIP` تم إنشاؤه
  if (fs.existsSync(zipPath)) {
    console.log(`🎉 ZIP file created successfully: ${zipPath}`);
  } else {
    console.error(`❌ ZIP file was NOT created: ${zipPath}`);
    throw new Error("❌ Failed to generate ZIP file.");
  }

  // ⏳ حذف الملفات المؤقتة بعد مرور 5 دقائق
  output.on("close", () => {
    setTimeout(() => fs.remove(projectDir), 300000);
  });

  return zipPath;
}
