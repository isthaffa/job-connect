import { Separator } from '@radix-ui/react-separator';
import { Briefcase, Calendar, ChevronLeft, CreditCard, MapPin, Plus, Save, X } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import MainLayout from '../../components/layout/main-layout';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../../components/ui/form';
import { Input } from '../../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { Textarea } from '../../components/ui/textarea';
import { JobStatus, JobType } from '../../model';
const PostJob = () => {
  const navigate = useNavigate();
  const [requirements, setRequirements] = useState(['']);
  const [responsibilities, setResponsibilities] = useState(['']);

  const form = useForm({
    defaultValues: {
      title: '',
      location: '',
      type: JobType.FULL_TIME,
      description: '',
      salaryRangeMin: '',
      salaryRangeMax: '',
      salaryCurrency: 'USD',
      deadline: '',
      status: JobStatus.DRAFT
    }
  });

  const addRequirement = () => setRequirements([...requirements, '']);
  const removeRequirement = (i) => setRequirements(requirements.filter((_, idx) => idx !== i));
  const handleRequirementChange = (i, val) => setRequirements(requirements.map((r, idx) => idx === i ? val : r));

  const addResponsibility = () => setResponsibilities([...responsibilities, '']);
  const removeResponsibility = (i) => setResponsibilities(responsibilities.filter((_, idx) => idx !== i));
  const handleResponsibilityChange = (i, val) => setResponsibilities(responsibilities.map((r, idx) => idx === i ? val : r));

  const onSubmit = (data) => {
    const jobData = {
      ...data,
      requirements: requirements.filter(Boolean),
      responsibilities: responsibilities.filter(Boolean),
      postedAt: new Date().toISOString()
    };
    console.log('Submitting job:', jobData);
    toast({
      title: 'Job posted successfully!',
      description: data.status === JobStatus.DRAFT ? 'Your job has been saved as a draft.' : 'Your job posting is now live.'
    });
    navigate('/employer/jobs');
  };

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Button asChild variant="outline" size="sm">
            <div onClick={() => navigate('/employer/jobs')}>
              <ChevronLeft className="h-4 w-4 mr-2" />
              Back to Jobs
            </div>
          </Button>
        </div>
        <div className="mb-6">
          <h1 className="text-2xl font-bold">Post a New Job</h1>
          <p className="text-gray-600">Fill in the details below to create a new job posting.</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Job Details</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField name="title" control={form.control} render={({ field }) => (
                    <FormItem>
                      <FormLabel>Job Title</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Briefcase className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input className="pl-10" placeholder="e.g. Senior Software Engineer" {...field} />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <FormField name="location" control={form.control} render={({ field }) => (
                    <FormItem>
                      <FormLabel>Location</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input className="pl-10" placeholder="e.g. San Francisco, CA or Remote" {...field} />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <FormField name="type" control={form.control} render={({ field }) => (
                    <FormItem>
                      <FormLabel>Job Type</FormLabel>
                      <Select defaultValue={field.value} onValueChange={field.onChange}>
                        <FormControl>
                          <SelectTrigger><SelectValue placeholder="Select job type" /></SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {Object.values(JobType).map(type => (
                            <SelectItem key={type} value={type}>{type.replace('_', ' ')}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <FormField name="deadline" control={form.control} render={({ field }) => (
                    <FormItem>
                      <FormLabel>Application Deadline</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input className="pl-10" type="date" {...field} />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                </div>

                <Separator />

                <FormField name="description" control={form.control} render={({ field }) => (
                  <FormItem>
                    <FormLabel>Job Description</FormLabel>
                    <FormControl>
                      <Textarea className="min-h-32" placeholder="Describe the job role, responsibilities..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />

                <div>
                  <h3 className="text-lg font-medium mb-3">Requirements</h3>
                  {requirements.map((r, i) => (
                    <div key={i} className="flex gap-2 mb-2">
                      <Input className="flex-1" value={r} onChange={(e) => handleRequirementChange(i, e.target.value)} placeholder={`Requirement ${i + 1}`} />
                      {requirements.length > 1 && <Button type="button" variant="outline" size="icon" onClick={() => removeRequirement(i)}><X className="h-4 w-4" /></Button>}
                    </div>
                  ))}
                  <Button type="button" variant="outline" className="w-full" onClick={addRequirement}><Plus className="h-4 w-4 mr-2" /> Add Requirement</Button>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-3">Responsibilities</h3>
                  {responsibilities.map((r, i) => (
                    <div key={i} className="flex gap-2 mb-2">
                      <Input className="flex-1" value={r} onChange={(e) => handleResponsibilityChange(i, e.target.value)} placeholder={`Responsibility ${i + 1}`} />
                      {responsibilities.length > 1 && <Button type="button" variant="outline" size="icon" onClick={() => removeResponsibility(i)}><X className="h-4 w-4" /></Button>}
                    </div>
                  ))}
                  <Button type="button" variant="outline" className="w-full" onClick={addResponsibility}><Plus className="h-4 w-4 mr-2" /> Add Responsibility</Button>
                </div>

                <Separator />

                <div>
                  <h3 className="text-lg font-medium mb-3">Salary Range</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <FormField name="salaryRangeMin" control={form.control} render={({ field }) => (
                      <FormItem>
                        <FormLabel>Minimum</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <CreditCard className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                            <Input type="number" className="pl-10" placeholder="e.g. 60000" {...field} />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField name="salaryRangeMax" control={form.control} render={({ field }) => (
                      <FormItem>
                        <FormLabel>Maximum</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <CreditCard className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                            <Input type="number" className="pl-10" placeholder="e.g. 80000" {...field} />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField name="salaryCurrency" control={form.control} render={({ field }) => (
                      <FormItem>
                        <FormLabel>Currency</FormLabel>
                        <Select defaultValue={field.value} onValueChange={field.onChange}>
                          <FormControl>
                            <SelectTrigger><SelectValue placeholder="Select currency" /></SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="USD">USD ($)</SelectItem>
                            <SelectItem value="EUR">EUR (€)</SelectItem>
                            <SelectItem value="GBP">GBP (£)</SelectItem>
                            <SelectItem value="CAD">CAD (C$)</SelectItem>
                            <SelectItem value="AUD">AUD (A$)</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )} />
                  </div>
                </div>

                <Separator />

                <FormField name="status" control={form.control} render={({ field }) => (
                  <FormItem>
                    <FormLabel>Posting Status</FormLabel>
                    <Select defaultValue={field.value} onValueChange={field.onChange}>
                      <FormControl>
                        <SelectTrigger><SelectValue placeholder="Select status" /></SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value={JobStatus.DRAFT}>Save as Draft</SelectItem>
                        <SelectItem value={JobStatus.ACTIVE}>Publish Now</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormDescription>Draft jobs are only visible to you and can be published later.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )} />

                <div className="flex justify-end gap-3 pt-4">
                  <Button type="button" variant="outline" onClick={() => navigate('/employer/jobs')}>Cancel</Button>
                  <Button type="submit" className="bg-jobify-primary hover:bg-jobify-primary/90">
                    <Save className="h-4 w-4 mr-2" />
                    Save Job
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default PostJob;
