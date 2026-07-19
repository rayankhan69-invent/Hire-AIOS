"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

export function NavItem({
  href,
  label,
  icon,
  badge,
  onNavigate,
}: {
  href: string;
  label: string;
  icon: ReactNode;
  badge?: string;
  onNavigate?: () => void;
}) {
  const pathname = usePathname();
  const isActive = pathname === href || pathname?.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      onClick={onNavigate}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "group relative flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
        isActive
          ? "bg-sidebar-accent/15 text-white"
          : "text-sidebar-foreground/70 hover:bg-white/5 hover:text-sidebar-foreground"
      )}
    >
      <span
        className={cn(
          "absolute -ml-3 h-5 w-0.5 rounded-full bg-sidebar-accent transition-opacity",
          isActive ? "opacity-100" : "opacity-0"
        )}
        aria-hidden
      />
      <span className={cn("flex h-4 w-4 shrink-0 [&>svg]:h-4 [&>svg]:w-4", isActive && "text-sidebar-accent")}>
        {icon}
      </span>
      <span className="flex-1 truncate">{label}</span>
      {badge ? (
        <span className="rounded-full bg-sidebar-accent/20 px-1.5 py-0.5 text-[10px] font-semibold text-sidebar-accent">
          {badge}
        </span>
      ) : null}
    </Link>
  );
}
