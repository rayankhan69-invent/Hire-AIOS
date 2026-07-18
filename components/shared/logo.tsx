import { cn } from "@/lib/utils";

/**
 * The mark is a partial ring with a solid core — a nod to HireIQ AI's
 * candidate-to-role match score, used sparingly as the brand's signature.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      className={cn("h-6 w-6", className)}
      aria-hidden
    >
      <circle
        cx="16"
        cy="16"
        r="13"
        stroke="currentColor"
        strokeOpacity="0.25"
        strokeWidth="3"
      />
      <path
        d="M16 3a13 13 0 0 1 9.19 22.19"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="16" cy="16" r="5" fill="currentColor" />
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <LogoMark className="text-signal" />
      <span className="font-display text-base font-semibold tracking-tight">
        Hire <span className="text-signal">AIOS</span>
      </span>
    </div>
  );
}
