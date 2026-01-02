import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const data = await request.json();

        // In a real production app, you would use a service like Nodemailer, Resend, or SendGrid here
        console.log('Contact form submission:', data);

        return NextResponse.json({ message: "Success" }, { status: 200 });
    } catch (err) {
        return NextResponse.json({ error: "Failed to process request" }, { status: 500 });
    }
}
