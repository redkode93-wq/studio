import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import CountdownTimer from './CountdownTimer';

const heroBgImage = PlaceHolderImages.find(p => p.id === 'hero-background');

export default function Hero() {
  return (
    <header className="relative h-screen flex flex-col items-center justify-center text-center text-white">
      {heroBgImage && (
        <Image
          src={heroBgImage.imageUrl}
          alt="Elegant floral background"
          fill
          className="object-cover"
          priority
          data-ai-hint={heroBgImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 p-4">
        <p className="text-lg md:text-xl tracking-widest uppercase">We Are Getting Married</p>
        <h1 className="font-headline text-7xl md:text-9xl my-4">Al & Basyar</h1>
        <p className="text-lg md:text-xl font-semibold">31 . 12 . 2024</p>
        <div className="mt-12">
          <CountdownTimer />
        </div>
      </div>
    </header>
  );
}
