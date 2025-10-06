import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

export default function LocationMap() {
  const googleMapsUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.011894420845!2d106.8282763153434!3d-6.262106995465985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3b584a8da9b%3A0x19454b4235418196!2sBalai%20Kartini!5e0!3m2!1sen!2sid!4v1622530111162!5m2!1sen!2sid";

  return (
    <Card className="w-full shadow-xl overflow-hidden">
        <CardHeader className="text-center">
            <CardTitle className="font-headline text-5xl md:text-6xl text-primary">Lokasi Acara</CardTitle>
            <p className="text-muted-foreground pt-2">Gedung Balai Kartini, Jakarta Selatan</p>
        </CardHeader>
        <CardContent className="p-0 md:p-6 md:pt-0">
            <div className="aspect-w-16 aspect-h-9 border-t md:border md:rounded-lg overflow-hidden">
            <iframe
                src={googleMapsUrl}
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            </div>
            <div className="p-6 md:p-0 text-center mt-4">
                <Button asChild>
                    <a href="https://maps.app.goo.gl/r6zT8q5J1jA7Cg8t9" target="_blank" rel="noopener noreferrer">
                        <MapPin className="mr-2 h-4 w-4" /> Buka di Google Maps
                    </a>
                </Button>
            </div>
      </CardContent>
    </Card>
  );
}
