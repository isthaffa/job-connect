import {
  BookmarkPlus,
  Briefcase,
  Building,
  Calendar,
  ChevronLeft,
  Clock,
  CreditCard,
  FileText,
  MapPin,
  Share2
} from 'lucide-react';
import { Badge } from '../../components/ui/Badge';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'sonner';
import MainLayout from '../../components/layout/main-layout';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../components/ui/form";
import { Input } from '../../components/ui/input';
import { Textarea } from '../../components/ui/textarea';

const mockJobs = [
  {
    id: '1',
    title: 'Senior Software Engineer',
    company: {
      name: 'Tech Solutions Inc.',
      logo: '/placeholder.svg',
      website: 'https://techsolutions.example.com',
      about: 'Tech Solutions Inc. is a leading software development company that specializes in building enterprise applications.',
    },
    location: 'San Francisco, CA',
    type: 'FULL_TIME',
    salary: {
      min: 120000,
      max: 150000,
      currency: 'USD'
    },
    description: 'We are looking for a Senior Software Engineer to join our team and help build scalable software solutions.',
    responsibilities: [
      'Design, develop and maintain high-performance applications',
      'Write clean, maintainable code',
      'Collaborate with cross-functional teams',
      'Mentor junior developers',
      'Participate in code reviews and technical discussions'
    ],
    requirements: [
      '5+ years of experience in software development',
      'Strong expertise in JavaScript/TypeScript',
      'Experience with React and modern frontend frameworks',
      'Knowledge of Node.js and backend development',
      'Experience with database design and optimization'
    ],
    postedAt: '2023-03-15T12:00:00Z',
    deadline: '2023-04-15T23:59:59Z'
  }
];



