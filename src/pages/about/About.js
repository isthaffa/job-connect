import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">About Us</h1>
      
      <div className="max-w-3xl mx-auto">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-700 mb-4">
            At Job App, we're dedicated to connecting talented professionals with their dream jobs and helping companies find the perfect candidates. Our mission is to make the job search process more efficient, transparent, and rewarding for everyone involved.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-700 mb-4">
            Founded in 2024, Job App started with a simple idea: to create a platform that would revolutionize how people find jobs and how companies hire talent. We've grown from a small team to a leading job search platform, serving thousands of users worldwide.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">For Job Seekers</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Advanced job search capabilities</li>
                <li>Personalized job recommendations</li>
                <li>Easy application process</li>
                <li>Career development resources</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">For Employers</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Targeted candidate matching</li>
                <li>Efficient hiring tools</li>
                <li>Company branding opportunities</li>
                <li>Analytics and insights</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Transparency</h3>
              <p className="text-gray-700">We believe in open and honest communication between job seekers and employers.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-gray-700">We continuously improve our platform to provide the best experience for our users.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Community</h3>
              <p className="text-gray-700">We foster a supportive environment where everyone can grow and succeed.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About; 