import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FileText, ExternalLink, Clock, Users } from 'lucide-react';

interface DigestCardProps {
  title: string;
  summary: string;
  category: string;
  priority: 'high' | 'medium' | 'low';
  timeToRead: string;
  relevantFor: string[];
  source: string;
  updatedAt: string;
  onViewDocument: () => void;
}

function getPriorityColor(priority: string) {
  switch (priority) {
    case 'high':
      return 'destructive';
    case 'medium':
      return 'default';
    default:
      return 'secondary';
  }
}

export function DigestCard({
  title,
  summary,
  category,
  priority,
  timeToRead,
  relevantFor,
  source,
  updatedAt,
  onViewDocument
}: DigestCardProps) {
  return (
    <Card className="p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <Badge variant={getPriorityColor(priority)}>
              {priority.toUpperCase()}
            </Badge>
            <Badge variant="outline">{category}</Badge>
          </div>
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-muted-foreground text-sm mb-4">{summary}</p>
        </div>
        <FileText className="h-5 w-5 text-muted-foreground" />
      </div>

      <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
        <div className="flex items-center gap-1">
          <Clock className="h-3 w-3" />
          <span>{timeToRead} read</span>
        </div>
        <div className="flex items-center gap-1">
          <Users className="h-3 w-3" />
          <span>{relevantFor.join(', ')}</span>
        </div>
      </div>

      <div className="flex items-center justify-between pt-4 border-t">
        <div className="text-xs text-muted-foreground">
          <div>Source: {source}</div>
          <div>Updated: {updatedAt}</div>
        </div>
        <Button size="sm" onClick={onViewDocument}>
          View Document
          <ExternalLink className="h-3 w-3 ml-1" />
        </Button>
      </div>
    </Card>
  );
}