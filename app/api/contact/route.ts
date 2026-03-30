import { NextRequest, NextResponse } from "next/server";

interface ContactPayload {
  name: string;
  company: string;
  country: string;
  email: string;
  phone?: string;
  productInterest?: string;
  message: string;
}

function buildEmailBody(data: ContactPayload): string {
  return `
New inquiry from JamesSplice website

Name:             ${data.name}
Company:          ${data.company}
Country:          ${data.country}
Email:            ${data.email}
Phone/WhatsApp:   ${data.phone || "-"}
Product Interest: ${data.productInterest || "-"}

Message:
${data.message}
  `.trim();
}

export async function POST(req: NextRequest) {
  try {
    const body: ContactPayload = await req.json();

    const { name, company, country, email, message } = body;
    if (!name || !company || !country || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL;
    const fromEmail = process.env.RESEND_FROM_EMAIL || "noreply@jamesplice.com";

    if (!resendApiKey || !contactEmail) {
      // In development without env vars, log and return success
      console.log("[Contact Form] Email env vars not set. Payload:", body);
      return NextResponse.json({ success: true });
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [contactEmail],
        reply_to: email,
        subject: `[JamesSplice Inquiry] ${name} - ${body.productInterest || "General"}`,
        text: buildEmailBody(body),
      }),
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      console.error("[Contact] Resend error:", err);
      return NextResponse.json(
        { error: "Failed to send email. Please try again later." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[Contact] Unexpected error:", err);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
