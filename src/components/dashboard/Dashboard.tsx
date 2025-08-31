import React, { useState } from 'react';
import { Sidebar } from '../layout/Sidebar';
import { Header } from '../layout/Header';
import { Overview } from './Overview';
import { AnalyticsView } from '../analytics/AnalyticsView';
import { ContentScheduler } from '../content/ContentScheduler';
import { AccountsView } from '../accounts/AccountsView';
import { ActivityView } from '../activity/ActivityView';
import { SettingsView } from '../profile/SettingsView';

export function Dashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderActiveView = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Overview />;
      case 'analytics':
        return <AnalyticsView />;
      case 'content':
        return <ContentScheduler />;
      case 'schedule':
        return <ContentScheduler />;
      case 'accounts':
        return <AccountsView />;
      case 'activity':
        return <ActivityView />;
      case 'settings':
        return <SettingsView />;
      default:
        return <Overview />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        
        <main className="flex-1 overflow-y-auto p-6">
          {renderActiveView()}
        </main>
      </div>
    </div>
  );
}