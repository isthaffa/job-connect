import { ArrowRight, Briefcase, Users } from 'lucide-react';
import { Link } from "react-router-dom";
import { Button } from '../ui/button';
export default function CtaSection() {
  return (
    <section className="py-16 bg-jobify-primary text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Take Your Career to the Next Level?
            </h2>
            <p className="text-white/90 mb-8 text-lg">
              Join thousands of professionals who have already found their dream jobs and enhanced their skills through our platform.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-white text-jobify-primary hover:bg-gray-100">
                <Link to="/register?role=job_seeker" className="font-medium">
                  <Briefcase className="mr-2 h-5 w-5" />
                  Join as Job Seeker
                </Link>
              </Button>
              
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                <Link to="/register?role=employer" className="font-medium">
                  <Users className="mr-2 h-5 w-5" />
                  Join as Employer
                </Link>
              </Button>
            </div>
            
            <div className="mt-8 flex flex-col md:flex-row gap-4 md:gap-8">
              <div className="flex items-center">
                <div className="text-3xl font-bold mr-3">15K+</div>
                <div className="text-white/90">Jobs Posted</div>
              </div>
              
              <div className="flex items-center">
                <div className="text-3xl font-bold mr-3">10K+</div>
                <div className="text-white/90">Successful Hires</div>
              </div>
              
              <div className="flex items-center">
                <div className="text-3xl font-bold mr-3">5K+</div>
                <div className="text-white/90">Companies</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-jobify-primary text-xl font-semibold mb-4">
              Benefits for Employers
            </h3>
            <ul className="text-gray-700 space-y-3 mb-6">
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 text-jobify-secondary mr-2 mt-0.5" />
                <span>Access to a large pool of qualified candidates</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 text-jobify-secondary mr-2 mt-0.5" />
                <span>Easy-to-use job posting and candidate management</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 text-jobify-secondary mr-2 mt-0.5" />
                <span>Automated candidate screening and shortlisting</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 text-jobify-secondary mr-2 mt-0.5" />
                <span>Analytics and insights on your job postings</span>
              </li>
            </ul>
            
            <h3 className="text-jobify-primary text-xl font-semibold mb-4">
              Benefits for Job Seekers
            </h3>
            <ul className="text-gray-700 space-y-3 mb-6">
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 text-jobify-secondary mr-2 mt-0.5" />
                <span>Thousands of job opportunities in one place</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 text-jobify-secondary mr-2 mt-0.5" />
                <span>Personalized job recommendations</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 text-jobify-secondary mr-2 mt-0.5" />
                <span>Skills development through courses and mentorship</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 text-jobify-secondary mr-2 mt-0.5" />
                <span>Resume building and profile enhancement tools</span>
              </li>
            </ul>
            
            <Button asChild className="w-full bg-jobify-primary hover:bg-jobify-primary/90">
              <Link to="/about">
                Learn More About Our Platform
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
} 