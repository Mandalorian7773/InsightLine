import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card } from '@/components/ui/card';

function Archive() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Knowledge Archive</h1>
          <p className="text-muted-foreground">Access historical documents and archived knowledge</p>
        </div>
        
        <Card className="p-12">
          <p className="text-center text-muted-foreground">
            Knowledge archive browser will be implemented here
          </p>
        </Card>
      </div>
    </DashboardLayout>
  );
}

export default Archive;