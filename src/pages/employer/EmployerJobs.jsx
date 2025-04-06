import { Edit, Plus, Search, Trash2, Users } from 'lucide-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';
import MainLayout from '../../components/layout/main-layout';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Input } from '../../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../components/ui/table';

const mockJobs = [
  {
    id: '1',
    title: 'Senior Software Engineer',
    company: { id: 'c1', name: 'Tech Solutions Inc.', logo: '/placeholder.svg' },
    location: 'San Francisco, CA',
    type: 'FULL_TIME',
    postedAt: '2023-03-15T12:00:00Z',
    deadline: '2023-04-15T23:59:59Z',
    status: 'ACTIVE',
    applicationsCount: 18
  },
  {
    id: '2',
    title: 'UX/UI Designer',
    company: { id: 'c1', name: 'Tech Solutions Inc.', logo: '/placeholder.svg' },
    location: 'Remote',
    type: 'FULL_TIME',
    postedAt: '2023-03-16T12:00:00Z',
    deadline: '2023-04-16T23:59:59Z',
    status: 'ACTIVE',
    applicationsCount: 12
  },
  {
    id: '3',
    title: 'Product Manager',
    company: { id: 'c1', name: 'Tech Solutions Inc.', logo: '/placeholder.svg' },
    location: 'Chicago, IL',
    type: 'FULL_TIME',
    postedAt: '2023-02-15T12:00:00Z',
    deadline: '2023-03-15T23:59:59Z',
    status: 'CLOSED',
    applicationsCount: 24
  },
  {
    id: '4',
    title: 'Data Analyst (Part-Time)',
    company: { id: 'c1', name: 'Tech Solutions Inc.', logo: '/placeholder.svg' },
    location: 'New York, NY',
    type: 'PART_TIME',
    postedAt: '2023-03-10T12:00:00Z',
    deadline: '2023-04-10T23:59:59Z',
    status: 'ACTIVE',
    applicationsCount: 9
  },
  {
    id: '5',
    title: 'Frontend Developer',
    company: { id: 'c1', name: 'Tech Solutions Inc.', logo: '/placeholder.svg' },
    location: 'Boston, MA',
    type: 'CONTRACT',
    postedAt: '2023-03-01T12:00:00Z',
    deadline: '2023-04-01T23:59:59Z',
    status: 'DRAFT',
    applicationsCount: 0
  },
];

const EmployerJobs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: 'numeric' }).format(date);
  };

  const filteredJobs = mockJobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || job.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleDeleteJob = (jobId) => {
    toast.success("The job has been successfully deleted.");
  };

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Manage Job Listings</h1>
          <Button asChild className="bg-jobify-primary hover:bg-jobify-primary/90">
            <Link to="/employer/post-job">
              <Plus className="h-4 w-4 mr-2" /> Post New Job
            </Link>
          </Button>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm mb-6 flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search by job title"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="w-full md:w-48">
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="ACTIVE">Active</SelectItem>
                <SelectItem value="CLOSED">Closed</SelectItem>
                <SelectItem value="DRAFT">Draft</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Card>
          <CardHeader className="pb-4">
            <CardTitle>Your Job Listings</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Job Title</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Posted Date</TableHead>
                  <TableHead>Deadline</TableHead>
                  <TableHead>Applications</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredJobs.length > 0 ? (
                  filteredJobs.map((job) => (
                    <TableRow key={job.id}>
                      <TableCell className="font-medium">
                        <Link to={`/employer/jobs/${job.id}`} className="hover:text-jobify-primary">
                          {job.title}
                        </Link>
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant="outline"
                          className={
                            job.status === 'ACTIVE'
                              ? "bg-green-50 text-green-600 border-green-100"
                              : job.status === 'CLOSED'
                              ? "bg-gray-50 text-gray-600 border-gray-100"
                              : "bg-amber-50 text-amber-600 border-amber-100"
                          }
                        >
                          {job.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{job.type.replace('_', ' ')}</TableCell>
                      <TableCell>{formatDate(job.postedAt)}</TableCell>
                      <TableCell>{formatDate(job.deadline)}</TableCell>
                      <TableCell>
                        <Link to={`/employer/jobs/${job.id}/applicants`} className="inline-flex items-center text-jobify-primary hover:underline">
                          <Users className="h-4 w-4 mr-1" />
                          {job.applicationsCount}
                        </Link>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex items-center justify-end gap-2">
                          <Button variant="outline" size="sm" asChild>
                            <Link to={`/employer/jobs/${job.id}/edit`}>
                              <Edit className="h-3.5 w-3.5" />
                            </Link>
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleDeleteJob(job.id)}
                            className="text-red-500 hover:text-red-700 hover:bg-red-50"
                          >
                            <Trash2 className="h-3.5 w-3.5" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={7} className="text-center py-6 text-gray-500">
                      No jobs found. Try adjusting your search or post a new job.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default EmployerJobs;
