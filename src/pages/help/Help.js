import React from 'react';

const Help = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Help Center</h1>
      
      <div className="max-w-3xl mx-auto">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">How do I create an account?</h3>
              <p className="text-gray-700">
                To create an account, click on the "Register" button in the top right corner of the page. Fill in your details and follow the instructions to complete your registration.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">How do I search for jobs?</h3>
              <p className="text-gray-700">
                Use the search bar at the top of the page to enter keywords, location, or job title. You can also use filters to narrow down your search results.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">How do I apply for a job?</h3>
              <p className="text-gray-700">
                When you find a job you're interested in, click on the "Apply" button. You'll be prompted to upload your resume and cover letter, or you can use your existing profile.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">For Job Seekers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Creating a Profile</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Complete your personal information</li>
                <li>Add your work experience</li>
                <li>Upload your resume</li>
                <li>Set your job preferences</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Job Search Tips</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Use specific keywords</li>
                <li>Set up job alerts</li>
                <li>Save interesting jobs</li>
                <li>Follow companies</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">For Employers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Posting Jobs</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Create a company profile</li>
                <li>Write clear job descriptions</li>
                <li>Set job requirements</li>
                <li>Choose posting duration</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Managing Applications</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Review applications</li>
                <li>Communicate with candidates</li>
                <li>Schedule interviews</li>
                <li>Track hiring progress</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Contact Support</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-700 mb-4">
              If you need further assistance, our support team is here to help. You can reach us through:
            </p>
            <ul className="list-disc list-inside text-gray-700">
              <li>Email: support@jobapp.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Live Chat: Available Monday-Friday, 9am-5pm EST</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Help; 