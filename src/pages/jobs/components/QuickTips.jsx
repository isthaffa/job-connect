import { FileText } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../../../components/ui/card';

const QuickTips = () => {
  return (
    <Card className="p-6">
      <h2 className="text-lg font-semibold mb-4">Quick Apply Tips</h2>
      <ul className="space-y-3">
        <li className="flex items-start gap-2">
          <div className="bg-green-50 p-1 rounded-full">
            <div className="h-4 w-4 bg-green-500 rounded-full"></div>
          </div>
          <span className="text-sm">Tailor your resume to match the job requirements</span>
        </li>
        <li className="flex items-start gap-2">
          <div className="bg-green-50 p-1 rounded-full">
            <div className="h-4 w-4 bg-green-500 rounded-full"></div>
          </div>
          <span className="text-sm">Write a personalized cover letter</span>
        </li>
        <li className="flex items-start gap-2">
          <div className="bg-green-50 p-1 rounded-full">
            <div className="h-4 w-4 bg-green-500 rounded-full"></div>
          </div>
          <span className="text-sm">Research the company before applying</span>
        </li>
        <li className="flex items-start gap-2">
          <div className="bg-green-50 p-1 rounded-full">
            <div className="h-4 w-4 bg-green-500 rounded-full"></div>
          </div>
          <span className="text-sm">Follow up after submitting your application</span>
        </li>
      </ul>
      
      <div className="mt-4 pt-4 border-t">
        <Link to="/profile/resume" className="text-jobify-primary hover:underline inline-flex items-center">
          <FileText className="h-4 w-4 mr-2" />
          Update Your Resume
        </Link>
      </div>
    </Card>
  );
};

export default QuickTips;