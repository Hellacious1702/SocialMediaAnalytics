import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Calendar, Clock, Send, Image, FileText } from 'lucide-react';
import { mockPosts } from '../../data/mockData';
import { format } from 'date-fns';

const schema = yup.object({
  content: yup.string().required('Content is required').max(280, 'Content too long'),
  platform: yup.string().required('Platform is required'),
  scheduledFor: yup.string().required('Schedule time is required'),
});

interface ContentFormData {
  content: string;
  platform: string;
  scheduledFor: string;
}

export function ContentScheduler() {
  const [posts, setPosts] = useState(mockPosts);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContentFormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: ContentFormData) => {
    const newPost = {
      id: Date.now().toString(),
      platform: data.platform,
      content: data.content,
      scheduledFor: data.scheduledFor,
      status: 'scheduled' as const,
      engagement: {
        likes: 0,
        shares: 0,
        comments: 0,
        views: 0,
      },
    };
    
    setPosts([newPost, ...posts]);
    reset();
  };

  const getPlatformColor = (platform: string) => {
    switch (platform) {
      case 'twitter': return 'bg-blue-500';
      case 'instagram': return 'bg-pink-500';
      case 'facebook': return 'bg-blue-600';
      case 'linkedin': return 'bg-blue-700';
      default: return 'bg-gray-500';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published': return 'bg-green-100 text-green-800';
      case 'scheduled': return 'bg-blue-100 text-blue-800';
      case 'draft': return 'bg-gray-100 text-gray-800';
      case 'failed': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Content Scheduler</h2>
        <p className="text-gray-600 mt-1">Create and schedule posts across all your social media platforms</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Create New Post</h3>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Platform
                </label>
                <select
                  {...register('platform')}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select platform</option>
                  <option value="twitter">Twitter</option>
                  <option value="instagram">Instagram</option>
                  <option value="facebook">Facebook</option>
                  <option value="linkedin">LinkedIn</option>
                </select>
                {errors.platform && (
                  <p className="mt-1 text-sm text-red-600">{errors.platform.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Content
                </label>
                <textarea
                  {...register('content')}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="What's happening?"
                />
                {errors.content && (
                  <p className="mt-1 text-sm text-red-600">{errors.content.message}</p>
                )}
              </div>

              <div className="flex space-x-2">
                <button
                  type="button"
                  className="flex items-center px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <Image className="w-4 h-4 mr-2" />
                  Media
                </button>
                <button
                  type="button"
                  className="flex items-center px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <FileText className="w-4 h-4 mr-2" />
                  Poll
                </button>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Schedule for
                </label>
                <div className="relative">
                  <Calendar className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    {...register('scheduledFor')}
                    type="datetime-local"
                    className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                {errors.scheduledFor && (
                  <p className="mt-1 text-sm text-red-600">{errors.scheduledFor.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors flex items-center justify-center"
              >
                <Clock className="w-4 h-4 mr-2" />
                Schedule Post
              </button>
            </form>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Scheduled & Recent Posts</h3>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
                <Send className="w-4 h-4 mr-2" />
                Post Now
              </button>
            </div>
            
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {posts.map((post) => (
                <div key={post.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-sm transition-shadow">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-3 flex-1">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-semibold ${getPlatformColor(post.platform)}`}>
                        {post.platform.charAt(0).toUpperCase()}
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-900 mb-2">{post.content}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          {post.scheduledFor && (
                            <span>Scheduled: {format(new Date(post.scheduledFor), 'MMM d, HH:mm')}</span>
                          )}
                          {post.publishedAt && (
                            <span>Published: {format(new Date(post.publishedAt), 'MMM d, HH:mm')}</span>
                          )}
                          {post.status === 'published' && (
                            <span>
                              {post.engagement.likes} likes • {post.engagement.shares} shares • {post.engagement.comments} comments
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(post.status)}`}>
                      {post.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}