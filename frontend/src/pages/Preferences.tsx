import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';

const contentTopics = [
  'Safety Circulars',
  'HR Policies',
  'Engineering Updates',
  'Procurement Guidelines',
  'Finance Procedures',
  'Regulatory Directives',
  'Training Materials',
  'Operational Procedures'
];

function Preferences() {
  return (
    <DashboardLayout>
      <div className="space-y-6 max-w-4xl">
        <div>
          <h1 className="text-3xl font-bold">Preferences</h1>
          <p className="text-muted-foreground">Customize your InsightLine experience</p>
        </div>

        <div className="grid gap-6">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Notification Channels</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="email-notifications">Email Notifications</Label>
                  <p className="text-sm text-muted-foreground">Receive updates via email</p>
                </div>
                <Switch id="email-notifications" defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="whatsapp-notifications">WhatsApp Alerts</Label>
                  <p className="text-sm text-muted-foreground">Critical updates via WhatsApp</p>
                </div>
                <Switch id="whatsapp-notifications" defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="dashboard-notifications">Dashboard Notifications</Label>
                  <p className="text-sm text-muted-foreground">In-app notification panel</p>
                </div>
                <Switch id="dashboard-notifications" defaultChecked />
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Content Topics</h3>
            <div className="grid grid-cols-2 gap-4">
              {contentTopics.map((topic) => (
                <div key={topic} className="flex items-center space-x-2">
                  <Checkbox id={topic} defaultChecked />
                  <Label htmlFor={topic} className="text-sm">{topic}</Label>
                </div>
              ))}
            </div>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Language Preference</h3>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="language">Display Language</Label>
                  <Select defaultValue="en">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="ml">Malayalam</SelectItem>
                      <SelectItem value="bilingual">Bilingual</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Notification Frequency</h3>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="frequency">Update Frequency</Label>
                  <Select defaultValue="daily">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="realtime">Real-time</SelectItem>
                      <SelectItem value="daily">Daily Digest</SelectItem>
                      <SelectItem value="weekly">Weekly Summary</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </Card>
          </div>

          <div className="flex justify-end">
            <Button>Save Preferences</Button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Preferences;