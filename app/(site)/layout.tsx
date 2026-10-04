import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function SiteLayout({ children }: LayoutProps<"/">) {
  return (
    <div className="sv mb flex min-h-screen flex-col">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
