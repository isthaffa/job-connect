import React from 'react';
import { formatDate } from '../../../lib/dateUtils';
import ApplicationStatusBadge from './ApplicantStatus';

const ApplicantCard = ({ applicant, isSelected, onClick }) => {
  return (
    <div 
      className={`p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors ${
        isSelected ? 'bg-gray-100' : ''
      }`}
      onClick={onClick}
    >
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <img 
            src={applicant.candidate.photo} 
            alt={applicant.candidate.name} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1">
          <h3 className="font-medium">{applicant.candidate.name}</h3>
          <p className="text-sm text-gray-600">{applicant.candidate.email}</p>
          <div className="flex items-center mt-1">
            <ApplicationStatusBadge status={applicant.status} />
            <span className="text-xs text-gray-500 ml-2">
              Applied {formatDate(applicant.appliedAt)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicantCard;
