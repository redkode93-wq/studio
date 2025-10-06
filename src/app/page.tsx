'use client';

import { Suspense, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import Cover from '@/components/wedding/Cover';
import Hero from '@/components/wedding/Hero';
import CoupleInfo from '@/components/wedding/CoupleInfo';
import EventDetails from '@/components/wedding/EventDetails';
import Gallery from '@/components/wedding/Gallery';
import LocationMap from '@/components/wedding/LocationMap';
import Quote from '@/components/wedding/Quote';
import Guestbook from '@/components/wedding/Guestbook';
import AudioPlayer from '@/components/wedding/AudioPlayer';

const Section = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <motion.section
    className={className}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.8, ease: 'easeOut' }}
  >
    {children}
  </motion.section>
);

export default function WeddingInvitationPage() {
  const [isCoverOpen, setCoverOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  
  const audioSrc = "https://cdn.pixabay.com/download/audio/2022/02/12/audio_33b6198647.mp3";

  const handleOpenInvitation = () => {
    setCoverOpen(true);
    if (audioRef.current) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(error => {
        console.error("Audio autoplay failed:", error);
        setIsPlaying(false);
      });
    }
  };

  const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="bg-background text-foreground font-body overflow-x-hidden">
      <audio ref={audioRef} src={audioSrc} loop />

      <AnimatePresence>
        { !isCoverOpen && <Cover onOpen={handleOpenInvitation} /> }
      </AnimatePresence>
      
      <AnimatePresence>
        {isCoverOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5, delay: 0.5 }}>
            <Suspense fallback={<div className="h-screen w-full flex items-center justify-center"><p>Loading...</p></div>}>
              <Hero />
            </Suspense>
            
            <main className="flex flex-col items-center gap-16 md:gap-24 pb-16 md:pb-24">
              <Section className="w-full">
                <CoupleInfo />
              </Section>
              <Section className="w-full">
                <EventDetails />
              </Section>
              <Section className="w-full">
                <Quote />
              </Section>
              <Section className="w-full max-w-7xl px-4">
                 <Gallery />
              </Section>
              <Section className="w-full max-w-7xl px-4">
                 <LocationMap />
              </Section>
              <Section className="w-full max-w-4xl px-4">
                 <Guestbook />
              </Section>
            </main>

            <footer className="text-center p-8 text-muted-foreground text-sm">
              <p className="font-headline text-lg">Al & Basyar</p>
              <p>Made with ♡ for our wedding day.</p>
            </footer>

            <AudioPlayer isPlaying={isPlaying} onToggle={toggleAudio} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
