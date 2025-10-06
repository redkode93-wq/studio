'use client';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useToast } from '@/hooks/use-toast';
import { User, MessageSquare } from 'lucide-react';

const guestbookSchema = z.object({
  name: z.string().min(2, 'Nama minimal 2 karakter').max(50, 'Nama maksimal 50 karakter'),
  message: z.string().min(5, 'Pesan minimal 5 karakter').max(500, 'Pesan maksimal 500 karakter'),
});

type GuestbookEntry = z.infer<typeof guestbookSchema> & { date: string };

export default function Guestbook() {
  const [entries, setEntries] = useState<GuestbookEntry[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    const storedEntries = localStorage.getItem('guestbookEntries');
    if (storedEntries) {
      setEntries(JSON.parse(storedEntries));
    }
  }, []);

  const form = useForm<z.infer<typeof guestbookSchema>>({
    resolver: zodResolver(guestbookSchema),
    defaultValues: {
      name: '',
      message: '',
    },
  });

  const onSubmit = (values: z.infer<typeof guestbookSchema>) => {
    const newEntry: GuestbookEntry = {
      ...values,
      date: new Date().toISOString(),
    };
    const updatedEntries = [newEntry, ...entries];
    setEntries(updatedEntries);
    localStorage.setItem('guestbookEntries', JSON.stringify(updatedEntries));
    form.reset();
    toast({
        title: "Terima kasih!",
        description: "Ucapan Anda telah kami simpan.",
    })
  };

  return (
    <Card className="w-full shadow-xl">
      <CardHeader className="text-center">
        <CardTitle className="font-headline text-5xl md:text-6xl text-primary">Buku Tamu</CardTitle>
        <p className="text-muted-foreground pt-2">Kirimkan doa dan ucapan restu Anda kepada kami.</p>
      </CardHeader>
      <CardContent className="p-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nama Anda</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Pesan & Doa</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Tuliskan pesan dan doa Anda di sini..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">Kirim Ucapan</Button>
          </form>
        </Form>
        <div className="mt-8">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <MessageSquare className="w-5 h-5" />
                Ucapan ({entries.length})
            </h3>
            <ScrollArea className="h-72 w-full rounded-md border p-4">
                {entries.length > 0 ? (
                    <div className="space-y-4">
                    {entries.map((entry, index) => (
                        <div key={index} className="p-3 bg-secondary/50 rounded-lg">
                        <div className="flex items-center gap-2 font-bold">
                            <User className="w-4 h-4" />
                            {entry.name}
                        </div>
                        <p className="text-sm text-muted-foreground pl-6 mt-1">{entry.message}</p>
                        </div>
                    ))}
                    </div>
                ) : (
                    <p className="text-sm text-muted-foreground text-center py-8">Belum ada ucapan. Jadilah yang pertama!</p>
                )}
            </ScrollArea>
        </div>
      </CardContent>
    </Card>
  );
}
