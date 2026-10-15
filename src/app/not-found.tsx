import Link from 'next/link';
import { Dumbbell, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#0a0b0e] text-white flex flex-col items-center justify-center px-4 py-16">
      <div className="relative flex flex-col items-center text-center space-y-6 max-w-lg mx-auto">
        
        {/* Glow Background Effect */}
        <div className="absolute w-48 h-48 bg-[#befe00]/10 rounded-full blur-3xl animate-pulse pointer-events-none" />

        {/* 404 Big Display & Icon */}
        <div className="relative flex flex-col items-center">
          <span className="text-8xl md:text-9xl font-black text-neutral-800 tracking-tighter select-none">
            404
          </span>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-2xl bg-[#13151c] border border-neutral-800 flex items-center justify-center shadow-2xl shadow-[#befe00]/10">
            <Dumbbell className="w-8 h-8 text-[#befe00] transform -rotate-45" />
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-3 relative z-10">
          <h1 className="text-2xl md:text-3xl font-black tracking-wider uppercase">
            WORKOUT <span className="text-[#befe00]">NOT FOUND</span>
          </h1>
          <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
            Looks like this set got dropped or the page you are looking for doesn&apos;t exist in our workout library.
          </p>
        </div>

        {/* Action Button */}
        <div className="pt-4 relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2.5 bg-[#befe00] hover:bg-[#aee600] text-black font-extrabold px-6 py-3.5 rounded-xl text-sm tracking-wide transition-all shadow-lg shadow-[#befe00]/10"
          >
            <ArrowLeft className="w-4 h-4" />
            BACK TO HOME
          </Link>
        </div>

      </div>
    </main>
  );
}