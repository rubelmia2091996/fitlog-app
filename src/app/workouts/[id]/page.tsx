import { Suspense } from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { IWorkout } from "@/app/types/fitness";
import TodayPlanButton from "@/app/components/workout/TodayPlanButton";
import SaveButton from "@/app/components/workout/SaveButton";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

async function getWorkout({id}: {id: string}): Promise<IWorkout | null> {
  const res = await fetch(`https://api.api-store.workers.dev/api/fitlog/${id}`, { cache: "no-store", });
  if (res.status === 404) {
    return null;
  }

  if (!res.ok) {
    throw new Error("Failed to fetch workout details");
  }

  return res.json();
}

export default function WorkoutDetailPage({ params }: PageProps) {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#0a0b0e] text-white flex items-center justify-center">
          <p>Loading workout...</p>
        </div>
      }
    >
      <WorkoutContent params={params} />
    </Suspense>
  );
}

async function WorkoutContent({ params }: PageProps) {
  const { id } = await params;
  const workout = await getWorkout({ id });

  if (!workout) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#0a0b0e] text-white px-4 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Image Card */}
        <div className="lg:col-span-5 relative w-full h-[400px] sm:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden bg-[#13151c] border border-neutral-800">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 42vw"
            loading="eager"
          />
        </div>

        {/* Right Column: Details & Instructions */}
        <div className="lg:col-span-7 flex flex-col space-y-6">
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight uppercase mb-3">
              {workout.name}
            </h1>

            <p className="text-neutral-400 text-base sm:text-lg leading-relaxed">
              {workout.description}
            </p>
          </div>

          {/* Muscle Group Tags */}
          <div className="flex flex-wrap gap-2">
            {workout.muscleGroups.map((muscle, idx) => (
              <span
                key={idx}
                className="bg-[#befe00] text-black font-extrabold text-xs px-3.5 py-1.5 rounded-full uppercase tracking-wider"
              >
                {muscle}
              </span>
            ))}
          </div>

          {/* Details Table Card */}
          <div className="bg-[#13151c] border border-neutral-800 rounded-2xl overflow-hidden divide-y divide-neutral-800/80 text-sm">
            <div className="flex justify-between items-center px-6 py-4">
              <span className="text-neutral-500 font-semibold tracking-wider text-xs">
                EQUIPMENT
              </span>
              <span className="text-neutral-200 font-medium">
                {workout.equipment}
              </span>
            </div>

            <div className="flex justify-between items-center px-6 py-4">
              <span className="text-neutral-500 font-semibold tracking-wider text-xs">
                DIFFICULTY
              </span>
              <span className="text-neutral-200 font-medium">
                {workout.difficulty}
              </span>
            </div>

            <div className="flex justify-between items-center px-6 py-4">
              <span className="text-neutral-500 font-semibold tracking-wider text-xs">
                SETS
              </span>
              <span className="text-neutral-200 font-medium">
                {workout.sets}
              </span>
            </div>

            <div className="flex justify-between items-center px-6 py-4">
              <span className="text-neutral-500 font-semibold tracking-wider text-xs">
                REPS
              </span>
              <span className="text-neutral-200 font-medium">
                {workout.reps}
              </span>
            </div>

            <div className="flex justify-between items-center px-6 py-4">
              <span className="text-neutral-500 font-semibold tracking-wider text-xs">
                DURATION
              </span>
              <span className="text-neutral-200 font-medium">
                {workout.duration} min
              </span>
            </div>

            <div className="flex justify-between items-center px-6 py-4">
              <span className="text-neutral-500 font-semibold tracking-wider text-xs">
                CALORIES
              </span>
              <span className="text-neutral-200 font-medium">
                {workout.caloriesBurned} kcal
              </span>
            </div>

            <div className="flex justify-between items-center px-6 py-4">
              <span className="text-neutral-500 font-semibold tracking-wider text-xs">
                RATING
              </span>
              <span className="text-neutral-200 font-medium">
                {workout.rating}
              </span>
            </div>
          </div>

          {/* Instructions Section */}
          <div className="space-y-4 pt-2">
            <h2 className="text-white font-extrabold text-sm tracking-widest uppercase">
              INSTRUCTIONS
            </h2>

            <ol className="space-y-3 text-neutral-400 text-sm sm:text-base leading-relaxed">
              {workout.instructions.map((step, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className="text-white font-bold">
                    {idx + 1}.
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <TodayPlanButton workout={workout} />
            <SaveButton workout={workout} />
          </div>
        </div>
      </div>
    </main>
  );
}