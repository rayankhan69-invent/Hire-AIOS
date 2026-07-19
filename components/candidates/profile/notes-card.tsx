"use client";

import * as React from "react";
import { SendHorizonal } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import type { Note } from "@/lib/mock/candidate-profile";

const currentUser = { name: "Amelia Chen", initials: "AC" };

export function NotesCard({ initialNotes }: { initialNotes: Note[] }) {
  const [notes, setNotes] = React.useState<Note[]>(initialNotes);
  const [draft, setDraft] = React.useState("");

  function addNote() {
    const content = draft.trim();
    if (!content) return;
    setNotes((prev) => [
      {
        id: `note-${Date.now()}`,
        authorName: currentUser.name,
        authorInitials: currentUser.initials,
        timestamp: "Just now",
        content,
      },
      ...prev,
    ]);
    setDraft("");
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Notes</CardTitle>
        <CardDescription>Internal notes — visible only to your team.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-5">
        <div className="space-y-2">
          <Textarea
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            placeholder="Leave a note for your team…"
            rows={3}
          />
          <div className="flex justify-end">
            <Button size="sm" onClick={addNote} disabled={draft.trim() === ""}>
              <SendHorizonal />
              Add note
            </Button>
          </div>
        </div>

        {notes.length === 0 ? (
          <p className="text-sm text-muted-foreground">No notes yet — be the first to leave one.</p>
        ) : (
          <ul className="space-y-4 border-t border-border pt-4">
            {notes.map((note) => (
              <li key={note.id} className="flex gap-3">
                <Avatar className="h-8 w-8 shrink-0">
                  <AvatarFallback className="text-xs">{note.authorInitials}</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium">{note.authorName}</p>
                    <p className="text-xs text-muted-foreground">{note.timestamp}</p>
                  </div>
                  <p className="text-sm text-muted-foreground">{note.content}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
}
