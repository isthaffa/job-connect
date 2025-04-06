import { CheckCircle, Clock, User, XCircle } from 'lucide-react';
import React from 'react';
import { Button } from '../../../components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "../../../components/ui/dropdown-menu";

// You can move this to a constants file if needed
const ApplicationStatus = {
  APPLIED: 'APPLIED',
  REVIEWING: 'REVIEWING',
  SHORTLISTED: 'SHORTLISTED',
  INTERVIEW: 'INTERVIEW',
  REJECTED: 'REJECTED',
};

const StatusUpdateDropdown = ({ currentStatus, onStatusChange }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm">
          <Clock className="h-4 w-4 mr-2" />
          {currentStatus}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Update Status</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => onStatusChange(ApplicationStatus.APPLIED)}>
          <Clock className="h-4 w-4 mr-2" />
          Applied
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => onStatusChange(ApplicationStatus.REVIEWING)}>
          <Clock className="h-4 w-4 mr-2" />
          Reviewing
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => onStatusChange(ApplicationStatus.SHORTLISTED)}>
          <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
          Shortlist
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => onStatusChange(ApplicationStatus.INTERVIEW)}>
          <User className="h-4 w-4 mr-2 text-amber-500" />
          Interview
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => onStatusChange(ApplicationStatus.REJECTED)}>
          <XCircle className="h-4 w-4 mr-2 text-red-500" />
          Reject
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default StatusUpdateDropdown;
