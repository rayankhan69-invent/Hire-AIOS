import { Logo } from "@/components/shared/logo";
import { NavItem } from "@/components/layout/nav-item";
import { primaryNav } from "@/lib/nav-config";

export function Sidebar() {
  return (
    <aside className="hidden w-64 shrink-0 border-r border-sidebar-border bg-sidebar text-sidebar-foreground lg:flex lg:flex-col">
      <div className="flex h-16 items-center border-b border-sidebar-border px-5">
        <Logo className="text-sidebar-foreground [&_span]:text-sidebar-foreground" />
      </div>

      <nav className="flex-1 space-y-6 overflow-y-auto scrollbar-thin px-3 py-5">
        {primaryNav.map((section, i) => (
          <div key={section.title ?? i} className="space-y-1">
            {section.title ? (
              <p className="px-3 pb-1 text-xs font-medium uppercase tracking-wider text-sidebar-foreground/40">
                {section.title}
              </p>
            ) : null}
            {section.items.map((item) => (
              <NavItem
                key={item.href}
                href={item.href}
                label={item.label}
                icon={<item.icon />}
                badge={item.badge}
              />
            ))}
          </div>
        ))}
      </nav>

      <div className="border-t border-sidebar-border p-4">
        <div className="rounded-md bg-white/5 p-3">
          <p className="text-xs font-medium text-sidebar-foreground/80">
            Agency plan
          </p>
          <p className="mt-0.5 text-xs text-sidebar-foreground/50">
            24 of 50 active roles used
          </p>
          <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-[48%] rounded-full bg-sidebar-accent" />
          </div>
        </div>
      </div>
    </aside>
  );
}
