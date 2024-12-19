import * as React from 'react';

interface EmailTemplateProps {
  type: string;
  email: string;
  firstName?: string; // Optional fields for flexibility
  lastName?: string;
  phoneNumber?: string;
  message?: string;
  resource?: string; // New field for specific resources
}

export const EmailTemplate: React.FC<EmailTemplateProps> = ({
  type,
  email,
  firstName,
  lastName,
  phoneNumber,
  message,
  resource,
}) => {
  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        color: '#333',
        maxWidth: '600px',
        margin: 'auto',
        backgroundColor: '#f9f9f9',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: '20px',
          backgroundColor: '#2AB4D4',
          color: 'white',
          textAlign: 'center',
          borderRadius: '8px',
        }}
      >
        <h2 style={{ margin: '0 0 10px 0', fontSize: '24px' }}>
          TEGRO PARTNERS
        </h2>
      </div>

      {/* Greeting */}
      <h1
        style={{
          textAlign: 'left',
          color: '#333',
          fontSize: '22px',
          marginTop: '20px',
        }}
      >
        Dear {firstName || 'Valued Subscriber'},
      </h1>

      {/* Body Content */}
      <p style={{ fontSize: '16px', marginTop: '10px' }}>
        Please find attached your copy of the <strong>{resource}</strong> from
        Tegro Commodity Partners.
      </p>
      <p style={{ fontSize: '16px', marginTop: '10px' }}>
        Want to dig deeper into the report?{' '}
        <a
          href={'https://calendly.com/joe-waterfall/joe-waterfall?month=2025-01'}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: '#2AB4D4',
            textDecoration: 'none',
            fontWeight: 'bold',
          }}
        >
          Book a call with the Tegro team today.
        </a>
      </p>
      {/* Signature */}
      <p style={{ fontSize: '16px', marginTop: '20px' }}>
        Thanks,
        <br />
        The Tegro Team
      </p>
    </div>
  );
};
