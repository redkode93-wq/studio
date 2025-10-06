'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Mail } from 'lucide-react';
import GuestGreeting from './GuestGreeting';
import { Suspense } from 'react';
import { motion } from 'framer-motion';

type CoverProps = {
  onOpen: () => void;
};

const coverBgImage = PlaceHolderImages.find(p => p.id === 'cover-background');

export default function Cover({ onOpen }: CoverProps) {
  return (
    <motion.div 
      className="fixed inset-0 bg-background z-50 flex items-center justify-center"
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      <div className="absolute inset-0">
        {coverBgImage && (
          <Image
            src={coverBgImage.imageUrl}
            alt="Floral background"
            fill
            className="object-cover"
            priority
            data-ai-hint={coverBgImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      <motion.div 
        className="relative text-center text-white p-8 flex flex-col items-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
      >
        <p className="text-lg">The Wedding Of</p>
        <h1 className="font-headline text-6xl md:text-8xl my-4">Al & Basyar</h1>
        
        <div className="mt-8 mb-12 bg-white/20 backdrop-blur-sm p-4 rounded-lg">
          <Suspense fallback={<p className="text-lg">Kepada Yth. Bapak/Ibu/Saudara/i</p>}>
             <GuestGreeting />
          </Suspense>
        </div>

        <Button onClick={onOpen} size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg">
          <Mail className="mr-2 h-5 w-5" />
          Buka Undangan
        </Button>
      </motion.div>
    </motion.div>
  );
}
