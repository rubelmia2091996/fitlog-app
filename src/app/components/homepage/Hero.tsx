import Image from 'next/image';
import Link from 'next/link';

const Hero = () =>{
  return (
    <section className="w-full bg-[#0a0b0e] px-4 py-8 md:py-12">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#13151c] border border-neutral-800/80 rounded-3xl p-8 md:p-16 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Left Content */}
          <div className="max-w-2xl z-10">
            <span className="text-[#befe00] font-bold text-xs tracking-widest uppercase block mb-4">
              Workout Library
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-[1.1] mb-6">
              TRAIN WITH INTENT. LOG EVERY SET.
            </h1>
            <p className="text-neutral-400 text-base md:text-lg mb-8 leading-relaxed max-w-xl">
              FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today&apos;s plan, and watch the week&apos;s work add up.
            </p>
            <div>
              <Link
                href="/"
                className="inline-block bg-[#befe00] hover:bg-[#aee600] text-black font-extrabold px-8 py-4 rounded-xl text-sm tracking-wide transition-all shadow-lg shadow-[#befe00]/10"
              >
                BROWSE WORKOUTS
              </Link>
            </div>
          </div>

          {/* Right 3D / Illustration Image */}
          <div className="relative w-full lg:w-[450px] h-[320px] md:h-[380px] flex items-center justify-center">
            <Image
              src="/banner.png" 
              alt="Anatomical gym bicep curl illustration"
              fill
              className="object-contain"
              sizes="100vw"
              loading="eager"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
export default Hero;