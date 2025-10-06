import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card } from '@/components/ui/card';

const galleryImagesIds = ['gallery-1', 'gallery-2', 'gallery-3', 'gallery-4', 'gallery-5'];
const galleryImages = PlaceHolderImages.filter(p => galleryImagesIds.includes(p.id));

export default function Gallery() {
  return (
    <div className="container mx-auto">
       <h2 className="font-headline text-5xl md:text-6xl text-primary text-center mb-8">Momen Bahagia</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {galleryImages.map((image, index) => (
          <Card key={image.id} className={`overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300 ${index === 2 ? 'md:col-span-2' : ''} ${index === 1 ? 'md:row-span-2' : ''}`}>
            {image && (
              <Image
                src={image.imageUrl}
                alt={image.description}
                width={index === 1 ? 400 : 600}
                height={index === 1 ? 600 : 400}
                className="w-full h-full object-cover"
                data-ai-hint={image.imageHint}
              />
            )}
          </Card>
        ))}
         <Card className="col-span-2 md:col-span-2 shadow-lg overflow-hidden">
            <div className="aspect-w-16 aspect-h-9">
              <iframe 
                src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
        </Card>
      </div>
    </div>
  );
}
