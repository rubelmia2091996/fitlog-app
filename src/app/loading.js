import React from 'react';
import { Dumbbell } from 'lucide-react';

export default function Loading() {
  return (
    <div className="min-h-screen bg-[#0a0b0e] text-white flex flex-col items-center justify-center px-4">
      <div className="relative flex flex-col items-center space-y-6">
        
        {/* Pulsing Glow Background Effect (Neon Green) */}
        <div className="absolute w-36 h-36 bg-[#befe00]/15 rounded-full blur-2xl animate-pulse pointer-events-none" />

        {/* Animated Brand Icon / Spinner Box */}
        <div className="relative w-16 h-16 rounded-2xl bg-[#13151c] border border-neutral-800 flex items-center justify-center shadow-xl shadow-[#befe00]/5 group">
          <Dumbbell className="w-8 h-8 text-[#befe00] animate-bounce" />
        </div>

        {/* Loading Text & Branding */}
        <div className="text-center space-y-2 relative z-10">
          <h2 className="text-xl font-black tracking-wider text-white uppercase">
            LOADING <span className="text-[#befe00]">FITLOG</span>...
          </h2>
          <p className="text-sm text-neutral-400 font-medium max-w-xs">
            Locking in workouts and setting up your plan.
          </p>
        </div>

        {/* Bouncing Progress Dots */}
        <div className="flex space-x-2 pt-2">
          <div className="w-2.5 h-2.5 bg-[#befe00] rounded-full animate-bounce [animation-delay:-0.3s]" />
          <div className="w-2.5 h-2.5 bg-[#befe00] rounded-full animate-bounce [animation-delay:-0.15s]" />
          <div className="w-2.5 h-2.5 bg-[#befe00] rounded-full animate-bounce" />
        </div>

      </div>
    </div>
  );
}