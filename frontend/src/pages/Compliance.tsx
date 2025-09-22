import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card } from '@/components/ui/card';

function Compliance() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Compliance</h1>
          <p className="text-muted-foreground">Track regulatory compliance and safety requirements</p>
        </div>
        
        <Card className="p-12">
          <p className="text-center text-muted-foreground">
            Compliance tracking dashboard will be implemented here
          </p>
        </Card>
      </div>
    </DashboardLayout>
  );
}

export default Compliance;