import {
  BarChart,
  BookOpen,
  Briefcase,
  Search,
  Shield,
  Star,
  Upload,
  Users
} from 'lucide-react';
import React from 'react';

const features = [
  {
    title: 'Find The Perfect Job',
    description: 'Thousands of job opportunities from top companies worldwide. Easily filter by location, salary, and more.',
    icon: <Search className="h-10 w-10 text-jobify-primary" />
  },
  {
    title: 'Upload Your Resume',
    description: 'Share your skills and experience with employers. Our platform helps you showcase your talents effectively.',
    icon: <Upload className="h-10 w-10 text-jobify-primary" />
  },
  {
    title: 'Skill Enhancement',
    description: 'Access a wide range of courses designed to improve your skills and advance your career prospects.',
    icon: <BookOpen className="h-10 w-10 text-jobify-primary" />
  },
  {
    title: 'Expert Mentorship',
    description: 'Connect with industry experts and get personalized guidance to navigate your career path confidently.',
    icon: <Users className="h-10 w-10 text-jobify-primary" />
  },
  {
    title: 'Top-Rated Employers',
    description: 'Apply to positions at vetted companies known for excellent work environments and employee satisfaction.',
    icon: <Star className="h-10 w-10 text-jobify-primary" />
  },
  {
    title: 'Secure Applications',
    description: 'Your information is protected with state-of-the-art security measures throughout the application process.',
    icon: <Shield className="h-10 w-10 text-jobify-primary" />
  },
  {
    title: 'Career Analytics',
    description: 'Track your application status and get insights on your performance to improve your job search strategy.',
    icon: <BarChart className="h-10 w-10 text-jobify-primary" />
  },
  {
    title: 'Post Jobs Easily',
    description: 'Employers can quickly post jobs and find qualified candidates matching their requirements.',
    icon: <Briefcase className="h-10 w-10 text-jobify-primary" />
  }
];

const FeatureSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Platform Features</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover all the powerful tools and features designed to make your job search and skill development journey easier
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-6 rounded-lg border border-gray-100 bg-white transition-shadow hover:shadow-md"
            >
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;