const JobDetail = () => {
  const { id } = useParams();
  const [isApplying, setIsApplying] = useState(false);
  const job = mockJobs.find(job => job.id === id);

  const form = useForm({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      coverLetter: '',
      resume: null
    }
  });

  if (!job) {
    return (
      <MainLayout>
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-2xl font-bold mb-4">Job Not Found</h1>
          <p className="mb-6">Sorry, the job you're looking for does not exist or has been removed.</p>
          <Button asChild variant="outline">
            <Link to="/jobs">
              <ChevronLeft className="h-4 w-4 mr-2" />
              Back to Jobs
            </Link>
          </Button>
        </div>
      </MainLayout>
    );
  }

  const handleApply = (data) => {
    console.log('Application submitted:', data);
    toast.success("Thank you for applying. The employer will review your application."
 );
    setIsApplying(false);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: 'numeric' }).format(date);
  };

  const postedDate = formatDate(job.postedAt);
  const deadlineDate = formatDate(job.deadline);

  const daysRemaining = () => {
    const today = new Date();
    const deadline = new Date(job.deadline);
    const diffTime = deadline.getTime() - today.getTime();
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Button asChild variant="outline" size="sm">
            <Link to="/jobs">
              <ChevronLeft className="h-4 w-4 mr-2" />
              Back to Jobs
            </Link>
          </Button>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div className="flex items-start gap-4 mb-4 md:mb-0">
              <div className="w-16 h-16 rounded-md border overflow-hidden">
                <img 
                  src={job.company.logo} 
                  alt={job.company.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold mb-1">{job.title}</h1>
                <div className="text-gray-600 mb-2">
                  <Link to="#" className="hover:text-jobify-primary">
                    {job.company.name}
                  </Link>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="bg-blue-50 text-blue-600 border-blue-100">
                    {job.type.replace('_', ' ')}
                  </Badge>
                  <div className="flex items-center text-gray-500 text-sm">
                    <MapPin className="h-3 w-3 mr-1" />
                    {job.location}
                  </div>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Clock className="h-3 w-3 mr-1" />
                    {postedDate}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <BookmarkPlus className="h-4 w-4 mr-2" />
                Save
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
              
              <Dialog open={isApplying} onOpenChange={setIsApplying}>
                <DialogTrigger asChild>
                  <Button size="sm" className="bg-jobify-primary hover:bg-jobify-primary/90">
                    Apply Now
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[525px]">
                  <DialogHeader>
                    <DialogTitle>Apply for {job.title}</DialogTitle>
                    <DialogDescription>
                      Fill in your details to apply for this position at {job.company.name}.
                    </DialogDescription>
                  </DialogHeader>
                  
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(handleApply)} className="space-y-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter your full name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="Enter your email" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                              <Input type="tel" placeholder="Enter your phone number" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="resume"
                        render={({ field: { value, onChange, ...fieldProps } }) => (
                          <FormItem>
                            <FormLabel>Resume</FormLabel>
                            <FormControl>
                              <div className="grid w-full gap-1.5">
                                <Input 
                                  id="resume" 
                                  type="file" 
                                  accept=".pdf,.doc,.docx"
                                  onChange={(e) => onChange(e.target.files)}
                                  {...fieldProps}
                                />
                              </div>
                            </FormControl>
                            <FormDescription>
                              Upload your resume (PDF, DOC, DOCX)
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="coverLetter"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Cover Letter</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Tell us why you're interested in this position"
                                className="min-h-[120px]"
                                {...field}
                              />
                            </FormControl>
                            <FormDescription>
                              Briefly explain why you're a good fit for this role
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <DialogFooter>
                        <Button variant="outline" onClick={() => setIsApplying(false)}>
                          Cancel
                        </Button>
                        <Button type="submit" className="bg-jobify-primary hover:bg-jobify-primary/90">
                          Submit Application
                        </Button>
                      </DialogFooter>
                    </form>
                  </Form>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-6">
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Job Description</h2>
              <p className="mb-6">{job.description}</p>
              
              <h3 className="font-semibold text-lg mb-3">Responsibilities:</h3>
              <ul className="list-disc pl-5 mb-6 space-y-2">
                {job.responsibilities.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              
              <h3 className="font-semibold text-lg mb-3">Requirements:</h3>
              <ul className="list-disc pl-5 space-y-2">
                {job.requirements.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </Card>
            
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">About {job.company.name}</h2>
              <p className="mb-4">{job.company.about}</p>
              <a 
                href={job.company.website} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-jobify-primary hover:underline inline-flex items-center"
              >
                Visit Website
              </a>
            </Card>
          </div>
          
          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="p-6">
              <h2 className="text-lg font-semibold mb-4">Job Overview</h2>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-50 p-2 rounded-md mr-3">
                    <Calendar className="h-5 w-5 text-jobify-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Date Posted</div>
                    <div>{postedDate}</div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-50 p-2 rounded-md mr-3">
                    <Clock className="h-5 w-5 text-jobify-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Application Deadline</div>
                    <div>{deadlineDate} ({daysRemaining()} days left)</div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-50 p-2 rounded-md mr-3">
                    <Briefcase className="h-5 w-5 text-jobify-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Job Type</div>
                    <div>{job.type.replace('_', ' ')}</div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-50 p-2 rounded-md mr-3">
                    <MapPin className="h-5 w-5 text-jobify-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Location</div>
                    <div>{job.location}</div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-50 p-2 rounded-md mr-3">
                    <CreditCard className="h-5 w-5 text-jobify-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Salary</div>
                    <div>${job.salary.min.toLocaleString()} - ${job.salary.max.toLocaleString()} / year</div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-50 p-2 rounded-md mr-3">
                    <Building className="h-5 w-5 text-jobify-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Company</div>
                    <div>{job.company.name}</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <Button className="w-full bg-jobify-primary hover:bg-jobify-primary/90" onClick={() => setIsApplying(true)}>
                  Apply Now
                </Button>
              </div>
            </Card>
            
            <Card className="p-6">
              <h2 className="text-lg font-semibold mb-4">Quick Apply Tips</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="bg-green-50 p-1 rounded-full">
                    <div className="h-4 w-4 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-sm">Tailor your resume to match the job requirements</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="bg-green-50 p-1 rounded-full">
                    <div className="h-4 w-4 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-sm">Write a personalized cover letter</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="bg-green-50 p-1 rounded-full">
                    <div className="h-4 w-4 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-sm">Research the company before applying</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="bg-green-50 p-1 rounded-full">
                    <div className="h-4 w-4 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-sm">Follow up after submitting your application</span>
                </li>
              </ul>
              
              <div className="mt-4 pt-4 border-t">
                <Link to="/profile/resume" className="text-jobify-primary hover:underline inline-flex items-center">
                  <FileText className="h-4 w-4 mr-2" />
                  Update Your Resume
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default JobDetail;
