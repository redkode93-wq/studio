import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { Heart } from 'lucide-react';

const groomImage = PlaceHolderImages.find(p => p.id === 'groom-photo');
const brideImage = PlaceHolderImages.find(p => p.id === 'bride-photo');

export default function CoupleInfo() {
  return (
    <div className="bg-secondary w-full py-16 md:py-24">
      <div className="container mx-auto max-w-5xl px-4">
        <p className="text-center text-muted-foreground mb-4">
          Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud menyelenggarakan pernikahan putra-putri kami:
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 text-center">
          {/* Groom */}
          <div className="flex flex-col items-center gap-4">
            <Card className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden shadow-lg border-4 border-white">
              <CardContent className="p-0">
                {groomImage && (
                  <Image
                    src={groomImage.imageUrl}
                    alt="Foto Mempelai Pria"
                    width={224}
                    height={224}
                    className="object-cover w-full h-full"
                    data-ai-hint={groomImage.imageHint}
                  />
                )}
              </CardContent>
            </Card>
            <div className="mt-2">
              <h3 className="font-headline text-4xl text-primary">Al-Malik</h3>
              <p className="mt-2 text-sm text-muted-foreground">Putra dari Bapak Fulan & Ibu Fulanah</p>
            </div>
          </div>
          
          <Heart className="w-10 h-10 text-primary/50 my-4 md:my-0" />

          {/* Bride */}
          <div className="flex flex-col items-center gap-4">
            <Card className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden shadow-lg border-4 border-white">
              <CardContent className="p-0">
                {brideImage && (
                  <Image
                    src={brideImage.imageUrl}
                    alt="Foto Mempelai Wanita"
                    width={224}
                    height={224}
                    className="object-cover w-full h-full"
                    data-ai-hint={brideImage.imageHint}
                  />
                )}
              </CardContent>
            </Card>
            <div className="mt-2">
              <h3 className="font-headline text-4xl text-primary">Basyar</h3>
              <p className="mt-2 text-sm text-muted-foreground">Putri dari Bapak Fulan & Ibu Fulanah</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
