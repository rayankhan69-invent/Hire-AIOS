"use client";

import * as React from "react";
import { UploadCloud } from "lucide-react";

import { cn } from "@/lib/utils";
import { ACCEPTED_EXTENSIONS } from "@/lib/file-validation";

export function ResumeDropzone({ onFiles }: { onFiles: (files: FileList) => void }) {
  const [isDragActive, setIsDragActive] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);

  function handleDragOver(e: React.DragEvent) {
    e.preventDefault();
    setIsDragActive(true);
  }

  function handleDragLeave(e: React.DragEvent) {
    e.preventDefault();
    setIsDragActive(false);
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault();
    setIsDragActive(false);
    if (e.dataTransfer.files.length > 0) {
      onFiles(e.dataTransfer.files);
    }
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files.length > 0) {
      onFiles(e.target.files);
    }
    e.target.value = "";
  }

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => inputRef.current?.click()}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          inputRef.current?.click();
        }
      }}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={cn(
        "flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed px-6 py-14 text-center transition-colors",
        isDragActive
          ? "border-primary bg-primary/5"
          : "border-border hover:border-primary/40 hover:bg-secondary/40"
      )}
    >
      <input
        ref={inputRef}
        type="file"
        multiple
        accept={ACCEPTED_EXTENSIONS.join(",")}
        onChange={handleInputChange}
        className="sr-only"
        aria-label="Upload resumes"
      />
      <div
        className={cn(
          "flex h-12 w-12 items-center justify-center rounded-full",
          isDragActive ? "bg-primary/15 text-primary" : "bg-secondary text-muted-foreground"
        )}
      >
        <UploadCloud className="h-6 w-6" />
      </div>
      <p className="mt-4 text-sm font-medium">
        {isDragActive ? "Drop to upload" : "Drag and drop resumes here"}
      </p>
      <p className="mt-1 text-sm text-muted-foreground">
        or <span className="font-medium text-primary">click to browse</span>
      </p>
      <p className="mt-3 text-xs text-muted-foreground">
        PDF, DOC, or DOCX · up to 10MB per file
      </p>
    </div>
  );
}
