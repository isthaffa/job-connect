import { zodResolver } from "@hookform/resolvers/zod";
import { BookOpen, Plus, Trash2, UploadCloud } from 'lucide-react';
import React from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router-dom';
import { toast } from 'sonner';
import { z } from "zod";
import MainLayout from '../../components/layout/main-layout';
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../../components/ui/form";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "../../components/ui/select";
import { Textarea } from "../../components/ui/textarea";
import { CourseLevel, MaterialType } from '../../model';
import { mockCourses } from './data/mockCourses';

// Form validation schema
const courseFormSchema = z.object({
  title: z.string().min(3, { message: "Title must be at least 3 characters." }),
  description: z.string().min(10, { message: "Description must be at least 10 characters." }),
  category: z.string().min(1, { message: "Please select a category." }),
  level: z.nativeEnum(CourseLevel),
  duration: z.coerce.number().min(1, { message: "Duration must be at least 1 hour." }),
  price: z.coerce.number().min(0, { message: "Price cannot be negative." }),
  currency: z.string().default("USD"),
  thumbnail: z.string().optional(),
});


const CreateCourse = () => {
  const { id } = useParams();
  const isEditing = !!id;
  
  // Find course data if in edit mode
  const existingCourse = isEditing 
    ? mockCourses.find(course => course.id === id) 
    : null;

  // Set default values for form
  const defaultValues = isEditing && existingCourse
    ? {
        title: existingCourse.title,
        description: existingCourse.description,
        category: existingCourse.category,
        level: existingCourse.level,
        duration: existingCourse.duration,
        price: existingCourse.price,
        currency: existingCourse.currency,
        thumbnail: existingCourse.thumbnail,
      }
    : {
        title: "",
        description: "",
        category: "",
        level: CourseLevel.BEGINNER,
        duration: 1,
        price: 0,
        currency: "USD",
      };

  // Initialize form
  const form = useForm({
    resolver: zodResolver(courseFormSchema),
    defaultValues,
  });

  // Handle form submission
  const onSubmit = (data) => {
    
    toast( `Successfully ${isEditing ? 'updated' : 'created'} "${data.title}"`);
    
    console.log("Form data:", data);
    // In a real app, this would send data to an API
  };

  // Categories for dropdown
  const categories = [
    "Web Development", 
    "Mobile Development", 
    "Data Science", 
    "Machine Learning",
    "DevOps",
    "Cloud Computing",
    "Cybersecurity",
    "UI/UX Design",
    "Frontend",
    "Backend"
  ];

  const [materials, setMaterials] = React.useState(
    existingCourse?.materials || []
  );

  const handleAddMaterial = () => {
    setMaterials([
      ...materials,
      { id: `new-${materials.length}`, title: "", type: MaterialType.VIDEO, url: "" }
    ]);
  };

  const handleRemoveMaterial = (index) => {
    setMaterials(materials.filter((_, i) => i !== index));
  };

  return (
    <MainLayout userRole="TRAINER">
      <div className="container mx-auto py-8 px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">{isEditing ? 'Edit Course' : 'Create New Course'}</h1>
          <p className="text-gray-500 mt-1">
            {isEditing ? 'Update your existing course details' : 'Share your knowledge by creating a new course'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Course Information</CardTitle>
                    <CardDescription>Basic details about your course</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <FormField
                      control={form.control}
                      name="title"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Course Title</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g., Web Development Fundamentals" {...field} />
                          </FormControl>
                          <FormDescription>
                            A descriptive title will help students find your course.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="description"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Description</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Provide a detailed description of your course" 
                              className="min-h-[120px]" 
                              {...field} 
                            />
                          </FormControl>
                          <FormDescription>
                            Explain what students will learn and why they should take your course.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="category"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Category</FormLabel>
                            <Select 
                              onValueChange={field.onChange} 
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select a category" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {categories.map(category => (
                                  <SelectItem key={category} value={category}>
                                    {category}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="level"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Difficulty Level</FormLabel>
                            <Select 
                              onValueChange={field.onChange} 
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select level" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value={CourseLevel.BEGINNER}>Beginner</SelectItem>
                                <SelectItem value={CourseLevel.INTERMEDIATE}>Intermediate</SelectItem>
                                <SelectItem value={CourseLevel.ADVANCED}>Advanced</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="duration"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Duration (hours)</FormLabel>
                            <FormControl>
                              <Input type="number" min="1" {...field} />
                            </FormControl>
                            <FormDescription>
                              Total duration of the course in hours.
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="price"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Price</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <span className="absolute left-3 top-1/2 transform -translate-y-1/2">$</span>
                                <Input type="number" min="0" step="0.01" className="pl-8" {...field} />
                              </div>
                            </FormControl>
                            <FormDescription>
                              Set to 0 for a free course.
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Course Materials</CardTitle>
                    <CardDescription>Add videos, documents, and quizzes to your course</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {materials.map((material, index) => (
                        <div key={material.id} className="border rounded-lg p-4">
                          <div className="flex justify-between items-center mb-3">
                            <h4 className="font-medium">Material {index + 1}</h4>
                            <Button 
                              type="button" 
                              variant="ghost" 
                              size="sm" 
                              className="text-red-500 hover:text-red-700 hover:bg-red-50"
                              onClick={() => handleRemoveMaterial(index)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                          
                          <div className="space-y-3">
                            <div>
                              <Label htmlFor={`material-title-${index}`}>Title</Label>
                              <Input 
                                id={`material-title-${index}`}
                                defaultValue={material.title} 
                                placeholder="e.g., Introduction to HTML"
                              />
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                              <div>
                                <Label htmlFor={`material-type-${index}`}>Type</Label>
                                <Select defaultValue={material.type}>
                                  <SelectTrigger id={`material-type-${index}`}>
                                    <SelectValue placeholder="Select type" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value={MaterialType.VIDEO}>Video</SelectItem>
                                    <SelectItem value={MaterialType.DOCUMENT}>Document</SelectItem>
                                    <SelectItem value={MaterialType.QUIZ}>Quiz</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                              
                              <div>
                                <Label htmlFor={`material-url-${index}`}>URL / File</Label>
                                <div className="flex gap-2">
                                  <Input 
                                    id={`material-url-${index}`}
                                    defaultValue={material.url} 
                                    placeholder="URL or file path"
                                    className="flex-1"
                                  />
                                  <Button type="button" variant="outline" size="icon">
                                    <UploadCloud className="h-4 w-4" />
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                      
                      <Button
                        type="button"
                        variant="outline"
                        className="w-full"
                        onClick={handleAddMaterial}
                      >
                        <Plus className="mr-2 h-4 w-4" />
                        Add Material
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <div className="flex justify-end gap-3">
                  <Button type="button" variant="outline">
                    Save as Draft
                  </Button>
                  <Button type="submit">
                    {isEditing ? 'Update Course' : 'Create Course'}
                  </Button>
                </div>
              </form>
            </Form>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Course Thumbnail</CardTitle>
                <CardDescription>Add a compelling image</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="border rounded-lg p-6 text-center">
                  {form.getValues("thumbnail") ? (
                    <div className="mb-3">
                      <img 
                        src={form.getValues("thumbnail") || "/placeholder.svg"} 
                        alt="Course thumbnail"
                        className="mx-auto rounded-lg object-cover h-40 w-full"
                      />
                    </div>
                  ) : (
                    <div className="mb-3 bg-gray-100 rounded-lg flex items-center justify-center h-40">
                      <BookOpen className="h-12 w-12 text-gray-400" />
                    </div>
                  )}
                  
                  <p className="text-sm text-gray-500 mb-4">
                    Upload a high-quality image that represents your course content.
                  </p>
                  
                  <div className="space-y-2">
                    <Button type="button" variant="outline" className="w-full">
                      <UploadCloud className="mr-2 h-4 w-4" />
                      Upload Image
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Publish Options</CardTitle>
                <CardDescription>Set visibility and access</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="visibility">Visibility</Label>
                    <Select defaultValue="draft">
                      <SelectTrigger id="visibility">
                        <SelectValue placeholder="Select visibility" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="draft">Draft (Hidden)</SelectItem>
                        <SelectItem value="published">Published (Public)</SelectItem>
                        <SelectItem value="private">Private (Invite Only)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <p className="text-sm text-gray-500">
                    A draft course won't be visible to students until published.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Keep course titles concise and descriptive</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Break complex content into logical sections</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Include practical examples and exercises</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Add quizzes to reinforce learning</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default CreateCourse;