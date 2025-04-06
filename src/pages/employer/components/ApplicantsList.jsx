import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../components/ui/card';
import ApplicantCard from './ApplicantCard';

const ApplicantsList = ({ applicants, selectedApplicantId, onSelectApplicant }) => {
  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Candidates</CardTitle>
        <CardDescription>
          {applicants.length} candidates found
        </CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <div className="max-h-[600px] overflow-y-auto">
          {applicants.length > 0 ? (
            applicants.map((applicant) => (
              <ApplicantCard 
                key={applicant.id}
                applicant={applicant}
                isSelected={selectedApplicantId === applicant.id}
                onClick={() => onSelectApplicant(applicant.id)}
              />
            ))
          ) : (
            <div className="p-8 text-center text-gray-500">
              No applicants match your search criteria.
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ApplicantsList;
