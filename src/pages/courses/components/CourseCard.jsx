import { Clock, Star, Users } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from "../../../components/ui/Badge";
import { Button } from "../../../components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "../../../components/ui/card";



const CourseCard= ({ course }) => {
  const getLevelBadgeStyle = (level) => {
    switch (level) {
      case 'BEGINNER':
        return 'bg-green-50 text-green-600 border-green-100';
      case 'INTERMEDIATE':
        return 'bg-amber-50 text-amber-600 border-amber-100';
      case 'ADVANCED':
        return 'bg-red-50 text-red-600 border-red-100';
      default:
        return 'bg-blue-50 text-blue-600 border-blue-100';
    }
  };

  return (
    <Card className="card-hover overflow-hidden h-full flex flex-col">
      <div className="h-48 overflow-hidden">
        <img 
          src={course.thumbnail || '/placeholder.svg'} 
          alt={course.title} 
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
      </div>
      
      <CardHeader>
        <div className="flex justify-between items-center mb-2">
          <Badge 
            variant="outline" 
            className={getLevelBadgeStyle(course.level)}
          >
            {course.level}
          </Badge>
          <div className="flex items-center text-amber-500">
            <Star className="fill-amber-500 h-4 w-4 mr-1" />
            <span className="text-sm font-medium">4.8</span>
          </div>
        </div>
        
        <CardTitle className="text-xl">
          <Link to={`/courses/${course.id}`} className="hover:text-jobify-primary">
            {course.title}
          </Link>
        </CardTitle>
        <CardDescription>by {course.trainer.name}</CardDescription>
      </CardHeader>
      
      <CardContent className="pb-3 flex-grow">
        <div className="flex items-center justify-between text-gray-500 mb-3">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-2 text-gray-400" />
            <span className="text-sm">{course.duration} hours</span>
          </div>
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-2 text-gray-400" />
            <span className="text-sm">{course.enrolledStudents?.toLocaleString() || 0} students</span>
          </div>
        </div>
        <p className="text-sm text-gray-600 line-clamp-3">
          {course.description}
        </p>
      </CardContent>
      
      <CardFooter className="flex justify-between pt-2 border-t mt-auto">
        <div className="text-jobify-primary font-semibold">
          ${course.price}
        </div>
        
        <Button asChild size="sm" className="bg-jobify-secondary hover:bg-jobify-secondary/90">
          <Link to={`/courses/${course.id}`}>
            View Course
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
