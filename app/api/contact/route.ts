import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { ContactEmail } from '@/components/emails/ContactEmail';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, subject, message } = body;

        // Check for required fields
        if (!name || !email || !message) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        const data = await resend.emails.send({
            from: 'Contact Form <zohaib.site>', // Use your verified domain here if available
            to: process.env.CONTACT_EMAIL || 'zohaib.s169@gmail.com',
            subject: subject || `New message from ${name}`,
            react: ContactEmail({ name, email, message, subject }),
        });

        if (data.error) {
            console.error('Resend error:', data.error);
            return NextResponse.json({ error: "Failed to send email", details: data.error }, { status: 500 });
        }

        return NextResponse.json({ message: "Success", data }, { status: 200 });
    } catch (err) {
        console.error('Unexpected error:', err);
        return NextResponse.json({ error: "Failed to process request" }, { status: 500 });
    }
}
