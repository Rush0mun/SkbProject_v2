// Dummy data for admin panel
export interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'editor' | 'viewer';
  status: 'active' | 'inactive';
  joinDate: string;
  lastLogin: string;
  avatar?: string;
}

export interface Post {
  id: string;
  title: string;
  content: string;
  author: string;
  category: string;
  status: 'published' | 'draft' | 'archived';
  createdAt: string;
  updatedAt: string;
  views: number;
  featuredImage?: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  postCount: number;
  createdAt: string;
  color: string;
}

export interface DashboardStats {
  totalUsers: number;
  totalPosts: number;
  totalCategories: number;
  activeUsers: number;
  publishedPosts: number;
  draftPosts: number;
  monthlyGrowth: {
    users: number;
    posts: number;
  };
}

// Dummy users data
export const dummyUsers: AdminUser[] = [
  {
    id: '1',
    name: 'Md. Rahman Ahmed',
    email: 'rahman@shotokanbd.com',
    role: 'admin',
    status: 'active',
    joinDate: '2023-01-15',
    lastLogin: '2024-01-20T10:30:00Z',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
  },
  {
    id: '2',
    name: 'Fatima Khatun',
    email: 'fatima@shotokanbd.com',
    role: 'editor',
    status: 'active',
    joinDate: '2023-03-20',
    lastLogin: '2024-01-19T15:45:00Z',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face'
  },
  {
    id: '3',
    name: 'Karim Hassan',
    email: 'karim@shotokanbd.com',
    role: 'viewer',
    status: 'active',
    joinDate: '2023-06-10',
    lastLogin: '2024-01-18T09:20:00Z',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
  },
  {
    id: '4',
    name: 'Nasir Uddin',
    email: 'nasir@shotokanbd.com',
    role: 'editor',
    status: 'inactive',
    joinDate: '2023-08-05',
    lastLogin: '2024-01-10T14:15:00Z',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face'
  },
  {
    id: '5',
    name: 'Rashida Begum',
    email: 'rashida@shotokanbd.com',
    role: 'viewer',
    status: 'active',
    joinDate: '2023-11-12',
    lastLogin: '2024-01-17T11:30:00Z',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face'
  }
];

// Dummy posts data
export const dummyPosts: Post[] = [
  {
    id: '1',
    title: 'National Championship 2024 Results',
    content: 'The National Shotokan Championship 2024 concluded successfully with outstanding performances from participants across Bangladesh...',
    author: 'Md. Rahman Ahmed',
    category: 'Tournaments',
    status: 'published',
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z',
    views: 1250,
    featuredImage: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400&h=200&fit=crop'
  },
  {
    id: '2',
    title: 'New Training Schedule for February',
    content: 'We are implementing a new training schedule starting February 1st to better accommodate our growing membership...',
    author: 'Fatima Khatun',
    category: 'Announcements',
    status: 'published',
    createdAt: '2024-01-12T14:30:00Z',
    updatedAt: '2024-01-12T14:30:00Z',
    views: 890,
    featuredImage: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=200&fit=crop'
  },
  {
    id: '3',
    title: 'Belt Grading Ceremony March 2024',
    content: 'The quarterly belt grading examination is scheduled for March 10th, 2024. Students who have completed the required training hours...',
    author: 'Karim Hassan',
    category: 'Events',
    status: 'draft',
    createdAt: '2024-01-10T09:15:00Z',
    updatedAt: '2024-01-18T16:20:00Z',
    views: 0,
    featuredImage: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?w=400&h=200&fit=crop'
  },
  {
    id: '4',
    title: 'Guest Instructor Workshop',
    content: 'We are honored to host Sensei Takeshi Yamamoto, 7th Dan, for a special workshop on advanced kata techniques...',
    author: 'Nasir Uddin',
    category: 'Training',
    status: 'published',
    createdAt: '2024-01-08T11:45:00Z',
    updatedAt: '2024-01-08T11:45:00Z',
    views: 567,
    featuredImage: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400&h=200&fit=crop'
  },
  {
    id: '5',
    title: 'Safety Protocol Updates',
    content: 'In line with our commitment to student safety, we have updated our dojo safety protocols...',
    author: 'Rashida Begum',
    category: 'Safety',
    status: 'archived',
    createdAt: '2023-12-20T13:00:00Z',
    updatedAt: '2024-01-05T10:30:00Z',
    views: 234
  }
];

// Dummy categories data
export const dummyCategories: Category[] = [
  {
    id: '1',
    name: 'Tournaments',
    description: 'Competition events and tournament announcements',
    postCount: 8,
    createdAt: '2023-01-01T00:00:00Z',
    color: '#8B5CF6'
  },
  {
    id: '2',
    name: 'Announcements',
    description: 'General announcements and important notices',
    postCount: 15,
    createdAt: '2023-01-01T00:00:00Z',
    color: '#10B981'
  },
  {
    id: '3',
    name: 'Events',
    description: 'Upcoming events and activities',
    postCount: 12,
    createdAt: '2023-01-01T00:00:00Z',
    color: '#F59E0B'
  },
  {
    id: '4',
    name: 'Training',
    description: 'Training sessions and educational content',
    postCount: 20,
    createdAt: '2023-01-01T00:00:00Z',
    color: '#EF4444'
  },
  {
    id: '5',
    name: 'Safety',
    description: 'Safety guidelines and protocols',
    postCount: 5,
    createdAt: '2023-01-01T00:00:00Z',
    color: '#6366F1'
  }
];

// Dashboard statistics
export const dashboardStats: DashboardStats = {
  totalUsers: 156,
  totalPosts: 89,
  totalCategories: 8,
  activeUsers: 142,
  publishedPosts: 67,
  draftPosts: 12,
  monthlyGrowth: {
    users: 12,
    posts: 8
  }
};

// Authentication dummy data
export const adminCredentials = {
  username: 'admin',
  password: 'admin123',
  user: {
    id: 'admin-1',
    name: 'Admin User',
    email: 'admin@shotokanbd.com',
    role: 'admin' as const
  }
};