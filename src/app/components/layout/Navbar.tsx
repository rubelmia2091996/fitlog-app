"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useContext } from 'react';
import { WorkoutContext } from '@/app/context/FitContext';

export default function Navbar() {
    const context = useContext(WorkoutContext);
    if (!context) {
        return;
    }
    const {savedworkout,todayPlanWorkout} = context;
    const savedworkoutCount = savedworkout.length;
    const todayPlanWorkoutCount = todayPlanWorkout.length;
    return (
        <header className="w-full bg-[#0c0d12] border-b border-neutral-900 px-6 py-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2.5 group">
                    <div className="w-8 h-8 rounded bg-[#befe00]/10 flex items-center justify-center text-[#befe00]">
                        <Image
                            src="/logo.png"
                            alt="Picture of the author"
                            width={20}
                            height={20}
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            loading="eager"
                        />
                    </div>
                    <span className="text-white font-black tracking-wider text-lg">FITLOG</span>
                </Link>

                {/* Navigation Links */}
                <nav className="hidden md:flex items-center gap-2">
                    <Link
                        href="/"
                        className="px-4 py-2 rounded-full bg-[#161922] text-[#befe00] text-sm font-medium border border-neutral-800"
                    >
                        Workouts
                    </Link>
                    <Link
                        href="/my-plan"
                        className="px-4 py-2 rounded-full text-neutral-400 hover:text-white text-sm font-medium transition-colors"
                    >
                        My Plan
                    </Link>
                </nav>

                {/* Right Badges */}
                <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-2 text-neutral-300">
                        <span>Plan</span>
                        <span className="w-6 h-6 rounded-full bg-[#befe00] text-black font-bold text-xs flex items-center justify-center">
                            {todayPlanWorkoutCount}
                        </span>
                    </div>
                    <div className="flex items-center gap-2 text-neutral-300">
                        <span>Saved</span>
                        <span className="w-6 h-6 rounded-full border border-neutral-700 text-neutral-400 font-bold text-xs flex items-center justify-center">
                            {savedworkoutCount}
                        </span>
                    </div>
                </div>
            </div>
        </header>
    );
}