import * as React from 'react';

interface ContactEmailProps {
  name: string;
  email: string;
  message: string;
  subject?: string;
}

export const ContactEmail: React.FC<Readonly<ContactEmailProps>> = ({
  name,
  email,
  message,
  subject,
}) => (
  <div style={{ fontFamily: 'sans-serif', padding: '20px', backgroundColor: '#f4f4f4' }}>
    <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <h2 style={{ color: '#333' }}>New Contact Form Submission</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Email:</strong> {email}</p>
      {subject && <p><strong>Subject:</strong> {subject}</p>}
      <div style={{ marginTop: '20px', borderTop: '1px solid #eee', paddingTop: '20px' }}>
        <p><strong>Message:</strong></p>
        <p style={{ whiteSpace: 'pre-wrap' }}>{message}</p>
      </div>
    </div>
  </div>
);
