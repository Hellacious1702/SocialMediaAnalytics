import { SocialAccount, Post, Analytics } from '../types';

export const mockSocialAccounts: SocialAccount[] = [
  {
    id: '1',
    platform: 'twitter',
    username: '@your_brand',
    connected: true,
    followers: 12540,
    following: 892,
    posts: 1247,
  },
  {
    id: '2',
    platform: 'instagram',
    username: 'your_brand',
    connected: true,
    followers: 8932,
    following: 445,
    posts: 658,
  },
  {
    id: '3',
    platform: 'facebook',
    username: 'Your Brand',
    connected: false,
    followers: 0,
    following: 0,
    posts: 0,
  },
  {
    id: '4',
    platform: 'linkedin',
    username: 'your-brand',
    connected: true,
    followers: 3247,
    following: 1205,
    posts: 89,
  },
];

export const mockPosts: Post[] = [
  {
    id: '1',
    platform: 'twitter',
    content: 'Excited to share our latest product update! 🚀 #innovation #tech',
    publishedAt: '2025-01-14T10:30:00Z',
    status: 'published',
    engagement: {
      likes: 124,
      shares: 32,
      comments: 18,
      views: 2847,
    },
  },
  {
    id: '2',
    platform: 'instagram',
    content: 'Behind the scenes of our creative process ✨',
    scheduledFor: '2025-01-15T14:00:00Z',
    status: 'scheduled',
    engagement: {
      likes: 0,
      shares: 0,
      comments: 0,
      views: 0,
    },
  },
  {
    id: '3',
    platform: 'linkedin',
    content: 'Thoughts on the future of digital marketing in 2025',
    publishedAt: '2025-01-13T09:15:00Z',
    status: 'published',
    engagement: {
      likes: 67,
      shares: 23,
      comments: 12,
      views: 1243,
    },
  },
];

const generateChartData = (days: number) => {
  const data = [];
  for (let i = days - 1; i >= 0; i--) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    data.push({
      date: date.toISOString().split('T')[0],
      followers: Math.floor(Math.random() * 1000) + 8000,
      engagement: Math.floor(Math.random() * 500) + 200,
      reach: Math.floor(Math.random() * 2000) + 1000,
    });
  }
  return data;
};

export const mockAnalytics: Analytics[] = [
  {
    platform: 'twitter',
    period: 'month',
    metrics: {
      followers: 12540,
      engagement: 1247,
      reach: 45820,
      impressions: 89475,
      clicks: 2843,
    },
    growth: {
      followers: 8.3,
      engagement: 12.7,
    },
    chartData: generateChartData(30),
  },
  {
    platform: 'instagram',
    period: 'month',
    metrics: {
      followers: 8932,
      engagement: 892,
      reach: 23567,
      impressions: 67234,
      clicks: 1567,
    },
    growth: {
      followers: 5.2,
      engagement: -2.1,
    },
    chartData: generateChartData(30),
  },
];