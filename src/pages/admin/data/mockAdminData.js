import { UserRole } from "../../../model";

export const mockAdminStats = {
  totalUsers: 1248,
  totalJobs: 567,
  totalCourses: 89,
  totalApplications: 3412,
  newUsersThisMonth: 124,
  newJobsThisMonth: 78
};

export const mockUsers = [
  {
    id: "user-1",
    name: "John Smith",
    email: "john@example.com",
    role: UserRole.TRAINER,
    status: "active",
    createdAt: "2022-12-01T08:15:00Z",
    lastLogin: "2023-06-09T14:30:00Z"
  },
  {
    id: "user-2",
    name: "Emily Johnson",
    email: "emily@example.com",
    role: UserRole.JOB_SEEKER,
    status: "active",
    createdAt: "2023-01-05T10:30:00Z",
    lastLogin: "2023-06-08T09:45:00Z"
  },
  {
    id: "user-3",
    name: "Michael Chen",
    email: "michael@example.com",
    role: UserRole.JOB_SEEKER,
    status: "active",
    createdAt: "2023-02-10T14:45:00Z",
    lastLogin: "2023-06-07T16:20:00Z"
  },
  {
    id: "user-4",
    name: "Sarah Williams",
    email: "sarah@example.com",
    role: UserRole.EMPLOYER,
    status: "active",
    createdAt: "2023-01-20T11:15:00Z",
    lastLogin: "2023-06-09T10:10:00Z"
  },
  {
    id: "user-5",
    name: "David Martinez",
    email: "david@example.com",
    role: UserRole.ADMIN,
    status: "active",
    createdAt: "2022-11-15T08:00:00Z",
    lastLogin: "2023-06-09T15:45:00Z"
  }
];
