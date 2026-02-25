import { Hero, Services, About, RecentWork, Contact, Footer, SoupBackground } from "@/components";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col">
      {/* Interactive soup background */}
      <SoupBackground />

      {/* Hero with blobs in front */}
      <Hero />

      {/* Main content above blobs */}
      <main className="relative z-10 flex-1">
        <Services />
        <About />
        <RecentWork />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
