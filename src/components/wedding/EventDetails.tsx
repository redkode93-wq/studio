import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, MapPin } from "lucide-react";

export default function EventDetails() {
  return (
    <div className="container mx-auto max-w-4xl px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
        {/* Akad Nikah */}
        <Card className="shadow-lg transform hover:scale-105 transition-transform duration-300">
          <CardHeader>
            <CardTitle className="font-headline text-4xl text-primary">Akad Nikah</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-primary" />
              <span>Sabtu, 31 Desember 2024</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-primary" />
              <span>10:00 WIB</span>
            </div>
            <div className="flex items-center gap-3 text-left">
              <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
              <span>Masjid Istiqlal, Jakarta Pusat</span>
            </div>
          </CardContent>
        </Card>

        {/* Resepsi */}
        <Card className="shadow-lg transform hover:scale-105 transition-transform duration-300">
          <CardHeader>
            <CardTitle className="font-headline text-4xl text-primary">Resepsi</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-primary" />
              <span>Sabtu, 31 Desember 2024</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-primary" />
              <span>19:00 WIB - Selesai</span>
            </div>
            <div className="flex items-center gap-3 text-left">
              <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
              <span>Gedung Balai Kartini, Jakarta Selatan</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
