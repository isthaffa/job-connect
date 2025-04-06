import React from 'react';
import { Card } from '../../../components/ui/card';



const CompanyInfo = ({ company }) => {
  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-4">About {company.name}</h2>
      <p className="mb-4">{company.about}</p>
      <a 
        href={company.website} 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-jobify-primary hover:underline inline-flex items-center"
      >
        Visit Website
      </a>
    </Card>
  );
};

export default CompanyInfo;
