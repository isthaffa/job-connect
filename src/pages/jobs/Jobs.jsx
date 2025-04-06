import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
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
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../../components/ui/card';
import { Checkbox } from '../../components/ui/checkbox';
import { Input } from '../../components/ui/input';
import { Badge } from '../../components/ui/Badge';

const mockJobs = [
  {
    id: '1',
    title: 'Senior Software Engineer',
    company: { name: 'Tech Solutions Inc.', logo: '/placeholder.svg' },
    location: 'San Francisco, CA',
    type: 'FULL_TIME',
    salary: { min: 120000, max: 150000, currency: 'USD' },
    description: 'We are looking for a Senior Software Engineer...',
    requirements: ['5+ years', 'React', 'Node.js'],
    postedAt: '2 days ago'
  },
  {
    id: '2',
    title: 'UX/UI Designer',
    company: { name: 'Creative Designs', logo: '/placeholder.svg' },
    location: 'Remote',
    type: 'FULL_TIME',
    salary: { min: 90000, max: 120000, currency: 'USD' },
    description: 'Join our design team to create beautiful UI...',
    requirements: ['3+ years', 'Figma', 'UX Research'],
    postedAt: '3 days ago'
  },
  {
    id: '3',
    title: 'Product Manager',
    company: { name: 'Innovate Inc.', logo: '/placeholder.svg' },
    location: 'Chicago, IL',
    type: 'FULL_TIME',
    salary: { min: 110000, max: 140000, currency: 'USD' },
    description: 'Lead product development and strategy...',
    requirements: ['Product mgmt', 'Agile'],
    postedAt: '3 days ago'
  }
];

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
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const handleExperienceChange = (id) => {
    setSelectedExperience(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const filteredJobs = mockJobs.filter(job => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.name.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesLocation =
      !location || job.location.toLowerCase().includes(location.toLowerCase());

    const matchesJobType =
      selectedJobTypes.length === 0 ||
      selectedJobTypes.includes(job.type.toLowerCase().replace('_', '-'));

    const matchesSalary =
      !salaryRange ||
      (() => {
        const [min, max] = salaryRange.includes('+')
          ? [150000, Infinity]
          : salaryRange.split('-').map(Number);
        return job.salary.min >= min && job.salary.max <= max;
      })();

    return matchesSearch && matchesLocation && matchesJobType && matchesSalary;
  });

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Find Your Next Job</h1>

        {/* Search & Filters */}
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
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button onClick={() => setShowFilters(!showFilters)} variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
            <Button className="bg-jobify-primary hover:bg-jobify-primary/90">
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
          </div>

          {showFilters && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4 pt-4 border-t">
              <div>
                <h3 className="font-medium mb-3">Job Type</h3>
                {jobTypes.map(type => (
                  <div key={type.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={`job-type-${type.id}`}
                      checked={selectedJobTypes.includes(type.id)}
                      onCheckedChange={() => handleJobTypeChange(type.id)}
                    />
                    <label htmlFor={`job-type-${type.id}`} className="text-sm">{type.label}</label>
                  </div>
                ))}
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
                {experienceLevels.map(level => (
                  <div key={level.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={`exp-${level.id}`}
                      checked={selectedExperience.includes(level.id)}
                      onCheckedChange={() => handleExperienceChange(level.id)}
                    />
                    <label htmlFor={`exp-${level.id}`} className="text-sm">{level.label}</label>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Job Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.map(job => (
            <Card key={job.id} className="card-hover">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <img src={job.company.logo} alt={job.company.name} className="w-12 h-12 rounded-md border" />
                  <Badge variant="outline" className="bg-blue-50 text-jobify-primary">
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

              <CardContent>
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <MapPin className="h-4 w-4 mr-2" />
                  {job.location}
                </div>
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <CreditCard className="h-4 w-4 mr-2" />
                  ${job.salary.min.toLocaleString()} - ${job.salary.max.toLocaleString()} / year
                </div>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Clock className="h-4 w-4 mr-2" />
                  {job.postedAt}
                </div>
                <div className="line-clamp-2 text-sm">{job.description}</div>
              </CardContent>

              <CardFooter className="flex justify-between items-center pt-2">
                <Button variant="ghost" size="sm">
                  <BookmarkPlus className="h-4 w-4 mr-1" /> Save
                </Button>
                <Button asChild size="sm" className="bg-jobify-primary hover:bg-jobify-primary/90">
                  <Link to={`/jobs/${job.id}`}>Apply Now</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {filteredJobs.length === 0 && (
          <div className="text-center py-16 col-span-full">
            <h3 className="text-xl font-medium mb-2">No matching jobs found</h3>
            <p className="text-gray-500">Try adjusting your search or filters to find more opportunities.</p>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default Jobs;
