import React from 'react';
import { Plus, RefreshCw, ExternalLink } from 'lucide-react';
import { mockSocialAccounts } from '../../data/mockData';

export function AccountsView() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Social Media Accounts</h2>
          <p className="text-gray-600 mt-1">Manage your connected social media platforms</p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
          <Plus className="w-4 h-4 mr-2" />
          Connect Account
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mockSocialAccounts.map((account) => (
          <div key={account.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg ${
                  account.platform === 'twitter' ? 'bg-blue-500' :
                  account.platform === 'instagram' ? 'bg-pink-500' :
                  account.platform === 'facebook' ? 'bg-blue-600' :
                  'bg-blue-700'
                }`}>
                  {account.platform.charAt(0).toUpperCase()}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 capitalize">{account.platform}</h3>
                  <p className="text-gray-600">{account.username}</p>
                </div>
              </div>
              <div className={`px-3 py-1 text-sm rounded-full ${
                account.connected ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
              }`}>
                {account.connected ? 'Connected' : 'Disconnected'}
              </div>
            </div>

            {account.connected ? (
              <>
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-gray-900">{account.followers.toLocaleString()}</p>
                    <p className="text-sm text-gray-600">Followers</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-gray-900">{account.following.toLocaleString()}</p>
                    <p className="text-sm text-gray-600">Following</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-gray-900">{account.posts.toLocaleString()}</p>
                    <p className="text-sm text-gray-600">Posts</p>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <button className="flex-1 bg-gray-100 text-gray-700 py-2 px-3 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center">
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Sync
                  </button>
                  <button className="flex-1 bg-blue-600 text-white py-2 px-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Profile
                  </button>
                </div>
              </>
            ) : (
              <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                Connect Account
              </button>
            )}
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Available Platforms</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {['YouTube', 'TikTok', 'Pinterest', 'Snapchat'].map((platform) => (
            <div key={platform} className="border border-gray-200 rounded-lg p-4 text-center hover:shadow-sm transition-shadow">
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-gray-600 font-semibold">{platform.charAt(0)}</span>
              </div>
              <p className="font-medium text-gray-900">{platform}</p>
              <button className="mt-2 text-sm text-blue-600 hover:text-blue-800 transition-colors">
                Coming Soon
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}