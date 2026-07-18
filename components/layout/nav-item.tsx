"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import type { NavItemConfig } from "@/lib/nav-config";

export function NavItem({ item, onNavigate }: { item: NavItemConfig; onNavigate?: () => void }) {
  const pathname = usePathname();
  const isActive = pathname === item.href || pathname?.startsWith(`${item.href}/`);
  const Icon = item.icon;

  return (
    <Link
      href={item.href}
      onClick={onNavigate}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "group flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
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
      <Icon className={cn("h-4 w-4 shrink-0", isActive && "text-sidebar-accent")} />
      <span className="flex-1 truncate">{item.label}</span>
      {item.badge ? (
        <span className="rounded-full bg-sidebar-accent/20 px-1.5 py-0.5 text-[10px] font-semibold text-sidebar-accent">
          {item.badge}
        </span>
      ) : null}
    </Link>
  );
}
