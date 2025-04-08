import { zodResolver } from "@hookform/resolvers/zod";
import { Briefcase, Loader2 } from 'lucide-react';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
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
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../components/ui/form";
import { Input } from "../../components/ui/input";
import { UserRole } from '../../model';

// Form schema for login
const loginSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
  rememberMe: z.boolean().default(false),
});


const Login = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  // Initialize form with react-hook-form and zod validation
  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  // Handle form submission
  const onSubmit = async (data) => {
    setIsLoading(true);
    
    try {
      // Simulate API call - in a real app, this would call your authentication API
      console.log("Logging in user:", data);
      
      // Mock authentication logic - normally you'd verify against your backend
      const mockUsers = [
        { email: "jobseeker@example.com", password: "password", role: UserRole.JOB_SEEKER },
        { email: "employer@example.com", password: "password", role: UserRole.EMPLOYER },
        { email: "trainer@example.com", password: "password", role: UserRole.TRAINER },
        { email: "admin@example.com", password: "password", role: UserRole.ADMIN },
      ];
      
      // Find user with matching email and password
      const user = mockUsers.find(
        (user) => user.email === data.email && user.password === data.password
      );
      
      if (user) {
        // Successfully logged in - implement session storage in a real app
        if (data.rememberMe) {
          // Save to localStorage if "Remember me" is checked
          localStorage.setItem("userRole", user.role);
        } else {
          // Save to sessionStorage if "Remember me" is not checked
          sessionStorage.setItem("userRole", user.role);
        }
        
        toast("Welcome back to JobConnect!");
        
        // Redirect based on user role
        switch (user.role) {
          case UserRole.JOB_SEEKER:
            navigate("/jobs");
            break;
          case UserRole.EMPLOYER:
            navigate("/employer/jobs");
            break;
          case UserRole.TRAINER:
            navigate("/trainer/dashboard");
            break;
          case UserRole.ADMIN:
            navigate("/admin/dashboard");
            break;
          default:
            navigate("/");
            break;
        }
      } else {
        // Invalid credentials
        toast({
          title: "Login failed",
          description: "Invalid email or password. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Login error:", error);
      toast({
        title: "Login error",
        description: "An error occurred during login. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
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
              Welcome back
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Sign in to your account to continue your journey
            </p>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Sign In</CardTitle>
              <CardDescription>
                Enter your credentials to access your account
              </CardDescription>
            </CardHeader>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <CardContent className="space-y-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Enter your email" 
                            {...field} 
                            disabled={isLoading}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <div className="flex items-center justify-between">
                          <FormLabel>Password</FormLabel>
                          <Link 
                            to="/forgot-password" 
                            className="text-sm text-jobify-primary hover:underline"
                          >
                            Forgot password?
                          </Link>
                        </div>
                        <FormControl>
                          <Input 
                            type="password" 
                            placeholder="Enter your password" 
                            {...field} 
                            disabled={isLoading}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="rememberMe"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            disabled={isLoading}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>
                            Remember me
                          </FormLabel>
                        </div>
                      </FormItem>
                    )}
                  />
                </CardContent>
                <CardFooter className="flex flex-col">
                  <Button 
                    type="submit" 
                    className="w-full bg-jobify-primary hover:bg-jobify-primary/90"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Signing in...
                      </>
                    ) : (
                      "Sign In"
                    )}
                  </Button>
                  <p className="mt-4 text-center text-sm text-gray-600">
                    Don't have an account?{' '}
                    <Link 
                      to="/register" 
                      className="font-medium text-jobify-primary hover:underline"
                    >
                      Sign up for free
                    </Link>
                  </p>
                </CardFooter>
              </form>
            </Form>
          </Card>
          
          {/* Demo accounts for easy testing */}
          <div className="mt-6 bg-blue-50 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-blue-800 mb-2">Demo Accounts</h3>
            <div className="text-xs text-blue-700 space-y-1">
              <p>Job Seeker: jobseeker@example.com / password</p>
              <p>Employer: employer@example.com / password</p>
              <p>Trainer: trainer@example.com / password</p>
              <p>Admin: admin@example.com / password</p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Login;