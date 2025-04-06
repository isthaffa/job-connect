import React from 'react';

const Terms = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
      
      <div className="max-w-3xl mx-auto">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
          <p className="text-gray-700 mb-4">
            By accessing and using Job App, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Description of Service</h2>
          <p className="text-gray-700 mb-4">
            Job App provides a platform for job seekers to find employment opportunities and for employers to post job listings. We do not guarantee employment or specific results from using our service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. User Responsibilities</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Job Seekers</h3>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>Provide accurate and complete information in your profile</li>
              <li>Maintain the confidentiality of your account</li>
              <li>Use the service for lawful purposes only</li>
              <li>Not engage in any fraudulent activities</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Employers</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Post accurate and legitimate job listings</li>
              <li>Comply with all applicable employment laws</li>
              <li>Maintain confidentiality of candidate information</li>
              <li>Not discriminate based on protected characteristics</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Intellectual Property</h2>
          <p className="text-gray-700 mb-4">
            All content on Job App, including but not limited to text, graphics, logos, and software, is the property of Job App and is protected by copyright and other intellectual property laws.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Limitation of Liability</h2>
          <p className="text-gray-700 mb-4">
            Job App shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Termination</h2>
          <p className="text-gray-700 mb-4">
            We reserve the right to terminate or suspend your account and access to the service at our sole discretion, without notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties, or for any other reason.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Changes to Terms</h2>
          <p className="text-gray-700 mb-4">
            We reserve the right to modify these terms at any time. We will notify users of any changes by posting the new Terms on this page. Your continued use of the service after such modifications constitutes your acknowledgment of the modified Terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">8. Contact Information</h2>
          <p className="text-gray-700">
            If you have any questions about these Terms, please contact us at:
            <br />
            Email: terms@jobapp.com
            <br />
            Address: 123 Terms Street, Legal City, LC 12345
          </p>
        </section>
      </div>
    </div>
  );
};

export default Terms; 