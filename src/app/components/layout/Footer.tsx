import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="w-full bg-[#0c0d12] border-t border-neutral-900 px-6 py-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">

                {/* Logo */}
                <Link href="/" className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded bg-[#befe00]/10 flex items-center justify-center text-[#befe00]">
                        <Image
                            src="/logo.png"
                            alt="Picture of the author"
                            width={20}
                            height={20}
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            loading="eager"
                        />
                    </div>
                    <span className="text-white font-black tracking-wider text-base">FITLOG</span>
                </Link>

                {/* Copyright Text */}
                <p className="text-neutral-500 text-xs md:text-sm">
                    © 2026 FitLog — Workout Library. Train hard, log honest.
                </p>

            </div>
        </footer>
    );
}