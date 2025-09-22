import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { DigestCard } from '@/components/features/DigestCard';
import { QuickActions } from '@/components/features/QuickActions';
import { Calendar, TrendingUp, Clock } from 'lucide-react';

const digestData = [
  {
    title: 'Updated Safety Protocol for Signal Failures',
    summary: 'New emergency response procedures have been implemented following recent signal system upgrades. All station controllers must review the revised evacuation protocols.',
    category: 'Safety',
    priority: 'high' as const,
    timeToRead: '3 min',
    relevantFor: ['Station Controllers', 'Engineers'],
    source: 'Safety Department',
    updatedAt: '2 hours ago'
  },
  {
    title: 'Monthly HR Policy Updates - Leave Management',
    summary: 'Changes to annual leave application process and approval workflow. New digital system reduces processing time from 5 days to 24 hours.',
    category: 'HR',
    priority: 'medium' as const,
    timeToRead: '2 min',
    relevantFor: ['All Staff'],
    source: 'Human Resources',
    updatedAt: '6 hours ago'
  },
  {
    title: 'Engineering Maintenance Schedule - Line 2 Extension',
    summary: 'Detailed maintenance timeline for the new Line 2 extension project. Critical infrastructure updates scheduled for non-peak hours.',
    category: 'Engineering',
    priority: 'medium' as const,
    timeToRead: '4 min',
    relevantFor: ['Engineers', 'Operations'],
    source: 'Engineering Division',
    updatedAt: '1 day ago'
  }
];

function Index() {
  const handleViewDocument = (title: string) => {
    console.log('Viewing document:', title);
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Good Morning, Rajesh</h1>
            <p className="text-muted-foreground mt-1">
              Here's your personalized digest for today
            </p>
          </div>
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>March 22, 2024</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>08:30 AM</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-semibold">Daily Digest</h2>
                <span className="text-sm text-muted-foreground">
                  ({digestData.length} priority updates)
                </span>
              </div>
              
              <div className="space-y-4">
                {digestData.map((item, index) => (
                  <DigestCard
                    key={index}
                    {...item}
                    onViewDocument={() => handleViewDocument(item.title)}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <QuickActions />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Index;
