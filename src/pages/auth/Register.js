import { zodResolver } from "@hookform/resolvers/zod";
import { BookOpen, Briefcase, Building, User } from 'lucide-react';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from "sonner";
import * as z from "zod";
import MainLayout from '../../components/layout/main-layout';
import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "../../components/ui/card";
import { Checkbox } from "../../components/ui/checkbox";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../../components/ui/form";
import { Input } from "../../components/ui/input";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from "../../components/ui/Tabs";

// Form schema for job seeker
const jobSeekerSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(8, { message: "Password must be at least 8 characters" }),
  terms: z.boolean().refine(val => val === true, { message: "You must accept the terms and conditions" })
});

// Form schema for employer
const employerSchema = z.object({
  company_name: z.string().min(2, { message: "Company name must be at least 2 characters" }),
  contact_name: z.string().min(2, { message: "Contact name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(8, { message: "Password must be at least 8 characters" }),
  terms: z.boolean().refine(val => val === true, { message: "You must accept the terms and conditions" })
});

// Form schema for trainer
const trainerSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  specialization: z.string().min(2, { message: "Specialization must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(8, { message: "Password must be at least 8 characters" }),
  terms: z.boolean().refine(val => val === true, { message: "You must accept the terms and conditions" })
});

const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const roleParam = searchParams.get('role');
  
  let initialRole = 'job_seeker';
  if (roleParam === 'employer') initialRole = 'employer';
  if (roleParam === 'trainer') initialRole = 'trainer';
  
  const [selectedRole, setSelectedRole] = useState(initialRole);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Initialize form for job seeker
  const jobSeekerForm = useForm({
    resolver: zodResolver(jobSeekerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      terms: false,
    },
  });

  // Initialize form for employer
  const employerForm = useForm({
    resolver: zodResolver(employerSchema),
    defaultValues: {
      company_name: "",
      contact_name: "",
      email: "",
      password: "",
      terms: false,
    },
  });

  // Initialize form for trainer
  const trainerForm = useForm({
    resolver: zodResolver(trainerSchema),
    defaultValues: {
      name: "",
      specialization: "",
      email: "",
      password: "",
      terms: false,
    },
  });
  
  const handleRoleChange = (value) => {
    setSelectedRole(value);
  };
  
  const handleJobSeekerSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      // Here you would normally call an API to register the user
      console.log("Registering job seeker:", data);
      
      // Simulate API call
      await new Promise(r => setTimeout(r, 1000));
      
      // Show success toast
      toast("Welcome to JobConnect. You are now being redirected to your dashboard.");
      
      // Store user info in localStorage (for demo purposes)
      localStorage.setItem('user', JSON.stringify({
        name: data.name,
        email: data.email,
        role: 'JOB_SEEKER'
      }));
      
      // Navigate to job seeker dashboard
      navigate('/jobs');
    } catch (error) {
      toast("There was an error during registration. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const handleEmployerSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      // Here you would normally call an API to register the employer
      console.log("Registering employer:", data);
      
      // Simulate API call
      await new Promise(r => setTimeout(r, 1000));
      
      // Show success toast
      toast("Welcome to JobConnect. You are now being redirected to your dashboard.");
      
      // Store user info in localStorage (for demo purposes)
      localStorage.setItem('user', JSON.stringify({
        name: data.contact_name,
        company: data.company_name,
        email: data.email,
        role: 'EMPLOYER'
      }));
      
      // Navigate to employer dashboard
      navigate('/employer/jobs');
    } catch (error) {
      toast.error( "There was an error during registration. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const handleTrainerSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      // Here you would normally call an API to register the trainer
      console.log("Registering trainer:", data);
      
      // Simulate API call
      await new Promise(r => setTimeout(r, 1000));
      
      // Show success toast
      toast("Welcome to JobConnect. You are now being redirected to your dashboard.");
      
      // Store user info in localStorage (for demo purposes)
      localStorage.setItem('user', JSON.stringify({
        name: data.name,
        specialization: data.specialization,
        email: data.email,
        role: 'TRAINER'
      }));
      
      // Navigate to trainer dashboard
      navigate('/trainer/dashboard');
    } catch (error) {
      toast.error("There was an error during registration. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <MainLayout hideFooter>
      <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <Link to="/" className="inline-flex items-center text-2xl font-bold text-jobify-primary">
              <Briefcase className="h-6 w-6 mr-2" />
              <span>JobConnect</span>
            </Link>
            <h2 className="mt-6 text-3xl font-bold text-gray-900">
              Create an account
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Join our platform to start your journey
            </p>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Sign Up</CardTitle>
              <CardDescription>
                Select your account type and fill in your details
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Tabs
                defaultValue={selectedRole}
                value={selectedRole}
                onValueChange={handleRoleChange}
                className="w-full"
              >
                <TabsList className="grid grid-cols-3 mb-4">
                  <TabsTrigger value="job_seeker" className="data-[state=active]:bg-jobify-primary data-[state=active]:text-white">
                    <User className="h-4 w-4 mr-2" />
                    <span className="hidden sm:inline">Job Seeker</span>
                  </TabsTrigger>
                  <TabsTrigger value="employer" className="data-[state=active]:bg-jobify-primary data-[state=active]:text-white">
                    <Building className="h-4 w-4 mr-2" />
                    <span className="hidden sm:inline">Employer</span>
                  </TabsTrigger>
                  <TabsTrigger value="trainer" className="data-[state=active]:bg-jobify-primary data-[state=active]:text-white">
                    <BookOpen className="h-4 w-4 mr-2" />
                    <span className="hidden sm:inline">Trainer</span>
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="job_seeker" className="space-y-4">
                  <Form {...jobSeekerForm}>
                    <form onSubmit={jobSeekerForm.handleSubmit(handleJobSeekerSubmit)} className="space-y-4">
                      <FormField
                        control={jobSeekerForm.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter your full name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={jobSeekerForm.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="Enter your email" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={jobSeekerForm.control}
                        name="password"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                              <Input type="password" placeholder="Create a password" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={jobSeekerForm.control}
                        name="terms"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0 pt-2">
                            <FormControl>
                              <Checkbox 
                                checked={field.value} 
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                I agree to the{' '}
                                <Link to="/terms" className="text-jobify-primary hover:underline">
                                  Terms of Service
                                </Link>{' '}
                                and{' '}
                                <Link to="/privacy" className="text-jobify-primary hover:underline">
                                  Privacy Policy
                                </Link>
                              </FormLabel>
                              <FormMessage />
                            </div>
                          </FormItem>
                        )}
                      />
                      <Button 
                        type="submit" 
                        className="w-full bg-jobify-primary hover:bg-jobify-primary/90 mt-4"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Creating Account..." : "Create Account"}
                      </Button>
                    </form>
                  </Form>
                </TabsContent>
                
                <TabsContent value="employer" className="space-y-4">
                  <Form {...employerForm}>
                    <form onSubmit={employerForm.handleSubmit(handleEmployerSubmit)} className="space-y-4">
                      <FormField
                        control={employerForm.control}
                        name="company_name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Company Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter company name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={employerForm.control}
                        name="contact_name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Contact Person</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter contact person name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={employerForm.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="Enter company email" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={employerForm.control}
                        name="password"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                              <Input type="password" placeholder="Create a password" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={employerForm.control}
                        name="terms"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0 pt-2">
                            <FormControl>
                              <Checkbox 
                                checked={field.value} 
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                I agree to the{' '}
                                <Link to="/terms" className="text-jobify-primary hover:underline">
                                  Terms of Service
                                </Link>{' '}
                                and{' '}
                                <Link to="/privacy" className="text-jobify-primary hover:underline">
                                  Privacy Policy
                                </Link>
                              </FormLabel>
                              <FormMessage />
                            </div>
                          </FormItem>
                        )}
                      />
                      <Button 
                        type="submit" 
                        className="w-full bg-jobify-primary hover:bg-jobify-primary/90 mt-4"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Creating Account..." : "Create Account"}
                      </Button>
                    </form>
                  </Form>
                </TabsContent>
                
                <TabsContent value="trainer" className="space-y-4">
                  <Form {...trainerForm}>
                    <form onSubmit={trainerForm.handleSubmit(handleTrainerSubmit)} className="space-y-4">
                      <FormField
                        control={trainerForm.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter your full name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={trainerForm.control}
                        name="specialization"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Specialization</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter your specialization" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={trainerForm.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="Enter your email" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={trainerForm.control}
                        name="password"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                              <Input type="password" placeholder="Create a password" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={trainerForm.control}
                        name="terms"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0 pt-2">
                            <FormControl>
                              <Checkbox 
                                checked={field.value} 
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                I agree to the{' '}
                                <Link to="/terms" className="text-jobify-primary hover:underline">
                                  Terms of Service
                                </Link>{' '}
                                and{' '}
                                <Link to="/privacy" className="text-jobify-primary hover:underline">
                                  Privacy Policy
                                </Link>
                              </FormLabel>
                              <FormMessage />
                            </div>
                          </FormItem>
                        )}
                      />
                      <Button 
                        type="submit" 
                        className="w-full bg-jobify-primary hover:bg-jobify-primary/90 mt-4"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Creating Account..." : "Create Account"}
                      </Button>
                    </form>
                  </Form>
                </TabsContent>
              </Tabs>
            </CardContent>
            <CardFooter className="flex flex-col">
              <p className="mt-4 text-center text-sm text-gray-600">
                Already have an account?{' '}
                <Link 
                  to="/login" 
                  className="font-medium text-jobify-primary hover:underline"
                >
                  Sign in
                </Link>
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default Register;
