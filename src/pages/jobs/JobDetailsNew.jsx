import { ChevronLeft } from 'lucide-react';
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import MainLayout from '../../components/layout/main-layout';
import { Button } from '../../components/ui/button';

// Component imports
import ApplicationForm from './components/ApplicationForm';
import CompanyInfo from './components/CompanyInfo';
import JobDescription from './components/JobDescription';
import JobHeader from './components/JobHeader';
import JobNotFound from './components/JobNotFound';
import JobOverview from './components/JobOverview';
import QuickTips from './components/QuickTips';

// Utils imports
import { toast } from 'sonner';
import { calculateDaysRemaining, formatDate } from '../../lib/dateUtils';
import { mockJobs } from './data/mockjobs';

const JobDetail = () => {
  const { id } = useParams();
  const [isApplying, setIsApplying] = useState(false);
  
  // Find the job based on id from the URL
  const job = mockJobs.find(job => job.id === id);
  
  if (!job) {
    return <JobNotFound />;
  }
  
  const handleApply = (data) => {
    console.log('Application submitted:', data);
    
    // In a real app, you would send this data to your API
    toast("Thank you for applying. The employer will review your application.");
    
    setIsApplying(false);
  };
  
  // Format dates
  const postedDate = formatDate(job.postedAt);
  const deadlineDate = formatDate(job.deadline);
  
  // Calculate days remaining
  const daysRemaining = calculateDaysRemaining(job.deadline);

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
        
        {/* Job Header */}
        <JobHeader 
          job={job} 
          postedDate={postedDate} 
          onApplyClick={() => setIsApplying(true)} 
        />
        
        <div className="grid md:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-6">
            <JobDescription 
              description={job.description}
              responsibilities={job.responsibilities}
              requirements={job.requirements}
            />
            
            <CompanyInfo company={job.company} />
          </div>
          
          {/* Sidebar */}
          <div className="space-y-6">
            <JobOverview 
              job={job}
              postedDate={postedDate}
              deadlineDate={deadlineDate}
              daysRemaining={daysRemaining}
              onApplyClick={() => setIsApplying(true)}
            />
            
            <QuickTips />
          </div>
        </div>
        
        {/* Application Form Dialog */}
        <ApplicationForm 
          isOpen={isApplying}
          onOpenChange={setIsApplying}
          onSubmit={handleApply}
          jobTitle={job.title}
          companyName={job.company.name}
        />
      </div>
    </MainLayout>
  );
};

export default JobDetail;