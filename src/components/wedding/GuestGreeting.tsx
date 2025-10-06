'use client';

import { useSearchParams } from 'next/navigation';

export default function GuestGreeting() {
  const searchParams = useSearchParams();
  const guestName = searchParams.get('to');

  return (
    <div>
      <p className="text-lg">Kepada Yth. Bapak/Ibu/Saudara/i</p>
      {guestName && (
        <p className="text-2xl font-bold mt-1">{guestName}</p>
      )}
    </div>
  );
}
