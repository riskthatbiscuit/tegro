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
      <div
        style={{
          padding: '20px',
          backgroundColor: '#2AB4D4',
          color: 'white',
          textAlign: 'center',
          borderRadius: '8px',
        }}
      >
        <h2 style={{ margin: '0 0 10px 0', fontSize: '24px' }}>TEGRO P</h2>

      </div>
      <h1
        style={{
          textAlign: 'center',
          color: '#333',
          fontSize: '22px',
          marginTop: '20px',
        }}
      >
        Hi Tegro Team!
      </h1>
      <p style={{ fontSize: '16px', marginTop: '10px' }}>
        We've received a new {type} request from the website.
      </p>

      {/* Resource Information */}
      {resource && (
        <>
          <h2 style={{ fontSize: '18px', color: '#333', marginTop: '20px' }}>
            Requested Resource:
          </h2>
          <p style={{ fontSize: '16px' }}>{resource}</p>
        </>
      )}

      {/* Other Details */}
      <h2 style={{ fontSize: '18px', color: '#333', marginTop: '20px' }}>
        Details:
      </h2>
      <ul style={{ listStyleType: 'none', padding: '0' }}>
        <li>
          <strong>Email:</strong> {email}
        </li>
        {firstName && lastName && (
          <li>
            <strong>Name:</strong> {firstName} {lastName}
          </li>
        )}
        {phoneNumber && (
          <li>
            <strong>Phone:</strong> {phoneNumber}
          </li>
        )}
        {message && (
          <li>
            <strong>Message:</strong> {message}
          </li>
        )}
      </ul>
    </div>
  );
};
