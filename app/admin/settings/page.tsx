"use client";

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { 
  Settings, 
  User, 
  Bell, 
  Shield, 
  Database,
  Mail,
  Globe,
  Save
} from 'lucide-react';
import { toast } from 'sonner';

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    siteName: 'Shotokan Karate Bangladesh',
    siteDescription: 'Official website of Shotokan Karate Bangladesh',
    adminEmail: 'admin@shotokanbd.com',
    enableNotifications: true,
    enableRegistration: true,
    enableComments: false,
    maintenanceMode: false,
    maxFileSize: '5',
    sessionTimeout: '30',
    backupFrequency: 'daily'
  });

  const handleSave = () => {
    // Simulate saving settings
    toast.success('Settings saved successfully!');
  };

  const handleInputChange = (key: string, value: string | boolean) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-600 mt-2">
          Manage your application settings and preferences
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Settings Navigation */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5" />
                Settings Menu
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="ghost" className="w-full justify-start">
                <Globe className="h-4 w-4 mr-2" />
                General
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <User className="h-4 w-4 mr-2" />
                User Management
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Bell className="h-4 w-4 mr-2" />
                Notifications
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Shield className="h-4 w-4 mr-2" />
                Security
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Database className="h-4 w-4 mr-2" />
                System
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Settings Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* General Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5" />
                General Settings
              </CardTitle>
              <CardDescription>
                Basic configuration for your application
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="siteName">Site Name</Label>
                  <Input
                    id="siteName"
                    value={settings.siteName}
                    onChange={(e) => handleInputChange('siteName', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="adminEmail">Admin Email</Label>
                  <Input
                    id="adminEmail"
                    type="email"
                    value={settings.adminEmail}
                    onChange={(e) => handleInputChange('adminEmail', e.target.value)}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="siteDescription">Site Description</Label>
                <Input
                  id="siteDescription"
                  value={settings.siteDescription}
                  onChange={(e) => handleInputChange('siteDescription', e.target.value)}
                />
              </div>
            </CardContent>
          </Card>

          {/* User Management Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                User Management
              </CardTitle>
              <CardDescription>
                Configure user registration and access settings
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Enable User Registration</Label>
                  <p className="text-sm text-gray-500">
                    Allow new users to register for accounts
                  </p>
                </div>
                <Switch
                  checked={settings.enableRegistration}
                  onCheckedChange={(checked) => handleInputChange('enableRegistration', checked)}
                />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Enable Comments</Label>
                  <p className="text-sm text-gray-500">
                    Allow users to comment on posts
                  </p>
                </div>
                <Switch
                  checked={settings.enableComments}
                  onCheckedChange={(checked) => handleInputChange('enableComments', checked)}
                />
              </div>
            </CardContent>
          </Card>

          {/* Notification Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Notifications
              </CardTitle>
              <CardDescription>
                Configure notification preferences
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Enable Notifications</Label>
                  <p className="text-sm text-gray-500">
                    Receive notifications for important events
                  </p>
                </div>
                <Switch
                  checked={settings.enableNotifications}
                  onCheckedChange={(checked) => handleInputChange('enableNotifications', checked)}
                />
              </div>
            </CardContent>
          </Card>

          {/* Security Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Security
              </CardTitle>
              <CardDescription>
                Security and access control settings
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="sessionTimeout">Session Timeout (minutes)</Label>
                  <Input
                    id="sessionTimeout"
                    type="number"
                    value={settings.sessionTimeout}
                    onChange={(e) => handleInputChange('sessionTimeout', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="maxFileSize">Max File Size (MB)</Label>
                  <Input
                    id="maxFileSize"
                    type="number"
                    value={settings.maxFileSize}
                    onChange={(e) => handleInputChange('maxFileSize', e.target.value)}
                  />
                </div>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Maintenance Mode</Label>
                  <p className="text-sm text-gray-500">
                    Enable maintenance mode to restrict access
                  </p>
                </div>
                <Switch
                  checked={settings.maintenanceMode}
                  onCheckedChange={(checked) => handleInputChange('maintenanceMode', checked)}
                />
              </div>
            </CardContent>
          </Card>

          {/* System Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5" />
                System
              </CardTitle>
              <CardDescription>
                System maintenance and backup settings
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="backupFrequency">Backup Frequency</Label>
                <select 
                  id="backupFrequency"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={settings.backupFrequency}
                  onChange={(e) => handleInputChange('backupFrequency', e.target.value)}
                >
                  <option value="daily">Daily</option>
                  <option value="weekly">Weekly</option>
                  <option value="monthly">Monthly</option>
                </select>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" className="flex-1">
                  <Database className="h-4 w-4 mr-2" />
                  Create Backup
                </Button>
                <Button variant="outline" className="flex-1">
                  <Mail className="h-4 w-4 mr-2" />
                  Test Email
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Save Button */}
          <div className="flex justify-end">
            <Button onClick={handleSave} className="flex items-center gap-2">
              <Save className="h-4 w-4" />
              Save Settings
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}