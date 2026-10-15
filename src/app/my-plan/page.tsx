"use client";

import React, { useContext, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
// Adjust path if needed
import { Clock, Flame, Star, X, Check, ArrowRight } from 'lucide-react';
import { WorkoutContext } from '../context/FitContext';
import { toast } from 'react-toastify';

export default function MyPlanPage() {
  const context = useContext(WorkoutContext);
  const [activeTab, setActiveTab] = useState<'today' | 'saved'>('today');
  const [sortBy, setSortBy] = useState<'duration' | 'calories' | 'rating'>('duration');
  const [completedWorkouts, setCompletedWorkouts] = useState<number[]>([]);

  if (!context) {
    return null;
  }

  const { todayPlanWorkout, setTodayPlanWorkout, savedworkout, setSavedworkout } = context;

  // Choose the active list based on the tab
  const currentList = activeTab === 'today' ? todayPlanWorkout : savedworkout;

  // Calculate stats for Today's Plan
  const totalExercises = todayPlanWorkout.length;
  const totalMinutes = todayPlanWorkout.reduce((acc, item) => acc + (item.duration || 0), 0);
  const totalCalories = todayPlanWorkout.reduce((acc, item) => acc + (item.caloriesBurned || 0), 0);

  // Remove handler
  const handleRemove = (id: number) => {
    if (activeTab === 'today') {
      setTodayPlanWorkout(prev => prev.filter(item => item.id !== id));
      toast("Your Workout Plan Removed From Today's Plan");
    } else {
      setSavedworkout(prev => prev.filter(item => item.id !== id));
      toast("Your Workout Plan Removed From Saved Plan");
    }
  };

  // Toggle Mark as Done
const toggleComplete = (id: number) => {
  let isCompleted = false;

  setCompletedWorkouts((prev) => {
    const exists = prev.includes(id);
    if (exists) {
      isCompleted = false;
      return prev.filter((item) => item !== id);
    } else {
      isCompleted = true;
      return [...prev, id];
    }
  });

  // Show different toast messages based on the toggle state
  if (isCompleted) {
    toast("Your workout plan marked as Done!");
  } else {
    toast("Workout marked as Incomplete");
  }
};

  // Sort logic
  const sortedList = [...currentList].sort((a, b) => {
    if (sortBy === 'duration') return b.duration - a.duration;
    if (sortBy === 'calories') return b.caloriesBurned - a.caloriesBurned;
    if (sortBy === 'rating') return b.rating - a.rating;
    return 0;
  });

  return (
    <main className="min-h-screen bg-[#0a0b0e] text-white px-4 py-10">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Header Section */}
        <div>
          <h1 className="text-3xl font-black uppercase tracking-tight mb-1">MY PLAN</h1>
          <p className="text-neutral-400 text-sm">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        {/* Top Summary Cards */}
        <div className="bg-[#13151c] border border-neutral-800 rounded-2xl p-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          <div className="border-b md:border-b-0 md:border-r border-neutral-800/80 pb-4 md:pb-0">
            <span className="text-neutral-500 text-xs font-semibold uppercase tracking-wider block mb-1">Exercises</span>
            <span className="text-3xl font-black text-[#befe00]">{totalExercises}</span>
          </div>
          <div className="border-b md:border-b-0 md:border-r border-neutral-800/80 pb-4 md:pb-0">
            <span className="text-neutral-500 text-xs font-semibold uppercase tracking-wider block mb-1">Minutes</span>
            <span className="text-3xl font-black text-white">{totalMinutes}</span>
          </div>
          <div>
            <span className="text-neutral-500 text-xs font-semibold uppercase tracking-wider block mb-1">Calories</span>
            <span className="text-3xl font-black text-white">{totalCalories}</span>
          </div>
        </div>

        {/* Tabs & Sort Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-neutral-800/60 pb-4">
          
          {/* Tab Buttons */}
          <div className="flex bg-[#13151c] p-1 rounded-xl border border-neutral-800 w-full sm:w-auto">
            <button
              onClick={() => setActiveTab('today')}
              className={`flex-1 sm:flex-initial px-6 py-2 rounded-lg text-xs font-bold uppercase transition-all ${
                activeTab === 'today'
                  ? 'bg-[#1a1d26] text-white shadow'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Today&apos;s Plan
            </button>
            <button
              onClick={() => setActiveTab('saved')}
              className={`flex-1 sm:flex-initial px-6 py-2 rounded-lg text-xs font-bold uppercase transition-all ${
                activeTab === 'saved'
                  ? 'bg-[#1a1d26] text-white shadow'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Saved
            </button>
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-2 text-xs text-neutral-400 w-full sm:w-auto justify-end">
            <span>Sort By</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-[#13151c] border border-neutral-800 rounded-xl px-3 py-2 text-white font-medium focus:outline-none cursor-pointer"
            >
              <option value="duration">Duration</option>
              <option value="calories">Calories</option>
              <option value="rating">Rating</option>
            </select>
          </div>

        </div>

        {/* Workout List or Empty State */}
        {sortedList.length === 0 ? (
          <div className="bg-[#13151c] border border-neutral-800 rounded-2xl p-16 text-center space-y-4">
            <h3 className="text-xl font-black uppercase tracking-wider text-white">
              NOTHING HERE YET
            </h3>
            <p className="text-neutral-400 text-sm max-w-sm mx-auto">
              Browse the library and add a lift to get today moving.
            </p>
            <div className="pt-2">
              <Link
                href="/"
                className="inline-flex items-center gap-2 bg-[#befe00] hover:bg-[#aee600] text-black font-extrabold px-6 py-3 rounded-xl text-xs uppercase tracking-wider transition-all shadow-lg shadow-[#befe00]/10"
              >
                Go to workouts
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {sortedList.map((workout) => {
              const isDone = completedWorkouts.includes(workout.id);
              return (
                <div
                  key={workout.id}
                  className="bg-[#13151c] border border-neutral-800 hover:border-neutral-700 transition-all rounded-2xl p-4 flex flex-col md:flex-row items-center justify-between gap-4 group"
                >
                  {/* Left Info: Thumbnail & Details */}
                  <div className="flex items-center gap-4 w-full md:w-auto">
                    <div className="relative w-24 h-16 rounded-xl overflow-hidden bg-neutral-900 flex-shrink-0">
                      <Image
                        src={workout.image}
                        alt={workout.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        loading="eager"
                      />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-sm md:text-base uppercase tracking-tight text-white mb-0.5">
                        {workout.name}
                      </h3>
                      <p className="text-neutral-400 text-xs mb-2">
                        {workout.equipment}
                      </p>
                      <div className="flex flex-wrap items-center gap-4 text-xs text-neutral-300">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-neutral-500" />
                          {workout.duration} min
                        </span>
                        <span className="flex items-center gap-1">
                          <Flame className="w-3.5 h-3.5 text-[#befe00]" />
                          {workout.caloriesBurned} kcal
                        </span>
                        <span className="flex items-center gap-1">
                          <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                          {workout.rating}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right Actions: View Details, Mark as Done, Remove */}
                  <div className="flex items-center gap-3 w-full md:w-auto justify-end">
                    <Link
                      href={`/workouts/${workout.id}`}
                      className="px-4 py-2 rounded-xl border border-neutral-700 text-xs font-semibold text-neutral-300 hover:text-white hover:bg-neutral-800/50 transition-all"
                    >
                      View Details
                    </Link>

                    {activeTab === 'today' && (
                      <button
                        onClick={() => toggleComplete(workout.id)}
                        className={`px-4 py-2 rounded-xl text-xs font-extrabold flex items-center gap-1.5 transition-all cursor-pointer ${
                          isDone
                            ? 'bg-neutral-800 text-neutral-400 border border-neutral-700'
                            : 'bg-[#befe00] hover:bg-[#aee600] text-black shadow-md shadow-[#befe00]/10'
                        }`}
                      >
                        <Check className="w-3.5 h-3.5" />
                        {isDone ? 'Done' : 'Mark as Done'}
                      </button>
                    )}

                    <button
                      onClick={() => handleRemove(workout.id)}
                      className="p-2 text-neutral-500 hover:text-red-400 transition-colors cursor-pointer"
                      title="Remove workout"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </main>
  );
}