import { MessagesSquare } from "lucide-react";

import { PageHeader } from "@/components/shared/page-header";
import { EmptyState } from "@/components/shared/empty-state";
import { Card, CardContent } from "@/components/ui/card";

export default function MessagesPage() {
  return (
    <>
      <PageHeader title="Messages" description="Conversations with candidates and clients." />
      <Card>
        <CardContent className="p-0">
          <EmptyState
            icon={MessagesSquare}
            title="No messages yet"
            description="Conversations with candidates and clients will appear here."
            className="border-none"
          />
        </CardContent>
      </Card>
    </>
  );
}
