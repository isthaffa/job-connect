import React from 'react';
import { Card } from '../../../components/ui/card';


const JobDescription = ({ description, responsibilities, requirements }) => {
  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-4">Job Description</h2>
      <p className="mb-6">{description}</p>
      
      <h3 className="font-semibold text-lg mb-3">Responsibilities:</h3>
      <ul className="list-disc pl-5 mb-6 space-y-2">
        {responsibilities.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      
      <h3 className="font-semibold text-lg mb-3">Requirements:</h3>
      <ul className="list-disc pl-5 space-y-2">
        {requirements.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </Card>
  );
};

export default JobDescription;