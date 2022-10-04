import { GatsbyFunctionRequest, GatsbyFunctionResponse } from 'gatsby';
import nodemailer from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

interface ContactBody {
  fullname: string;
  email: string;
  phone: string;
  message: string;
}

export default async function contactFormHandler(
  req: GatsbyFunctionRequest<ContactBody>,
  res: GatsbyFunctionResponse
) {
  if (req.method === `POST`) {
    try {
      const body = req.body;

      const transporter = nodemailer.createTransport(
        new SMTPTransport({
          host: 'smtp.gmail.com',
          port: 465,
          secure: true,
          auth: {
            user: process.env.GMAIL_ADDRESS,
            pass: process.env.GMAIL_PASSWORD,
          },
        })
      );

      const htmlMessage = `
        <p>Name: ${body.fullname}</p>
        <p>Email: ${body.email}</p>
        <p>Phone: ${body.phone}</p>
        <p>Message: ${body.message}</p>
      `;

      const info = await transporter.sendMail({
        from: body.email,
        to: process.env.GMAIL_ADDRESS,
        replyTo: body.email,
        subject: 'NEW Contact Form Submission on santoshandyman.com',
        html: htmlMessage,
      });

      if (info.messageId) {
        res.status(200).json({ message: 'Success', messageId: info.messageId });
        return;
      }

      res.status(400).json({ error: 'Error in sending email' });
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  } else {
    // handle other methods or return error
    res.status(405).send({ message: 'Only POST requests allowed' });
  }
}
