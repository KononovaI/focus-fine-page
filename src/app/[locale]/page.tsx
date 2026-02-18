import Header from '@/components/Header';
import Hero from '@/components/Hero';
import VideoPlayer from '@/components/VideoPlayer';
import DownloadSection from '@/components/DownloadSection';
import NewsletterForm from '@/components/NewsletterForm';
import ContactForm from '@/components/ContactForm';

import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <VideoPlayer />
      <DownloadSection />
      <NewsletterForm />
      <ContactForm />

      <Footer />
    </main>
  );
}
