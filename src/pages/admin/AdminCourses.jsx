import { formatDistanceToNow } from 'date-fns';
import {
    BookOpen,
    Check,
    Edit,
    EyeOff,
    Filter,
    Search,
    Trash2
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
import { CourseLevel } from '../../model';
import { mockCourses } from '../trainer/data/mockCourses';

const AdminCourses = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [levelFilter, setLevelFilter] = useState('all');

  const filteredCourses = mockCourses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         course.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesLevel = levelFilter === 'all' ? true : course.level === levelFilter;
    
    return matchesSearch && matchesLevel;
  });

  const getLevelBadgeStyle = (level) => {
    switch (level) {
      case CourseLevel.BEGINNER:
        return "bg-green-100 text-green-800 border-green-200";
      case CourseLevel.INTERMEDIATE:
        return "bg-blue-100 text-blue-800 border-blue-200";
      case CourseLevel.ADVANCED:
        return "bg-purple-100 text-purple-800 border-purple-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <MainLayout userRole="ADMIN">
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">Course Management</h1>
            <p className="text-gray-500 mt-1">Manage and monitor courses</p>
          </div>
          <div className="mt-4 md:mt-0 space-x-2">
            <Button variant="outline">
              <Check className="mr-2 h-4 w-4" />
              Approve All Pending
            </Button>
            <Button className="bg-purple-600 hover:bg-purple-700">
              <BookOpen className="mr-2 h-4 w-4" />
              Add New Course
            </Button>
          </div>
        </div>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-4 items-end">
              <div className="flex-1">
                <label className="text-sm font-medium mb-2 block">Search Courses</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                  <Input 
                    placeholder="Search by title or description" 
                    className="pl-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-full md:w-[200px]">
                <label className="text-sm font-medium mb-2 block">Filter by Level</label>
                <Select value={levelFilter} onValueChange={setLevelFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Levels" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Levels</SelectItem>
                    <SelectItem value={CourseLevel.BEGINNER}>Beginner</SelectItem>
                    <SelectItem value={CourseLevel.INTERMEDIATE}>Intermediate</SelectItem>
                    <SelectItem value={CourseLevel.ADVANCED}>Advanced</SelectItem>
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
            <CardTitle>Courses</CardTitle>
            <CardDescription>Manage all courses in the system</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Course</TableHead>
                  <TableHead>Trainer</TableHead>
                  <TableHead>Level</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Students</TableHead>
                  <TableHead>Created</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredCourses.map(course => (
                  <TableRow key={course.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <div className="rounded-md overflow-hidden h-10 w-10 bg-gray-100 flex items-center justify-center">
                          {course.thumbnail ? (
                            <img src={course.thumbnail} alt={course.title} className="h-full w-full object-cover" />
                          ) : (
                            <BookOpen className="h-5 w-5 text-gray-500" />
                          )}
                        </div>
                        <div>
                          <div className="font-medium">{course.title}</div>
                          <div className="text-sm text-gray-500">{course.category}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      {course.trainer.name}
                    </TableCell>
                    <TableCell>
                      <Badge className={getLevelBadgeStyle(course.level)}>
                        {course.level}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      ${course.price}
                    </TableCell>
                    <TableCell>
                      {course.enrolledStudents || 0}
                    </TableCell>
                    <TableCell>
                      {formatDistanceToNow(new Date(course.createdAt), { addSuffix: true })}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button size="sm" variant="outline">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline" className="text-amber-500 hover:text-amber-700 hover:bg-amber-50">
                          <EyeOff className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline" className="text-red-500 hover:text-red-700 hover:bg-red-50">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            
            {filteredCourses.length === 0 && (
              <div className="text-center py-12">
                <div className="mx-auto p-3 mb-4 rounded-full bg-gray-100 w-fit">
                  <Search className="h-6 w-6 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium mb-2">No courses found</h3>
                <p className="text-gray-500">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default AdminCourses;