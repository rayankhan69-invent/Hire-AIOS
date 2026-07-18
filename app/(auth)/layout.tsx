import { Logo } from "@/components/shared/logo";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <div className="relative hidden flex-col justify-between overflow-hidden bg-sidebar p-10 text-sidebar-foreground lg:flex">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, hsl(var(--signal) / 0.25), transparent 45%), radial-gradient(circle at 80% 70%, hsl(var(--spark) / 0.18), transparent 40%)",
          }}
          aria-hidden
        />
        <Logo className="relative text-sidebar-foreground [&_span]:text-sidebar-foreground" />

        <div className="relative max-w-md space-y-4">
          <p className="font-display text-3xl font-semibold leading-tight tracking-tight">
            Hire faster, with a shortlist you can trust.
          </p>
          <p className="text-sm text-sidebar-foreground/60">
            HireIQ AI helps recruitment agencies match, screen, and place
            candidates — without the manual sifting.
          </p>
        </div>

        <p className="relative text-xs text-sidebar-foreground/40">
          © {new Date().getFullYear()} HireIQ AI. Built for recruitment agencies.
        </p>
      </div>

      <div className="flex items-center justify-center p-6 sm:p-10">
        <div className="w-full max-w-sm">
          <div className="mb-8 lg:hidden">
            <Logo />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
