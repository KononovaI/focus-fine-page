import Header from '@/components/Header';
import Hero from '@/components/Hero';
import VideoPlayer from '@/components/VideoPlayer';
import DownloadSection from '@/components/DownloadSection';
import NewsletterForm from '@/components/NewsletterForm';
import ContactForm from '@/components/ContactForm';
import TeamSection from '@/components/TeamSection';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <LanguageSwitcher />
      <Hero />
      <VideoPlayer />
      <DownloadSection />
      <NewsletterForm />
      <ContactForm />
      {/* <TeamSection /> */}
      <Footer />
    </main>
  );
}
