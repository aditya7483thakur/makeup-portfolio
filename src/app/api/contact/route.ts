import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const data = await req.json();
  const { name, location, makeupType, message, email } = data;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS, // App password if Gmail
    },
  });

  try {
    // Email to site owner
    await transporter.sendMail({
      from: `"Website Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `New Contact Request from ${name}`,
      html: `<p><b>Name:</b> ${name}</p>
             <p><b>Email:</b> ${email}</p>
             <p><b>Location:</b> ${location}</p>
             <p><b>Makeup Type:</b> ${makeupType}</p>
             <p><b>Message:</b> ${message}</p>`,
    });

    // Confirmation email to user
    await transporter.sendMail({
      from: `"Website Contact" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "We received your request",
      html: `<p>Hi ${name},</p>
             <p>Thanks for contacting us. We received your request and will reach out to you soon!</p>`,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ success: false, error }), {
      status: 500,
    });
  }
}
