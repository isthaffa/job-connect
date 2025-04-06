import React from 'react';
import { Badge } from '../../../components/ui/Badge';
import { ApplicationStatus } from '../../../model';

const ApplicationStatusBadge = ({ status }) => {
  const getStatusStyles = () => {
    switch (status) {
      case ApplicationStatus.APPLIED:
        return "bg-blue-50 text-blue-600 border-blue-100";
      case ApplicationStatus.REVIEWING:
        return "bg-purple-50 text-purple-600 border-purple-100";
      case ApplicationStatus.SHORTLISTED:
        return "bg-green-50 text-green-600 border-green-100";
      case ApplicationStatus.INTERVIEW:
        return "bg-amber-50 text-amber-600 border-amber-100";
      case ApplicationStatus.REJECTED:
        return "bg-red-50 text-red-600 border-red-100";
      default:
        return "bg-gray-50 text-gray-600 border-gray-100";
    }
  };

  return (
    <Badge variant="outline" className={getStatusStyles()}>
      {status}
    </Badge>
  );
};

export default ApplicationStatusBadge;
