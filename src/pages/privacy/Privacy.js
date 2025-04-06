import React from 'react';

const Privacy = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      
      <div className="max-w-3xl mx-auto">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">
            At Job App, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Personal Information</h3>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>Name and contact information</li>
              <li>Email address</li>
              <li>Professional background</li>
              <li>Resume and work history</li>
              <li>Job preferences</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Usage Information</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Device information</li>
              <li>IP address</li>
              <li>Browser type</li>
              <li>Pages visited</li>
              <li>Time spent on site</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <ul className="list-disc list-inside text-gray-700">
              <li>To provide and maintain our service</li>
              <li>To notify you about changes to our service</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information to improve our service</li>
              <li>To monitor the usage of our service</li>
              <li>To detect, prevent and address technical issues</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
          <p className="text-gray-700 mb-4">
            We implement appropriate technical and organizational measures to maintain the security of your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <ul className="list-disc list-inside text-gray-700">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing of your data</li>
              <li>Request restriction of processing</li>
              <li>Request transfer of your data</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="text-gray-700">
            If you have any questions about this Privacy Policy, please contact us at:
            <br />
            Email: privacy@jobapp.com
            <br />
            Address: 123 Privacy Street, Data City, DC 12345
          </p>
        </section>
      </div>
    </div>
  );
};

export default Privacy; 