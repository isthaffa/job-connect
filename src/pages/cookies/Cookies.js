import React from 'react';

const Cookies = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
      
      <div className="max-w-3xl mx-auto">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">What Are Cookies?</h2>
          <p className="text-gray-700 mb-4">
            Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide a better user experience.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">How We Use Cookies</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Essential Cookies</h3>
            <p className="text-gray-700 mb-4">
              These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website.
            </p>

            <h3 className="text-xl font-semibold mb-3">Analytics Cookies</h3>
            <p className="text-gray-700 mb-4">
              We use these cookies to understand how visitors interact with our website by collecting and reporting information anonymously.
            </p>

            <h3 className="text-xl font-semibold mb-3">Functionality Cookies</h3>
            <p className="text-gray-700 mb-4">
              These cookies allow the website to remember choices you make and provide enhanced, more personal features.
            </p>

            <h3 className="text-xl font-semibold mb-3">Marketing Cookies</h3>
            <p className="text-gray-700">
              These cookies are used to track visitors across websites to display relevant advertisements.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Managing Cookies</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-700 mb-4">
              Most web browsers allow you to control cookies through their settings preferences. However, limiting cookies may impact your experience of our website.
            </p>
            <ul className="list-disc list-inside text-gray-700">
              <li>Google Chrome</li>
              <li>Mozilla Firefox</li>
              <li>Microsoft Edge</li>
              <li>Safari</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Third-Party Cookies</h2>
          <p className="text-gray-700 mb-4">
            Some cookies are placed by third-party services that appear on our pages. We have no control over these cookies and they are subject to the privacy policies of the respective third parties.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Updates to This Policy</h2>
          <p className="text-gray-700 mb-4">
            We may update this Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="text-gray-700">
            If you have any questions about our use of cookies, please contact us at:
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

export default Cookies; 