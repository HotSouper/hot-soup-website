import { Hero, Services, About, Contact, Footer, SoupBackground } from "@/components";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col">
      {/* Interactive soup background */}
      <SoupBackground />

      {/* Main content */}
      <main className="relative z-10 flex-1">
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
