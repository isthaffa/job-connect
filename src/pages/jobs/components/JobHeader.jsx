import { BookmarkPlus, Clock, MapPin, Share2 } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from '../../../components/ui/Badge';
import { Button } from '../../../components/ui/button';


const JobHeader = ({ job, postedDate, onApplyClick }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div className="flex items-start gap-4 mb-4 md:mb-0">
          <div className="w-16 h-16 rounded-md border overflow-hidden">
            <img 
              src={job.company.logo} 
              alt={job.company.name} 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h1 className="text-2xl font-bold mb-1">{job.title}</h1>
            <div className="text-gray-600 mb-2">
              <Link to="#" className="hover:text-jobify-primary">
                {job.company.name}
              </Link>
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="bg-blue-50 text-blue-600 border-blue-100">
                {job.type.replace('_', ' ')}
              </Badge>
              <div className="flex items-center text-gray-500 text-sm">
                <MapPin className="h-3 w-3 mr-1" />
                {job.location}
              </div>
              <div className="flex items-center text-gray-500 text-sm">
                <Clock className="h-3 w-3 mr-1" />
                {postedDate}
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <BookmarkPlus className="h-4 w-4 mr-2" />
            Save
          </Button>
          <Button variant="outline" size="sm">
            <Share2 className="h-4 w-4 mr-2" />
            Share
          </Button>
          
          <Button 
            size="sm" 
            className="bg-jobify-primary hover:bg-jobify-primary/90"
            onClick={onApplyClick}
          >
            Apply Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default JobHeader;