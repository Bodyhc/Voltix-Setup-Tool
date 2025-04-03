import { NextResponse } from "next/server";
import { generateCommands, executeCommands } from "../../lib/generate-commands";
import fs from "fs-extra";
import path from "path";

export async function POST(req: Request) {
  try {
    const { template, features, action } = await req.json();
    if (!template)
      return NextResponse.json(
        { error: "Template is required" },
        { status: 400 }
      );

    if (action === "execute") {
      console.log("🚀 Executing commands for:", template, features);
      const result = await executeCommands(template, features, (progress) => {
        // يمكن إضافة WebSocket هنا لإرسال معلومات التقدم في الوقت الفعلي
        console.log("Progress:", progress);
      });

      if (!result.success) {
        return NextResponse.json(
          { error: result.error || "Failed to execute commands" },
          { status: 500 }
        );
      }

      // 📥 تجهيز تحميل الملف
      const headers = new Headers({
        "Content-Disposition": `attachment; filename=${template}.zip`,
        "Content-Type": "application/zip",
      });

      const fileStream = fs.createReadStream(result.projectPath!);
      const readableStream = new ReadableStream({
        start(controller) {
          fileStream.on("data", (chunk) => {
            if (Buffer.isBuffer(chunk)) {
              controller.enqueue(new Uint8Array(chunk));
            } else {
              controller.enqueue(new Uint8Array(Buffer.from(chunk)));
            }
          });
          fileStream.on("end", () => controller.close());
          fileStream.on("error", (err) => controller.error(err));
        },
      });

      // 🗑️ حذف الملفات المؤقتة بعد التحميل
      setTimeout(() => {
        fs.remove(result.projectPath!);
        fs.remove(path.join(process.cwd(), "temp", template));
      }, 30000);

      return new Response(readableStream, { headers });
    } else {
      // توليد الأوامر فقط
      console.log("📤 Generating commands for:", template, features);
      const { commands, readme } = await generateCommands(template, features);

      return NextResponse.json(
        {
          commands,
          readme,
          template: template,
          features: features,
        },
        { headers: { "Content-Type": "application/json" } }
      );
    }
  } catch (error) {
    console.error("❌ Error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Server error" },
      { status: 500 }
    );
  }
}
