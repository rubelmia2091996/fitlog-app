import React from 'react';
import { IWorkout } from '../../types/fitness';
import Image from 'next/image';
import { Clock,Flame,Star } from 'lucide-react';
import Link from 'next/link';

const WorkoutGridCard = ({workout}: {workout:IWorkout}) => {
    return (
        <div>
              {/* Card Image Header */}
              <div className="relative w-full h-52 bg-neutral-900 overflow-hidden">
                <Image
                  src={workout.image}
                  alt={workout.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="eager"
                />
              </div>
                    
              {/* Card Body Content */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Muscle Group Badges */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {workout.muscleGroups.map((muscle, idx) => (
                    <span
                      key={idx}
                      className="bg-[#befe00] border border-neutral-800 text-black text-xs px-2.5 py-1 rounded-lg font-medium"
                    >
                      {muscle}
                    </span>
                  ))}
                </div>
                <Link href={`/workouts/${workout.id}`}>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#befe00] transition-colors">
                  {workout.name}
                </h3>
                
                </Link>
                <p className="text-neutral-400 text-sm line-clamp-2 mb-4 leading-relaxed">
                  {workout.equipment}
                </p>
                <hr className="border-gray-300 opacity-25" />
                {/* Quick Info Grid (Sets, Reps, Calories) */}
                <div className="mt-4 flex items-center justify-between text-neutral-400">
                    <span className="flex  text-white gap-2"><Clock />{workout.duration} min</span>
                    <span className="flex  text-white gap-2"><Flame /> {workout.caloriesBurned} kal</span>
                    <span className="flex  text-white gap-2"><Star /> {workout.rating}</span>
                </div>
              </div>

            </div>
    );
};

export default WorkoutGridCard;