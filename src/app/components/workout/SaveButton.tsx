"use client";
import { WorkoutContext } from '@/app/context/FitContext';
import { IWorkout } from '@/app/types/fitness';
import { Bookmark } from 'lucide-react';
import { useContext } from 'react';
import { toast } from 'react-toastify';

const SaveButton = ({ workout }: { workout: IWorkout }) => {
    const context = useContext(WorkoutContext);
    const saveWorkOut = () => {
        if (!context) {
            return;
        }
        const { setSavedworkout } = context;
        // setSavedworkout([...savedworkout, workout]);
        let isAdded = false;
        setSavedworkout((prev) => {
            const alreadyExists = prev.some((item) => item.id === workout.id);
            if (alreadyExists) return prev;
            isAdded = true;
            return [...prev, workout];
        });
        if (isAdded) {
            toast("Your Workout Plan Saved For Later");
        }
    }
    return (
        <div>
            <button className="flex-1 sm:flex-initial bg-[#13151c] hover:bg-[#1a1d26] text-white border border-neutral-800 font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-2.5 transition-all cursor-pointer"
                onClick={saveWorkOut}>
                <Bookmark className="w-5 h-5 text-neutral-400" />
                Save for later
            </button>
        </div>
    );
};

export default SaveButton;