'use client';

import { Play, Pause } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

type AudioPlayerProps = {
  isPlaying: boolean;
  onToggle: () => void;
};

export default function AudioPlayer({ isPlaying, onToggle }: AudioPlayerProps) {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
      className="fixed bottom-5 right-5 z-50"
    >
      <Button
        size="icon"
        onClick={onToggle}
        className="rounded-full w-12 h-12 bg-primary/80 backdrop-blur-sm text-primary-foreground hover:bg-primary"
        aria-label={isPlaying ? 'Pause music' : 'Play music'}
      >
        {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
      </Button>
    </motion.div>
  );
}
