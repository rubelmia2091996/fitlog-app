import { Suspense } from "react";
import Hero from "./components/homepage/Hero";
import WorkoutGrid from "./components/homepage/WorkoutGrid";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Suspense fallback={<div className="text-white text-center py-10">Loading workouts...</div>}>
        <WorkoutGrid />
      </Suspense>
    </div>
  );
}
