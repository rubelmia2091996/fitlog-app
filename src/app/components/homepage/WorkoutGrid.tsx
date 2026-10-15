import { IWorkout } from '../../types/fitness';
import WorkoutGridCard from './WorkoutGridCard';

async function getWorkouts(): Promise<IWorkout[] | []> {
  try {
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog',{
        cache: "no-store"});
    if (!res.ok) {
      throw new Error('Failed to fetch workouts from API');
    }
    return res.json();
  } catch (error) {
    console.error('API fetch error, returning fallback sample data:', error);
    return [];
  }
}

 const WorkoutGrid = async ()=> {
  const workouts = await getWorkouts();
  return (
    <section className="w-full bg-[#0a0b0e] px-4 py-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
            THE LIBRARY
          </h2>
          <span className="text-white text-xs tracking-widest uppercase block mb-2">
            Twelve lifts covering every major muscle group
          </span>
        </div>

        {/* 3 Cards in a Row Grid View */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workouts.map((workout:IWorkout) => (
            <WorkoutGridCard key={workout.id} workout={workout}/>
          ))}
        </div>

      </div>
    </section>
  );
}

export default WorkoutGrid;