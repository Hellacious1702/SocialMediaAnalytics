import React from 'react';
import { Activity, TrendingUp, TrendingDown, Users, Heart } from 'lucide-react';
import { format } from 'date-fns';

const mockActivity = [
  {
    id: '1',
    type: 'follower',
    platform: 'twitter',
    description: 'Gained 25 new followers',
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    positive: true,
  },
  {
    id: '2',
    type: 'engagement',
    platform: 'instagram',
    description: 'Post received 150 likes',
    timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(),
    positive: true,
  },
  {
    id: '3',
    type: 'follower',
    platform: 'linkedin',
    description: 'Lost 3 followers',
    timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(),
    positive: false,
  },
  {
    id: '4',
    type: 'post',
    platform: 'twitter',
    description: 'New post published successfully',
    timestamp: new Date(Date.now() - 8 * 60 * 60 * 1000).toISOString(),
    positive: true,
  },
  {
    id: '5',
    type: 'engagement',
    platform: 'instagram',
    description: 'Story reached 1.2K views',
    timestamp: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(),
    positive: true,
  },
];

export function ActivityView() {
  const getActivityIcon = (type: string, positive: boolean) => {
    switch (type) {
      case 'follower':
        return positive ? <TrendingUp className="w-5 h-5 text-green-600" /> : <TrendingDown className="w-5 h-5 text-red-600" />;
      case 'engagement':
        return <Heart className="w-5 h-5 text-pink-600" />;
      case 'post':
        return <Activity className="w-5 h-5 text-blue-600" />;
      default:
        return <Activity className="w-5 h-5 text-gray-600" />;
    }
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

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Activity Feed</h2>
        <p className="text-gray-600 mt-1">Track all your social media activities and updates</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
            <button className="text-blue-600 hover:text-blue-800 text-sm transition-colors">
              View All
            </button>
          </div>
        </div>
        
        <div className="p-6">
          <div className="space-y-4">
            {mockActivity.map((activity) => (
              <div key={activity.id} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="flex-shrink-0">
                  {getActivityIcon(activity.type, activity.positive)}
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <div className={`w-4 h-4 rounded-full ${getPlatformColor(activity.platform)}`}></div>
                    <span className="text-sm font-medium text-gray-900 capitalize">{activity.platform}</span>
                  </div>
                  <p className="text-gray-700 mt-1">{activity.description}</p>
                  <p className="text-sm text-gray-500 mt-1">
                    {format(new Date(activity.timestamp), 'MMM d, HH:mm')}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}