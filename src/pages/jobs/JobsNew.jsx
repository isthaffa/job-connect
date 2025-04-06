import {
  BookmarkPlus,
  Clock,
  CreditCard,
  Filter,
  MapPin,
  Search
} from 'lucide-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../../components/layout/main-layout';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../../components/ui/card';
import { Checkbox } from '../../components/ui/checkbox';
import { Input } from '../../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { mockJobs } from './data/mockjobs';



const jobTypes = [
  { id: 'full-time', label: 'Full Time' },
  { id: 'part-time', label: 'Part Time' },
  { id: 'contract', label: 'Contract' },
  { id: 'remote', label: 'Remote' }
];

const experienceLevels = [
  { id: 'entry', label: 'Entry Level' },
  { id: 'mid', label: 'Mid Level' },
  { id: 'senior', label: 'Senior Level' },
  { id: 'lead', label: 'Lead/Manager' }
];

const Jobs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [selectedJobTypes, setSelectedJobTypes] = useState([]);
  const [salaryRange, setSalaryRange] = useState('');
  const [selectedExperience, setSelectedExperience] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  
  const handleJobTypeChange = (id) => {
    setSelectedJobTypes(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };
  
  const handleExperienceChange = (id) => {
    setSelectedExperience(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };
  
  const filteredJobs = mockJobs.filter(job => {
    return job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
           job.company.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Find Your Next Job</h1>
        
        {/* Search and filters */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input 
                placeholder="Job title, company, or keywords" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex-1 relative">
              <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input 
                placeholder="Location (city or remote)" 
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button 
              onClick={() => setShowFilters(!showFilters)}
              variant="outline"
              className="md:w-auto"
            >
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
            <Button className="bg-jobify-primary hover:bg-jobify-primary/90">
              <Search className="h-4 w-4 mr-2" />
              Search Jobs
            </Button>
          </div>
          
          {/* Advanced filters */}
          {showFilters && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4 pt-4 border-t">
              <div>
                <h3 className="font-medium mb-3">Job Type</h3>
                <div className="space-y-2">
                  {jobTypes.map(type => (
                    <div key={type.id} className="flex items-center">
                      <Checkbox 
                        id={`job-type-${type.id}`}
                        checked={selectedJobTypes.includes(type.id)}
                        onCheckedChange={() => handleJobTypeChange(type.id)}
                      />
                      <label 
                        htmlFor={`job-type-${type.id}`}
                        className="ml-2 text-sm"
                      >
                        {type.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-medium mb-3">Salary Range</h3>
                <Select value={salaryRange} onValueChange={setSalaryRange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select salary range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-50000">$0 - $50,000</SelectItem>
                    <SelectItem value="50000-80000">$50,000 - $80,000</SelectItem>
                    <SelectItem value="80000-100000">$80,000 - $100,000</SelectItem>
                    <SelectItem value="100000-150000">$100,000 - $150,000</SelectItem>
                    <SelectItem value="150000+">$150,000+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <h3 className="font-medium mb-3">Experience Level</h3>
                <div className="space-y-2">
                  {experienceLevels.map(level => (
                    <div key={level.id} className="flex items-center">
                      <Checkbox 
                        id={`exp-${level.id}`}
                        checked={selectedExperience.includes(level.id)}
                        onCheckedChange={() => handleExperienceChange(level.id)}
                      />
                      <label 
                        htmlFor={`exp-${level.id}`}
                        className="ml-2 text-sm"
                      >
                        {level.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
        
        {/* Job Listings */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.map(job => (
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
                <div className="text-sm text-gray-600">{job.company.name}</div>
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
                <div className="mt-4 text-sm line-clamp-2">
                  {job.description}
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
        
        {filteredJobs.length === 0 && (
          <div className="text-center py-16">
            <h3 className="text-xl font-medium mb-2">No matching jobs found</h3>
            <p className="text-gray-500">Try adjusting your search or filters to find more opportunities.</p>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default Jobs;