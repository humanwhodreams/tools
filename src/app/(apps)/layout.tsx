import { SiteHeader } from "@/components/site-header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-between p-1 space-y-6 min-h-dvh">
      <SiteHeader />
      {children}
    </div>
  );
}
