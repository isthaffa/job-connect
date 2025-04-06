import { Calendar, CheckCircle, ExternalLink, FileText, Mail, Phone, User, XCircle } from 'lucide-react';
import React from 'react';
import { Badge } from '../../../components/ui/Badge';
import { Button } from '../../../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../components/ui/card';
import { formatDate } from '../../../lib/dateUtils';
import { ApplicationStatus } from '../../../model';
import StatusUpdateDropdown from './StatusUpdateDropdown';

const ApplicantDetails = ({ applicant, onStatusChange }) => {
  if (!applicant) {
    return (
      <Card className="h-full flex items-center justify-center text-center p-8">
        <div>
          <div className="mx-auto w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-4">
            <User className="h-6 w-6 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium mb-2">No candidate selected</h3>
          <p className="text-gray-500 max-w-md mx-auto">
            Select a candidate from the list to view their details and manage their application.
          </p>
        </div>
      </Card>
    );
  }

  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle>{applicant.candidate.name}</CardTitle>
            <CardDescription>Applied for {applicant.job.title}</CardDescription>
          </div>
          <StatusUpdateDropdown 
            currentStatus={applicant.status} 
            onStatusChange={(status) => onStatusChange(applicant.id, status)} 
          />
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-full bg-blue-50">
              <Mail className="h-4 w-4 text-blue-600" />
            </div>
            <div>
              <div className="text-sm text-gray-500">Email</div>
              <div className="font-medium">{applicant.candidate.email}</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-full bg-green-50">
              <Phone className="h-4 w-4 text-green-600" />
            </div>
            <div>
              <div className="text-sm text-gray-500">Phone</div>
              <div className="font-medium">{applicant.candidate.phone}</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-full bg-purple-50">
              <Calendar className="h-4 w-4 text-purple-600" />
            </div>
            <div>
              <div className="text-sm text-gray-500">Applied on</div>
              <div className="font-medium">{formatDate(applicant.appliedAt)}</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-full bg-amber-50">
              <FileText className="h-4 w-4 text-amber-600" />
            </div>
            <div>
              <div className="text-sm text-gray-500">Resume</div>
              <a 
                href={applicant.resume.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-medium text-jobify-primary flex items-center hover:underline"
              >
                {applicant.resume.name}
                <ExternalLink className="h-3 w-3 ml-1" />
              </a>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-medium mb-2">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {applicant.candidate.skills.map((skill, index) => (
              <Badge key={index} variant="outline" className="bg-gray-50">
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-medium mb-2">Cover Letter</h3>
          <div className="bg-gray-50 p-4 rounded-lg text-gray-700">
            {applicant.candidate.coverLetter}
          </div>
        </div>

        <div className="flex gap-2 mt-6">
          <Button variant="outline">
            <Mail className="h-4 w-4 mr-2" />
            Contact
          </Button>
          {applicant.status !== ApplicationStatus.SHORTLISTED && (
            <Button 
              className="bg-green-600 hover:bg-green-700"
              onClick={() => onStatusChange(applicant.id, ApplicationStatus.SHORTLISTED)}
            >
              <CheckCircle className="h-4 w-4 mr-2" />
              Shortlist Candidate
            </Button>
          )}
          {applicant.status !== ApplicationStatus.REJECTED && (
            <Button 
              variant="outline"
              className="text-red-500 hover:text-red-700 hover:bg-red-50 border-red-200"
              onClick={() => onStatusChange(applicant.id, ApplicationStatus.REJECTED)}
            >
              <XCircle className="h-4 w-4 mr-2" />
              Reject
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ApplicantDetails;
