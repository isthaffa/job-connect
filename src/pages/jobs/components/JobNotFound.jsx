import { ChevronLeft } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../../../components/layout/main-layout';
import { Button } from '../../../components/ui/button';

const JobNotFound = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Job Not Found</h1>
        <p className="mb-6">Sorry, the job you're looking for does not exist or has been removed.</p>
        <Button asChild variant="outline">
          <Link to="/jobs">
            <ChevronLeft className="h-4 w-4 mr-2" />
            Back to Jobs
          </Link>
        </Button>
      </div>
    </MainLayout>
  );
};

export default JobNotFound;