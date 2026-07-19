"use client";

import * as React from "react";
import { Inbox } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { EmptyState } from "@/components/shared/empty-state";
import { ResumeDropzone } from "@/components/uploads/dropzone";
import { UploadRow } from "@/components/uploads/upload-row";
import { validateResumeFile, formatFileSize, guessNameFromFilename } from "@/lib/file-validation";
import type { UploadItem } from "@/lib/mock/uploads";

const PROGRESS_STEP = 14;
const PROGRESS_INTERVAL_MS = 220;

export function ResumeUploader({ initialUploads }: { initialUploads: UploadItem[] }) {
  const [uploads, setUploads] = React.useState<UploadItem[]>(initialUploads);
  const timers = React.useRef<Map<string, ReturnType<typeof setInterval>>>(new Map());

  React.useEffect(() => {
    const timerMap = timers.current;
    return () => {
      timerMap.forEach((timer) => clearInterval(timer));
    };
  }, []);

  function simulateUpload(id: string) {
    const timer = setInterval(() => {
      setUploads((prev) =>
        prev.map((item) => {
          if (item.id !== id || item.status !== "uploading") return item;
          const next = Math.min(item.progress + PROGRESS_STEP, 100);
          return { ...item, progress: next };
        })
      );
    }, PROGRESS_INTERVAL_MS);
    timers.current.set(id, timer);
  }

  // Once an item's progress reaches 100, flip it to "success" and stop its timer.
  React.useEffect(() => {
    uploads.forEach((item) => {
      if (item.status === "uploading" && item.progress >= 100) {
        const timer = timers.current.get(item.id);
        if (timer) {
          clearInterval(timer);
          timers.current.delete(item.id);
        }
        setUploads((prev) =>
          prev.map((u) =>
            u.id === item.id
              ? { ...u, status: "success", candidateName: guessNameFromFilename(item.fileName) }
              : u
          )
        );
      }
    });
  }, [uploads]);

  function handleFiles(fileList: FileList) {
    const newItems: UploadItem[] = Array.from(fileList).map((file) => {
      const id = `up-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
      const validation = validateResumeFile(file);

      if (!validation.valid) {
        return {
          id,
          fileName: file.name,
          fileSize: formatFileSize(file.size),
          status: "error",
          progress: 0,
          uploadedAt: "Just now",
          errorReason: validation.reason,
        };
      }

      return {
        id,
        fileName: file.name,
        fileSize: formatFileSize(file.size),
        status: "uploading",
        progress: 0,
        uploadedAt: "Just now",
      };
    });

    setUploads((prev) => [...newItems, ...prev]);

    newItems
      .filter((item) => item.status === "uploading")
      .forEach((item) => simulateUpload(item.id));
  }

  function handleRemove(id: string) {
    const timer = timers.current.get(id);
    if (timer) {
      clearInterval(timer);
      timers.current.delete(id);
    }
    setUploads((prev) => prev.filter((item) => item.id !== id));
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="p-6">
          <ResumeDropzone onFiles={handleFiles} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recent uploads</CardTitle>
          <CardDescription>Files you&apos;ve uploaded, newest first.</CardDescription>
        </CardHeader>
        <CardContent>
          {uploads.length === 0 ? (
            <EmptyState
              icon={Inbox}
              title="No uploads yet"
              description="Resumes you upload will show up here with parsing status."
              className="border-none py-10"
            />
          ) : (
            <ul className="divide-y divide-border">
              {uploads.map((item) => (
                <UploadRow key={item.id} item={item} onRemove={handleRemove} />
              ))}
            </ul>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
