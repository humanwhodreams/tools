import { SiteHeader } from "@/components/site-header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-1 space-y-6">
      <SiteHeader />
      {children}
    </div>
  );
}
