import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { NotificationPanel } from '@/components/features/NotificationPanel';

function Notifications() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Notifications</h1>
          <p className="text-muted-foreground">Manage all your notifications and alerts</p>
        </div>
        
        <div className="max-w-4xl">
          <NotificationPanel onClose={() => {}} />
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Notifications;