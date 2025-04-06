import { BookOpen, Briefcase, Building, User } from 'lucide-react';
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { Checkbox } from '@radix-ui/react-checkbox';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@radix-ui/react-tabs';
import MainLayout from '../../components/layout/main-layout';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../components/ui/card';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';

const Register = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const roleParam = searchParams.get('role');

  let initialRole = 'job_seeker';
  if (roleParam === 'employer') initialRole = 'employer';
  if (roleParam === 'trainer') initialRole = 'trainer';

  const [selectedRole, setSelectedRole] = useState(initialRole);

  const handleRoleChange = (value) => {
    setSelectedRole(value);
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
              <Tabs value={selectedRole} onValueChange={handleRoleChange} className="w-full ">
                <TabsList className="grid grid-cols-3 mb-4 inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground">
                  <TabsTrigger value="job_seeker" className="data-[state=active]:bg-jobify-primary data-[state=active]:text-white
                  inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm">
                    <User className="h-4 w-4 mr-2" />
                    <span className="hidden sm:inline">Job Seeker</span>
                  </TabsTrigger>
                  <TabsTrigger value="employer" className="data-[state=active]:bg-jobify-primary data-[state=active]:text-white
                  inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm">
                    <Building className="h-4 w-4 mr-2" />
                    <span className="hidden sm:inline">Employer</span>
                  </TabsTrigger>
                  <TabsTrigger value="trainer" className="data-[state=active]:bg-jobify-primary data-[state=active]:text-white
                  inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm">
                    <BookOpen className="h-4 w-4 mr-2" />
                    <span className="hidden sm:inline">Trainer</span>
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="job_seeker" className="space-y-4
                mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="Enter your full name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Enter your email" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" placeholder="Create a password" />
                  </div>
                </TabsContent>

                <TabsContent value="employer" className="space-y-4
                mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                  <div className="space-y-2">
                    <Label htmlFor="company_name">Company Name</Label>
                    <Input id="company_name" placeholder="Enter company name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact_name">Contact Person</Label>
                    <Input id="contact_name" placeholder="Enter contact person name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="emp_email">Email</Label>
                    <Input id="emp_email" type="email" placeholder="Enter company email" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="emp_password">Password</Label>
                    <Input id="emp_password" type="password" placeholder="Create a password" />
                  </div>
                </TabsContent>

                <TabsContent value="trainer" className="space-y-4
                mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                  <div className="space-y-2">
                    <Label htmlFor="trainer_name">Full Name</Label>
                    <Input id="trainer_name" placeholder="Enter your full name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="specialization">Specialization</Label>
                    <Input id="specialization" placeholder="Enter your specialization" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="trainer_email">Email</Label>
                    <Input id="trainer_email" type="email" placeholder="Enter your email" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="trainer_password">Password</Label>
                    <Input id="trainer_password" type="password" placeholder="Create a password" />
                  </div>
                </TabsContent>
              </Tabs>

              <div className="flex items-center space-x-2">
                <Checkbox id="terms" className='peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground'  />
                <label htmlFor="terms" className="text-sm font-medium leading-none">
                  I agree to the{' '}
                  <Link to="/terms" className="text-jobify-primary hover:underline">Terms of Service</Link> and{' '}
                  <Link to="/privacy" className="text-jobify-primary hover:underline">Privacy Policy</Link>
                </label>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col">
              <Button className="w-full bg-jobify-primary hover:bg-jobify-primary/90">
                Create Account
              </Button>
              <p className="mt-4 text-center text-sm text-gray-600">
                Already have an account?{' '}
                <Link to="/login" className="font-medium text-jobify-primary hover:underline">Sign in</Link>
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default Register;
