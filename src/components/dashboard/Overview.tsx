import React from 'react';
import { MetricCard } from './MetricCard';
import { Users, Heart, Eye, MousePointer } from 'lucide-react';
import { mockSocialAccounts } from '../../data/mockData';

export function Overview() {
  const totalFollowers = mockSocialAccounts.reduce((acc, account) => acc + account.followers, 0);
  const totalPosts = mockSocialAccounts.reduce((acc, account) => acc + account.posts, 0);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Dashboard Overview</h2>
        <p className="text-gray-600 mt-1">Your social media performance at a glance</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Total Followers"
          value={totalFollowers}
          change={8.3}
          icon={Users}
          color="blue"
        />
        <MetricCard
          title="Total Engagement"
          value={3247}
          change={12.7}
          icon={Heart}
          color="green"
        />
        <MetricCard
          title="Total Reach"
          value={89420}
          change={-2.1}
          icon={Eye}
          color="purple"
        />
        <MetricCard
          title="Click-through Rate"
          value="3.2%"
          change={5.8}
          icon={MousePointer}
          color="orange"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Connected Accounts</h3>
          <div className="space-y-4">
            {mockSocialAccounts.map((account) => (
              <div key={account.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold ${
                    account.platform === 'twitter' ? 'bg-blue-500' :
                    account.platform === 'instagram' ? 'bg-pink-500' :
                    account.platform === 'facebook' ? 'bg-blue-600' :
                    'bg-blue-700'
                  }`}>
                    {account.platform.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{account.username}</p>
                    <p className="text-sm text-gray-500 capitalize">{account.platform}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">{account.followers.toLocaleString()}</p>
                  <p className="text-xs text-gray-500">followers</p>
                </div>
                <div className={`px-2 py-1 text-xs rounded-full ${
                  account.connected ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                }`}>
                  {account.connected ? 'Connected' : 'Disconnected'}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
              <div>
                <p className="text-sm text-gray-900">New follower on Instagram</p>
                <p className="text-xs text-gray-500">2 minutes ago</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <div>
                <p className="text-sm text-gray-900">Post scheduled for Twitter</p>
                <p className="text-xs text-gray-500">1 hour ago</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
              <div>
                <p className="text-sm text-gray-900">LinkedIn post published</p>
                <p className="text-xs text-gray-500">3 hours ago</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
              <div>
                <p className="text-sm text-gray-900">Weekly report generated</p>
                <p className="text-xs text-gray-500">1 day ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}