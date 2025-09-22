import { useState } from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from './AppSidebar';
import { TopBar } from './TopBar';
import { NotificationPanel } from '../features/NotificationPanel';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        
        <div className="flex-1 flex flex-col">
          <TopBar 
            onNotificationsToggle={() => setShowNotifications(!showNotifications)}
            showNotifications={showNotifications}
          />
          
          <main className="flex-1 p-6">
            {children}
          </main>
        </div>

        {showNotifications && (
          <NotificationPanel onClose={() => setShowNotifications(false)} />
        )}
      </div>
    </SidebarProvider>
  );
}