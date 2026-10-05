import Hero from '@/components/Hero';
import Models from '@/components/Models';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import QuoteSection from '@/components/QuoteSection';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      <Hero />
      <Models />
      <Services />
      <Projects />
      <QuoteSection />
    </main>
  );
}
