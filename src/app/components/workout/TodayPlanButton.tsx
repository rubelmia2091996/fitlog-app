"use client";
import { WorkoutContext } from '@/app/context/FitContext';
import { IWorkout } from '@/app/types/fitness';
import { Calendar } from 'lucide-react';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const TodayPlanButton = ({ workout }: { workout: IWorkout }) => {
    const context = useContext(WorkoutContext);
    const todayWorkOutPlan = () => {
        if (!context) {
            return;
        }
        // const { todayPlanWorkout, setTodayPlanWorkout } = context;
        const { setTodayPlanWorkout } = context;
        // setTodayPlanWorkout([...todayPlanWorkout, workout]);
        let isAdded = false;
        setTodayPlanWorkout((prev) => {
            const alreadyExists = prev.some(
                (item) => item.id === workout.id
            );
            if (alreadyExists) return prev;
            isAdded = true;
            
            return [...prev, workout];
        });
        if (isAdded) {
            toast("Your Workout Plan Saved in Today's plan");
        }
    }
    return (
        <div>
            <button className="flex-1 bg-[#befe00] hover:bg-[#aee600] text-black font-extrabold py-4 px-6 rounded-xl flex items-center justify-center gap-2.5 transition-all shadow-lg shadow-[#befe00]/10 cursor-pointer"
                onClick={todayWorkOutPlan}>
                <Calendar className="w-5 h-5" />
                Add to today&apos;s plan
            </button>
        </div>
    );
};

export default TodayPlanButton;