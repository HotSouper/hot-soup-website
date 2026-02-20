import { Hero, Services, About, Contact, Footer, SoupBackground } from "@/components";

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
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
