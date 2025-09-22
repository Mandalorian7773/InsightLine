import { X, AlertTriangle, Info, CheckCircle, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';

interface NotificationPanelProps {
  onClose: () => void;
}

const notifications = [
  {
    id: 1,
    type: 'urgent',
    title: 'Emergency Safety Circular',
    message: 'New protocol for signal failure procedures - immediate implementation required',
    time: '2 minutes ago',
    source: 'Safety Department',
    read: false
  },
  {
    id: 2,
    type: 'warning',
    title: 'Maintenance Schedule Update',
    message: 'Track maintenance on Line 2 rescheduled to tomorrow 0200-0500 hrs',
    time: '15 minutes ago',
    source: 'Engineering Dept',
    read: false
  },
  {
    id: 3,
    type: 'info',
    title: 'New HR Policy',
    message: 'Updated leave application procedures effective from next month',
    time: '1 hour ago',
    source: 'Human Resources',
    read: true
  }
];

function getIcon(type: string) {
  switch (type) {
    case 'urgent':
      return <AlertTriangle className="h-4 w-4 text-destructive" />;
    case 'warning':
      return <Clock className="h-4 w-4 text-orange-500" />;
    case 'success':
      return <CheckCircle className="h-4 w-4 text-green-500" />;
    default:
      return <Info className="h-4 w-4 text-blue-500" />;
  }
}

function getBorderColor(type: string) {
  switch (type) {
    case 'urgent':
      return 'border-l-destructive';
    case 'warning':
      return 'border-l-orange-500';
    case 'success':
      return 'border-l-green-500';
    default:
      return 'border-l-blue-500';
  }
}

export function NotificationPanel({ onClose }: NotificationPanelProps) {
  return (
    <div className="fixed right-0 top-16 h-[calc(100vh-4rem)] w-80 bg-card border-l shadow-lg z-50">
      <div className="p-4 border-b">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Notifications</h3>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <ScrollArea className="h-[calc(100%-8rem)]">
        <div className="p-4 space-y-3">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={`p-4 rounded-lg border-l-4 cursor-pointer hover:bg-muted/50 transition-colors ${
                getBorderColor(notification.type)
              } ${!notification.read ? 'bg-muted/20' : 'opacity-75'}`}
            >
              <div className="flex items-start gap-3">
                {getIcon(notification.type)}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="text-sm font-medium">{notification.title}</h4>
                    {!notification.read && (
                      <Badge variant="secondary" className="h-2 w-2 p-0 rounded-full bg-primary" />
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    {notification.message}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{notification.source}</span>
                    <span>{notification.time}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      <div className="p-4 border-t">
        <Button variant="outline" className="w-full" size="sm">
          View All Notifications
        </Button>
      </div>
    </div>
  );
}