export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  created_at: string;
}

export interface SocialAccount {
  id: string;
  platform: 'twitter' | 'instagram' | 'facebook' | 'linkedin';
  username: string;
  connected: boolean;
  followers: number;
  following: number;
  posts: number;
}

export interface Post {
  id: string;
  platform: string;
  content: string;
  scheduledFor?: string;
  publishedAt?: string;
  status: 'draft' | 'scheduled' | 'published' | 'failed';
  engagement: {
    likes: number;
    shares: number;
    comments: number;
    views: number;
  };
}

export interface Analytics {
  platform: string;
  period: 'day' | 'week' | 'month' | 'year';
  metrics: {
    followers: number;
    engagement: number;
    reach: number;
    impressions: number;
    clicks: number;
  };
  growth: {
    followers: number;
    engagement: number;
  };
  chartData: {
    date: string;
    followers: number;
    engagement: number;
    reach: number;
  }[];
}