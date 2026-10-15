"use client";
import React, { createContext, ReactNode, useState } from 'react';
import { IWorkout } from '../types/fitness';
interface WorkoutContextType {
  savedworkout: IWorkout[];
  setSavedworkout: React.Dispatch<React.SetStateAction<IWorkout[]>>;
  todayPlanWorkout: IWorkout[];
  setTodayPlanWorkout: React.Dispatch<React.SetStateAction<IWorkout[]>>;
}
export const WorkoutContext = createContext<WorkoutContextType | null>(null);
const FitProvider = ({ children }: { children: ReactNode }) => {
    const [savedworkout, setSavedworkout] = useState<IWorkout[]>([]);
    const [todayPlanWorkout, setTodayPlanWorkout] = useState<IWorkout[]>([]);

    const sharedData = {
        savedworkout,
        setSavedworkout,
        todayPlanWorkout,
        setTodayPlanWorkout,
    }
    return (
        <WorkoutContext.Provider value={sharedData}>{children}</WorkoutContext.Provider>
    );
};

export default FitProvider;