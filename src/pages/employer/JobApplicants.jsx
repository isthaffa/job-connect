import { ChevronLeft, Search } from 'lucide-react';
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'sonner';
import MainLayout from '../../components/layout/main-layout';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Tabs, TabsList, TabsTrigger } from "../../components/ui/Tabs";
import { ApplicationStatus } from '../../model';
import ApplicantDetails from './components/ApplicantDetails';
import ApplicantsList from './components/ApplicantsList';

const mockJob = {
  id: '1',
  title: 'Senior Software Engineer',
  company: {
    name: 'Tech Solutions Inc.',
    logo: '/placeholder.svg'
  },
  location: 'San Francisco, CA',
  type: 'FULL_TIME',
  postedAt: '2023-03-15T12:00:00Z',
  applicationsCount: 18
};

const mockApplicants = [
  {
    id: '1',
    job: mockJob,
    resume: { id: 'r1', name: 'John_Doe_Resume.pdf', url: '/sample-resume.pdf', uploadedAt: '2023-03-16T10:30:00Z' },
    status: ApplicationStatus.APPLIED,
    appliedAt: '2023-03-16T10:30:00Z',
    candidate: {
      id: 'u1',
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '+1 (123) 456-7890',
      photo: '/placeholder.svg',
      skills: ['JavaScript', 'React', 'Node.js', 'TypeScript', 'MongoDB'],
      experience: '5 years',
      coverLetter: 'I am excited to apply for the Senior Software Engineer position...'
    }
  },
  // More mock applicants here...
];

const JobApplicants = () => {
  const { id } = useParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedApplicant, setSelectedApplicant] = useState(null);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: 'numeric' }).format(date);
  };

  const updateApplicationStatus = (applicationId, newStatus) => {
    console.log(`Update application ${applicationId} to status: ${newStatus}`);
    toast(`The candidate's status has been changed to ${newStatus}.`);
  };

  const filteredApplicants = mockApplicants.filter(applicant => {
    const matchesSearch =
      applicant.candidate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      applicant.candidate.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || applicant.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const applicantDetails = selectedApplicant 
    ? mockApplicants.find(app => app.id === selectedApplicant) 
    : null;

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Button asChild variant="outline" size="sm">
            <Link to="/employer/jobs">
              <ChevronLeft className="h-4 w-4 mr-2" />
              Back to Jobs
            </Link>
          </Button>
        </div>

        <div className="mb-6">
          <h1 className="text-2xl font-bold">Applicants for {mockJob.title}</h1>
          <p className="text-gray-600">
            {mockJob.applicationsCount} applications • Posted {formatDate(mockJob.postedAt)}
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full" onValueChange={setStatusFilter}>
          <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
            <div className="flex justify-between items-center mb-4">
              <TabsList>
                <TabsTrigger value="all">All ({mockApplicants.length})</TabsTrigger>
                <TabsTrigger value={ApplicationStatus.APPLIED}>New</TabsTrigger>
                <TabsTrigger value={ApplicationStatus.REVIEWING}>Reviewing</TabsTrigger>
                <TabsTrigger value={ApplicationStatus.SHORTLISTED}>Shortlisted</TabsTrigger>
                <TabsTrigger value={ApplicationStatus.INTERVIEW}>Interview</TabsTrigger>
                <TabsTrigger value={ApplicationStatus.REJECTED}>Rejected</TabsTrigger>
              </TabsList>

              <div className="relative w-64">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search applicants..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-1">
              <ApplicantsList
                applicants={filteredApplicants}
                selectedApplicantId={selectedApplicant}
                onSelectApplicant={setSelectedApplicant}
              />
            </div>

            <div className="md:col-span-2">
              <ApplicantDetails
                applicant={applicantDetails}
                onStatusChange={updateApplicationStatus}
              />
            </div>
          </div>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default JobApplicants;