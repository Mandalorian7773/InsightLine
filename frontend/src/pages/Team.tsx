import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card } from '@/components/ui/card';

function Team() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Team</h1>
          <p className="text-muted-foreground">Manage team members and collaborate on documents</p>
        </div>
        
        <Card className="p-12">
          <p className="text-center text-muted-foreground">
            Team management interface will be implemented here
          </p>
        </Card>
      </div>
    </DashboardLayout>
  );
}

export default Team;