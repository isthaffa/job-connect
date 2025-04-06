import { BookmarkPlus, Briefcase, Clock, CreditCard, MapPin } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "../ui/card";

import { Badge } from '../../components/ui/Badge';

// Mock data for featured jobs
const featuredJobs = [
  {
    id: '1',
    title: 'Senior Software Engineer',
    company: {
      name: 'Tech Solutions Inc.',
      logo: '/placeholder.svg'
    },
    location: 'San Francisco, CA',
    type: 'FULL_TIME',
    salary: {
      min: 120000,
      max: 150000,
      currency: 'USD'
    },
    postedAt: '2 days ago'
  },
  {
    id: '2',
    title: 'UX/UI Designer',
    company: {
      name: 'Creative Designs',
      logo: '/placeholder.svg'
    },
    location: 'Remote',
    type: 'FULL_TIME',
    salary: {
      min: 90000,
      max: 120000,
      currency: 'USD'
    },
    postedAt: '3 days ago'
  },
  {
    id: '3',
    title: 'Data Analyst',
    company: {
      name: 'DataCorp',
      logo: '/placeholder.svg'
    },
    location: 'New York, NY',
    type: 'FULL_TIME',
    salary: {
      min: 85000,
      max: 110000,
      currency: 'USD'
    },
    postedAt: '1 week ago'
  },
  {
    id: '4',
    title: 'Product Manager',
    company: {
      name: 'Innovate Inc.',
      logo: '/placeholder.svg'
    },
    location: 'Chicago, IL',
    type: 'FULL_TIME',
    salary: {
      min: 110000,
      max: 140000,
      currency: 'USD'
    },
    postedAt: '3 days ago'
  }
];

const FeaturedJobs= () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Jobs</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover opportunities from top companies and start your career journey with us
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredJobs.map(job => (
            <Card key={job.id} className="card-hover">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-md border overflow-hidden">
                    <img 
                      src={job.company.logo} 
                      alt={job.company.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <Badge 
                    variant="outline" 
                    className="bg-blue-50 text-jobify-primary border-blue-100"
                  >
                    {job.type.replace('_', ' ')}
                  </Badge>
                </div>
                <CardTitle className="mt-4 text-xl">
                  <Link to={`/jobs/${job.id}`} className="hover:text-jobify-primary">
                    {job.title}
                  </Link>
                </CardTitle>
                <CardDescription>{job.company.name}</CardDescription>
              </CardHeader>
              
              <CardContent className="pb-3">
                <div className="space-y-2">
                  <div className="flex items-center text-gray-500">
                    <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                    <span className="text-sm">{job.location}</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <CreditCard className="h-4 w-4 mr-2 text-gray-400" />
                    <span className="text-sm">
                      ${job.salary.min.toLocaleString()} - ${job.salary.max.toLocaleString()} / year
                    </span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Clock className="h-4 w-4 mr-2 text-gray-400" />
                    <span className="text-sm">{job.postedAt}</span>
                  </div>
                </div>
              </CardContent>
              
              <CardFooter className="flex justify-between pt-2">
                <Button variant="ghost" size="sm">
                  <BookmarkPlus className="h-4 w-4 mr-2" />
                  Save
                </Button>
                
                <Button asChild size="sm" className="bg-jobify-primary hover:bg-jobify-primary/90">
                  <Link to={`/jobs/${job.id}`}>
                    Apply Now
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button asChild variant="outline" className="font-medium">
            <Link to="/jobs">
              Browse All Jobs
              <Briefcase className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobs;