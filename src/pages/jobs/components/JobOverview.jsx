import { Briefcase, Building, Calendar, Clock, CreditCard, MapPin } from 'lucide-react';
import React from 'react';
import { Button } from '../../../components/ui/button';
import { Card } from '../../../components/ui/card';



const JobOverview = ({ 
  job, 
  postedDate, 
  deadlineDate, 
  daysRemaining, 
  onApplyClick 
}) => {
  return (
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
            <div>{deadlineDate} ({daysRemaining} days left)</div>
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
        <Button 
          className="w-full bg-jobify-primary hover:bg-jobify-primary/90" 
          onClick={onApplyClick}
        >
          Apply Now
        </Button>
      </div>
    </Card>
  );
};

export default JobOverview;