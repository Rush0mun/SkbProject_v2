"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Users, 
  FileText, 
  FolderOpen, 
  TrendingUp, 
  Eye,
  Calendar,
  Activity
} from 'lucide-react';
import { dashboardStats, dummyUsers, dummyPosts } from '@/lib/dummyData';

export default function AdminDashboard() {
  const stats = [
    {
      title: 'Total Users',
      value: dashboardStats.totalUsers,
      change: `+${dashboardStats.monthlyGrowth.users}`,
      changeType: 'positive' as const,
      icon: Users,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      title: 'Total Posts',
      value: dashboardStats.totalPosts,
      change: `+${dashboardStats.monthlyGrowth.posts}`,
      changeType: 'positive' as const,
      icon: FileText,
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      title: 'Categories',
      value: dashboardStats.totalCategories,
      change: '+2',
      changeType: 'positive' as const,
      icon: FolderOpen,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      title: 'Active Users',
      value: dashboardStats.activeUsers,
      change: '+5',
      changeType: 'positive' as const,
      icon: Activity,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100'
    }
  ];

  const recentPosts = dummyPosts.slice(0, 5);
  const recentUsers = dummyUsers.slice(0, 5);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-2">
          Welcome to the Shotokan Karate Bangladesh admin panel
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">
                      {stat.title}
                    </p>
                    <p className="text-3xl font-bold text-gray-900">
                      {stat.value}
                    </p>
                    <div className="flex items-center mt-2">
                      <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                      <span className="text-sm text-green-600 font-medium">
                        {stat.change}
                      </span>
                      <span className="text-sm text-gray-500 ml-1">
                        this month
                      </span>
                    </div>
                  </div>
                  <div className={`p-3 rounded-full ${stat.bgColor}`}>
                    <Icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Posts */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Recent Posts
            </CardTitle>
            <CardDescription>
              Latest posts from your content management system
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentPosts.map((post) => (
                <div key={post.id} className="flex items-start justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-medium text-gray-900 truncate">
                      {post.title}
                    </h4>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge 
                        variant={post.status === 'published' ? 'default' : 'secondary'}
                        className="text-xs"
                      >
                        {post.status}
                      </Badge>
                      <span className="text-xs text-gray-500">
                        by {post.author}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 mt-2 text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <Eye className="h-3 w-3" />
                        {post.views}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(post.createdAt).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <Button variant="outline" className="w-full">
                View All Posts
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Recent Users */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Recent Users
            </CardTitle>
            <CardDescription>
              Newly registered users in your system
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentUsers.map((user) => (
                <div key={user.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                      {user.avatar ? (
                        <img 
                          src={user.avatar} 
                          alt={user.name}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                      ) : (
                        <span className="text-gray-600 font-medium text-sm">
                          {user.name.charAt(0)}
                        </span>
                      )}
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-900">
                        {user.name}
                      </h4>
                      <div className="flex items-center gap-2">
                        <Badge 
                          variant={user.status === 'active' ? 'default' : 'secondary'}
                          className="text-xs"
                        >
                          {user.status}
                        </Badge>
                        <span className="text-xs text-gray-500 capitalize">
                          {user.role}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-xs text-gray-500">
                    {new Date(user.joinDate).toLocaleDateString()}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <Button variant="outline" className="w-full">
                View All Users
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>
            Common tasks and shortcuts for managing your content
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button className="h-20 flex flex-col gap-2">
              <FileText className="h-6 w-6" />
              Create New Post
            </Button>
            <Button variant="outline" className="h-20 flex flex-col gap-2">
              <Users className="h-6 w-6" />
              Add New User
            </Button>
            <Button variant="outline" className="h-20 flex flex-col gap-2">
              <FolderOpen className="h-6 w-6" />
              Manage Categories
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}