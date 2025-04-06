import { ArrowRight, BookOpen, Briefcase, Search } from 'lucide-react';

import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Input } from "../ui/input";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@radix-ui/react-tabs';

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-br from-jobify-primary to-blue-700 text-white pt-16 pb-20 px-4">
      <div className="container mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Find Your Dream Job & Grow Your Skills
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-8">
            Connect with top employers, discover opportunities, and enhance your skills with expert-led courses
          </p>
          
          <Tabs defaultValue="jobs" className="w-full max-w-3xl mx-auto">
          <TabsList className="bg-white/20 mb-6 inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground">
              <TabsTrigger value="jobs" className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm text-sm md:text-base data-[state=active]:bg-white data-[state=active]:text-jobify-primary">
                <Briefcase className="h-4 w-4 mr-2" />
                Find Jobs
              </TabsTrigger>
              <TabsTrigger value="courses" className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm text-sm md:text-base data-[state=active]:bg-white data-[state=active]:text-jobify-primary">
                <BookOpen className="h-4 w-4 mr-2" />
                Browse Courses
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="jobs" className="mt-0 mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
              <div className="flex flex-col md:flex-row gap-3 bg-white p-3 rounded-lg">
                <div className="flex-grow">
                  <Input 
                    type="text" 
                    placeholder="Job title, keywords, or company" 
                    className="h-12 w-full border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </div>
                <div className="flex-grow">
                  <Input 
                    type="text" 
                    placeholder="Location or remote" 
                    className="h-12 w-full border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </div>
                <Button className="h-12 px-6 bg-jobify-primary hover:bg-jobify-primary/90 text-white">
                  <Search className="h-4 w-4 mr-2" />
                  Search Jobs
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="courses" className="mt-0 mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
              <div className="flex flex-col md:flex-row gap-3 bg-white p-3 rounded-lg">
                <div className="flex-grow">
                  <Input 
                    type="text" 
                    placeholder="Course name or skills" 
                    className="h-12 w-full border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </div>
                <div className="flex-grow">
                  <Input 
                    type="text" 
                    placeholder="Category or level" 
                    className="h-12 w-full border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </div>
                <Button className="h-12 px-6 bg-jobify-secondary hover:bg-jobify-secondary/90 text-white">
                  <Search className="h-4 w-4 mr-2" />
                  Find Courses
                </Button>
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm">
            <span className="opacity-80">Popular searches:</span>
            <Link to="/jobs?q=software" className="opacity-90 hover:opacity-100 underline">Software Engineer</Link>
            <Link to="/jobs?q=data" className="opacity-90 hover:opacity-100 underline">Data Scientist</Link>
            <Link to="/jobs?q=designer" className="opacity-90 hover:opacity-100 underline">UI/UX Designer</Link>
            <Link to="/jobs?q=manager" className="opacity-90 hover:opacity-100 underline">Project Manager</Link>
            <Link to="/jobs?q=remote" className="opacity-90 hover:opacity-100 underline">Remote Jobs</Link>
          </div>
        </div>
        
        <div className="flex justify-center gap-6 mt-10">
          <Button asChild variant="secondary" className="bg-white hover:bg-gray-100 text-jobify-primary">
            <Link to="/register?role=job_seeker" className="font-medium px-6 py-2.5">
              Find Jobs
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          
          <Button asChild variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
            <Link to="/register?role=employer" className="font-medium px-6 py-2.5">
              Post a Job
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;