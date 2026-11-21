import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function ContentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--background)] text-[var(--foreground)]">
      <SiteHeader variant="solid" />
      <main className="flex-grow">{children}</main>
      <SiteFooter />
    </div>
  );
}
