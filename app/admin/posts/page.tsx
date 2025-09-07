"use client";

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { 
  FileText, 
  Search, 
  Plus, 
  MoreHorizontal, 
  Edit, 
  Trash2, 
  Eye,
  Filter,
  Calendar,
  User
} from 'lucide-react';
import { dummyPosts, type Post } from '@/lib/dummyData';

export default function PostsPage() {
  const [posts, setPosts] = useState<Post[]>(dummyPosts);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [filterCategory, setFilterCategory] = useState<string>('all');

  // Filter posts based on search term, status, and category
  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || post.status === filterStatus;
    const matchesCategory = filterCategory === 'all' || post.category === filterCategory;
    
    return matchesSearch && matchesStatus && matchesCategory;
  });

  const handleDeletePost = (postId: string) => {
    setPosts(posts.filter(post => post.id !== postId));
  };

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case 'published':
        return 'bg-green-100 text-green-800';
      case 'draft':
        return 'bg-yellow-100 text-yellow-800';
      case 'archived':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const categories = [...new Set(posts.map(post => post.category))];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Post Management</h1>
          <p className="text-gray-600 mt-2">
            Manage your blog posts and articles
          </p>
        </div>
        <Button className="flex items-center gap-2">
          <Plus className="h-4 w-4" />
          Create New Post
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-blue-600" />
              <div>
                <p className="text-2xl font-bold">{posts.length}</p>
                <p className="text-sm text-gray-600">Total Posts</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-green-500 rounded-full"></div>
              <div>
                <p className="text-2xl font-bold">
                  {posts.filter(p => p.status === 'published').length}
                </p>
                <p className="text-sm text-gray-600">Published</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-yellow-500 rounded-full"></div>
              <div>
                <p className="text-2xl font-bold">
                  {posts.filter(p => p.status === 'draft').length}
                </p>
                <p className="text-sm text-gray-600">Drafts</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Eye className="h-5 w-5 text-purple-600" />
              <div>
                <p className="text-2xl font-bold">
                  {posts.reduce((sum, post) => sum + post.views, 0).toLocaleString()}
                </p>
                <p className="text-sm text-gray-600">Total Views</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Posts Table */}
      <Card>
        <CardHeader>
          <CardTitle>Posts</CardTitle>
          <CardDescription>
            A list of all posts in your content management system
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Filter className="h-4 w-4" />
                    Status: {filterStatus === 'all' ? 'All' : filterStatus}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onClick={() => setFilterStatus('all')}>
                    All Status
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setFilterStatus('published')}>
                    Published
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setFilterStatus('draft')}>
                    Draft
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setFilterStatus('archived')}>
                    Archived
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Filter className="h-4 w-4" />
                    Category: {filterCategory === 'all' ? 'All' : filterCategory}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onClick={() => setFilterCategory('all')}>
                    All Categories
                  </DropdownMenuItem>
                  {categories.map(category => (
                    <DropdownMenuItem 
                      key={category}
                      onClick={() => setFilterCategory(category)}
                    >
                      {category}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Post</TableHead>
                  <TableHead>Author</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Views</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredPosts.map((post) => (
                  <TableRow key={post.id}>
                    <TableCell>
                      <div className="flex items-start gap-3">
                        {post.featuredImage && (
                          <img 
                            src={post.featuredImage} 
                            alt={post.title}
                            className="w-12 h-12 rounded object-cover"
                          />
                        )}
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-gray-900 truncate">
                            {post.title}
                          </p>
                          <p className="text-sm text-gray-500 line-clamp-2">
                            {post.content.substring(0, 100)}...
                          </p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4 text-gray-400" />
                        <span className="text-sm">{post.author}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">
                        {post.category}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge className={getStatusBadgeColor(post.status)}>
                        {post.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <Eye className="h-4 w-4 text-gray-400" />
                        <span className="text-sm">{post.views.toLocaleString()}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4 text-gray-400" />
                        <span className="text-sm">
                          {new Date(post.createdAt).toLocaleDateString()}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Eye className="h-4 w-4 mr-2" />
                            View Post
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Edit className="h-4 w-4 mr-2" />
                            Edit Post
                          </DropdownMenuItem>
                          <DropdownMenuItem 
                            className="text-red-600"
                            onClick={() => handleDeletePost(post.id)}
                          >
                            <Trash2 className="h-4 w-4 mr-2" />
                            Delete Post
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-8">
              <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No posts found</h3>
              <p className="text-gray-500">
                Try adjusting your search or filter criteria.
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}