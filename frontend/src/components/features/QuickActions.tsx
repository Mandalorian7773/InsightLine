import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  FileText,
  Upload,
  Search,
  AlertTriangle,
  BookOpen,
  TrendingUp,
  Users,
  Plus,
  Eye
} from 'lucide-react';

const quickActions = [
  {
    title: 'Upload Document',
    icon: Upload,
    onClick: () => console.log('Upload')
  },
  {
    title: 'Search Documents',
    icon: Search,
    onClick: () => console.log('Search')
  },
  {
    title: 'Report Issue',
    icon: AlertTriangle,
    onClick: () => console.log('Report')
  },
  {
    title: 'Training Materials',
    icon: BookOpen,
    onClick: () => console.log('Training')
  }
];

const activityStats = [
  {
    title: 'Documents Reviewed',
    value: '12',
    subtitle: 'This week',
    icon: FileText
  },
  {
    title: 'Compliance Score',
    value: '98%',
    subtitle: 'Current period',
    icon: TrendingUp
  },
  {
    title: 'Team Updates',
    value: '5',
    subtitle: 'Pending review',
    icon: Users
  }
];

export function QuickActions() {
  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Plus className="h-5 w-5" />
          Quick Actions
        </h3>
        <div className="space-y-3">
          {quickActions.map((action) => (
            <Button
              key={action.title}
              variant="outline"
              className="w-full justify-start gap-3 h-auto p-3"
              onClick={action.onClick}
            >
              <action.icon className="h-4 w-4" />
              {action.title}
            </Button>
          ))}
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <TrendingUp className="h-5 w-5" />
          Activity Summary
        </h3>
        <div className="space-y-4">
          {activityStats.map((stat) => (
            <div key={stat.title} className="flex items-center gap-3">
              <div className="p-2 bg-muted rounded-lg">
                <stat.icon className="h-4 w-4" />
              </div>
              <div className="flex-1">
                <div className="text-lg font-semibold">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.title}</div>
                <div className="text-xs text-muted-foreground">{stat.subtitle}</div>
              </div>
            </div>
          ))}
        </div>
        <Button variant="outline" size="sm" className="w-full mt-4">
          <Eye className="h-4 w-4 mr-2" />
          View Analytics
        </Button>
      </Card>
    </div>
  );
}