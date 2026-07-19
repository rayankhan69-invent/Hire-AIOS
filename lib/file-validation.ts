export const ACCEPTED_EXTENSIONS = [".pdf", ".doc", ".docx"];
export const MAX_FILE_SIZE_BYTES = 10 * 1024 * 1024; // 10MB

export type FileValidationResult = { valid: true } | { valid: false; reason: string };

export function validateResumeFile(file: File): FileValidationResult {
  const name = file.name.toLowerCase();
  const hasAcceptedExtension = ACCEPTED_EXTENSIONS.some((ext) => name.endsWith(ext));

  if (!hasAcceptedExtension) {
    return { valid: false, reason: "Unsupported file type. Upload a PDF, DOC, or DOCX." };
  }
  if (file.size > MAX_FILE_SIZE_BYTES) {
    return { valid: false, reason: "File exceeds the 10MB limit." };
  }
  if (file.size === 0) {
    return { valid: false, reason: "This file appears to be empty." };
  }
  return { valid: true };
}

export function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  const kb = bytes / 1024;
  if (kb < 1024) return `${kb.toFixed(0)} KB`;
  const mb = kb / 1024;
  return `${mb.toFixed(1)} MB`;
}

/** Best-effort candidate name guess from a resume filename, for the success preview. */
export function guessNameFromFilename(filename: string): string {
  const base = filename.replace(/\.[^/.]+$/, "");
  const cleaned = base
    .replace(/[-_]+/g, " ")
    .replace(/\b(resume|cv|final|updated|copy)\b/gi, "")
    .replace(/\s+/g, " ")
    .trim();

  if (!cleaned) return "Unknown candidate";

  return cleaned
    .split(" ")
    .map((word) => (word.length > 0 ? word[0]!.toUpperCase() + word.slice(1) : word))
    .join(" ");
}
