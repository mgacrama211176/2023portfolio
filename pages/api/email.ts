import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { name, email, message, subject } = req.body;

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_TO,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email options
    const mailOptions = (reqBody: any) => {
      const sender = JSON.parse(reqBody);
      console.log(sender);
      return {
        from: sender.email,
        to: process.env.EMAIL_TO, // Your personal email
        subject: sender.subject,
        text: `
       This is a contact from ${sender.name} from portfolio website

        Name: ${sender.name}
        Email: ${sender.email}
        Message: ${sender.message}
      `,
      };
    };

    // Send email
    await transporter.sendMail(mailOptions(req.body));

    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Error sending email" });
  }
}
