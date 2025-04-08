import { FileQuestion, HelpCircle, MessagesSquare } from 'lucide-react';
import React from 'react';
import ChatbotFAQ from '../../components/help/ChatBotFAQ';
import MainLayout from '../../components/layout/main-layout';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/Tabs';

const Help = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-2">Help Center</h1>
        <p className="text-gray-600 mb-8">
          Find answers to your questions about using JobConnect.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <Tabs defaultValue="faq">
              <TabsList className="mb-6">
                <TabsTrigger value="faq">
                  <FileQuestion className="h-4 w-4 mr-2" />
                  Frequently Asked Questions
                </TabsTrigger>
                <TabsTrigger value="guides">
                  <HelpCircle className="h-4 w-4 mr-2" />
                  User Guides
                </TabsTrigger>
                <TabsTrigger value="contact">
                  <MessagesSquare className="h-4 w-4 mr-2" />
                  Contact Support
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="faq">
                <div className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>How do I create an account?</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        To create an account, click on the "Register" button in the top right corner of the page.
                        Fill out the registration form with your information and select your account type (job seeker,
                        employer, or trainer). After submitting the form, you'll receive a verification email to activate
                        your account.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>How do I search for jobs?</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        You can search for jobs by visiting the Jobs page and using the search filters. Enter keywords
                        related to the position you're looking for, specify a location, and use additional filters to
                        narrow down results based on job type, salary range, and experience level.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>How do I apply for a job?</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        To apply for a job, navigate to the job listing you're interested in and click the "Apply Now"
                        button. You'll need to complete the application form and may be asked to upload your resume and
                        cover letter. Make sure your profile is complete before applying to increase your chances of
                        getting noticed.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>How do employers post job listings?</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        Employers can post job listings by logging into their account and navigating to the "Post Job"
                        page. Fill out the job details including title, description, requirements, and compensation.
                        Once submitted, the job listing will be reviewed and published to the platform.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>How do I enroll in training courses?</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        To enroll in training courses, browse the available courses in the training section and select
                        the one that interests you. Click on "Enroll Now" and complete the payment process if required.
                        Once enrolled, you'll have access to the course materials and can begin your learning journey.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="guides">
                <Card>
                  <CardContent className="pt-6">
                    <p className="mb-4">Our detailed user guides are coming soon. They will include:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Complete guide to creating an effective job seeker profile</li>
                      <li>How to create standout job listings as an employer</li>
                      <li>Best practices for trainers creating and managing courses</li>
                      <li>Tips for successful job applications</li>
                      <li>Guide to using mentorship features</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="contact">
                <Card>
                  <CardContent className="pt-6">
                    <p className="mb-4">
                      Our support team is available to help you with any questions or issues you might have.
                    </p>
                    <p className="mb-4">
                      <strong>Email:</strong> support@jobconnect.example.com
                    </p>
                    <p className="mb-4">
                      <strong>Phone:</strong> (555) 123-4567
                    </p>
                    <p>
                      <strong>Hours:</strong> Monday to Friday, 9am - 5pm EST
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
          
          <div className="flex flex-col h-full min-h-[600px]">
            <ChatbotFAQ />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Help;