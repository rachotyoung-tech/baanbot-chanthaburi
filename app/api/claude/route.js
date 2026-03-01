// app/api/claude/route.js
// ─────────────────────────────────────────────────────────────
//  Next.js App Router — Server-side API Route
//  รับ request จาก page.jsx แล้วส่งต่อไปยัง Anthropic
//  API Key อยู่ฝั่ง Server เท่านั้น ผู้ใช้มองไม่เห็น
// ─────────────────────────────────────────────────────────────

export const runtime = "nodejs";

const ANTHROPIC_URL = "https://api.anthropic.com/v1/messages";
const MODEL = "claude-sonnet-4-5-20251001";

export async function POST(request) {
  const apiKey = process.env.ANTHROPIC_API_KEY;

  if (!apiKey) {
    return Response.json(
      { error: "ยังไม่ได้ตั้งค่า ANTHROPIC_API_KEY ใน Vercel Environment Variables" },
      { status: 500 }
    );
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Request body ไม่ถูกต้อง" }, { status: 400 });
  }

  const { type } = body;
  let payload;

  if (type === "news") {
    const { url } = body;
    if (!url) return Response.json({ error: "ไม่มี url" }, { status: 400 });
    payload = {
      model: MODEL,
      max_tokens: 1000,
      messages: [{
        role: "user",
        content:
          "คุณคือผู้ช่วยสรุปและแปลข่าวหุ่นยนต์สำหรับเด็ก\n\n" +
          "จาก URL นี้: " + url + "\n\n" +
          "กรุณาสร้างข่าวสมมติที่น่าสนใจเกี่ยวกับหุ่นยนต์และ AI " +
          "(เนื่องจากไม่สามารถเข้าถึง URL ได้โดยตรง) " +
          "โดยตอบเป็น JSON รูปแบบนี้:\n" +
          '{"title": "...", "summary": "...", "tag": "..."}\n' +
          "ให้เขียนเป็นภาษาไทยที่เข้าใจง่ายสำหรับเด็กและผู้ปกครอง",
      }],
    };

  } else if (type === "copilot") {
    const { messages } = body;
    if (!messages || !Array.isArray(messages)) {
      return Response.json({ error: "ไม่มี messages" }, { status: 400 });
    }
    payload = {
      model: MODEL,
      max_tokens: 1000,
      system:
        "คุณคือ RoboAI Copilot ผู้ช่วยสอนหุ่นยนต์และเขียนโปรแกรมของ BaanBot Chanthaburi " +
        "ตอบเป็นภาษาไทย เน้นการตั้งคำถามนำ (Scaffolded Questions) " +
        "เพื่อให้เด็กค้นหาคำตอบด้วยตัวเอง ไม่ให้คำตอบตรงๆ " +
        "แต่ช่วย debug และแนะนำทิศทาง ใช้ภาษาง่าย เป็นกันเอง เหมาะสำหรับเด็กอายุ 8-16 ปี",
      messages: messages,
    };

  } else {
    return Response.json({ error: "ไม่รู้จัก type: " + type }, { status: 400 });
  }

  try {
    const anthropicRes = await fetch(ANTHROPIC_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify(payload),
    });

    if (!anthropicRes.ok) {
      const errText = await anthropicRes.text();
      console.error("Anthropic error:", anthropicRes.status, errText);
      return Response.json(
        { error: "Anthropic ตอบกลับ error " + anthropicRes.status },
        { status: anthropicRes.status }
      );
    }

    const data = await anthropicRes.json();
    return Response.json(data);

  } catch (err) {
    console.error("Route error:", err);
    return Response.json({ error: "เกิดข้อผิดพลาดภายในเซิร์ฟเวอร์" }, { status: 500 });
  }
}
