const { Resend } = require('resend');

// Manually load env/hardcode for test if needed, or rely on node --env-file
// We will try running with node --env-file=.env first.
const apiKey = process.env.RESEND_API_KEY;
const toEmail = process.env.CONTACT_EMAIL || 'zohaib.s169@gmail.com';

if (!apiKey) {
    console.error("Error: RESEND_API_KEY is missing from environment variables.");
    process.exit(1);
}

const resend = new Resend(apiKey);

async function sendTestEmail() {
    console.log(`Attempting to send email...`);
    console.log(`To: ${toEmail}`);
    console.log(`Using Key: ${apiKey.slice(0, 5)}...`);

    try {
        const data = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: toEmail,
            subject: 'Test Email from Zohaib Portfolio',
            html: '<p>If you see this, the Resend integration is working!</p>'
        });

        if (data.error) {
            console.error('Failed to send email:', data.error);
        } else {
            console.log('Email sent successfully!', data);
        }
    } catch (e) {
        console.error('Exception while sending email:', e);
    }
}

sendTestEmail();
