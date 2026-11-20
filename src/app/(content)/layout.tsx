import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function ContentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-white text-stone-900 dark:bg-stone-950 dark:text-stone-100">
      <SiteHeader variant="solid" />
      <main className="flex-grow">{children}</main>
      <SiteFooter />
    </div>
  );
}
