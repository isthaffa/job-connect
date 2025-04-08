import { formatDistanceToNow } from 'date-fns';
import {
    Briefcase,
    Check,
    Edit,
    Filter,
    Search,
    Trash2,
    XCircle
} from 'lucide-react';
import React, { useState } from 'react';
import MainLayout from '../../components/layout/main-layout';
import { Badge } from '../../components/ui/Badge';
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "../../components/ui/select";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "../../components/ui/table";
import { JobStatus, JobType } from '../../model';
import { mockJobs } from '../jobs/data/mockjobs';

// Extend the mockJobs to include the missing properties required for the UI
const enhancedMockJobs = mockJobs.map(job => ({
  ...job,
  status: Math.random() > 0.7 ? JobStatus.CLOSED : Math.random() > 0.5 ? JobStatus.DRAFT : JobStatus.ACTIVE,
  applicationsCount: Math.floor(Math.random() * 30),
  type: Object.values(JobType)[Math.floor(Math.random() * Object.values(JobType).length)]
}));

const AdminJobs = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const filteredJobs = enhancedMockJobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         job.company.name.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' ? true : job.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  const getStatusBadgeStyle = (status) => {
    switch (status) {
      case JobStatus.ACTIVE:
        return "bg-green-100 text-green-800 border-green-200";
      case JobStatus.CLOSED:
        return "bg-gray-100 text-gray-800 border-gray-200";
      case JobStatus.DRAFT:
        return "bg-amber-100 text-amber-800 border-amber-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getJobTypeBadgeStyle = (type) => {
    switch (type) {
      case JobType.FULL_TIME:
        return "bg-blue-100 text-blue-800 border-blue-200";
      case JobType.PART_TIME:
        return "bg-purple-100 text-purple-800 border-purple-200";
      case JobType.CONTRACT:
        return "bg-amber-100 text-amber-800 border-amber-200";
      case JobType.INTERNSHIP:
        return "bg-green-100 text-green-800 border-green-200";
      case JobType.REMOTE:
        return "bg-indigo-100 text-indigo-800 border-indigo-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <MainLayout userRole="ADMIN">
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">Job Management</h1>
            <p className="text-gray-500 mt-1">Manage and monitor job postings</p>
          </div>
          <div className="mt-4 md:mt-0 space-x-2">
            <Button variant="outline">
              <Check className="mr-2 h-4 w-4" />
              Approve All Pending
            </Button>
            <Button className="bg-green-600 hover:bg-green-700">
              <Briefcase className="mr-2 h-4 w-4" />
              Add New Job
            </Button>
          </div>
        </div>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-4 items-end">
              <div className="flex-1">
                <label className="text-sm font-medium mb-2 block">Search Jobs</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                  <Input 
                    placeholder="Search by title or company" 
                    className="pl-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-full md:w-[200px]">
                <label className="text-sm font-medium mb-2 block">Filter by Status</label>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Statuses" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Statuses</SelectItem>
                    <SelectItem value={JobStatus.ACTIVE}>Active</SelectItem>
                    <SelectItem value={JobStatus.CLOSED}>Closed</SelectItem>
                    <SelectItem value={JobStatus.DRAFT}>Draft</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button variant="outline" className="w-full md:w-auto">
                <Filter className="mr-2 h-4 w-4" />
                More Filters
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Jobs</CardTitle>
            <CardDescription>Manage all job postings in the system</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Job</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Posted</TableHead>
                  <TableHead>Applications</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredJobs.map(job => (
                  <TableRow key={job.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <div className="rounded-md overflow-hidden h-10 w-10 bg-gray-100 flex items-center justify-center">
                          {job.company.logo ? (
                            <img src={job.company.logo} alt={job.company.name} className="h-full w-full object-cover" />
                          ) : (
                            <Briefcase className="h-5 w-5 text-gray-500" />
                          )}
                        </div>
                        <div>
                          <div className="font-medium">{job.title}</div>
                          <div className="text-sm text-gray-500">{job.company.name}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className={getJobTypeBadgeStyle(job.type)}>
                        {job.type}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge className={getStatusBadgeStyle(job.status)}>
                        {job.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      {formatDistanceToNow(new Date(job.postedAt), { addSuffix: true })}
                    </TableCell>
                    <TableCell>
                      {job.applicationsCount}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button size="sm" variant="outline">
                          <Edit className="h-4 w-4" />
                        </Button>
                        {job.status === JobStatus.ACTIVE ? (
                          <Button size="sm" variant="outline" className="text-red-500 hover:text-red-700 hover:bg-red-50">
                            <XCircle className="h-4 w-4" />
                          </Button>
                        ) : (
                          <Button size="sm" variant="outline" className="text-green-500 hover:text-green-700 hover:bg-green-50">
                            <Check className="h-4 w-4" />
                          </Button>
                        )}
                        <Button size="sm" variant="outline" className="text-red-500 hover:text-red-700 hover:bg-red-50">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            
            {filteredJobs.length === 0 && (
              <div className="text-center py-12">
                <div className="mx-auto p-3 mb-4 rounded-full bg-gray-100 w-fit">
                  <Search className="h-6 w-6 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium mb-2">No jobs found</h3>
                <p className="text-gray-500">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default AdminJobs;