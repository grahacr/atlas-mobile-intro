import React, { createContext, useContext } from "react";
import { useActivities } from "@/hooks/use-activities";

const ActivitiesContext = createContext<ReturnType<typeof useActivities>>({
    activities: [],
    getActivities: () => [],
    insertActivity: () => {},
    deleteActivities: () => [],
});

export const useActivitiesContext = () => useContext(ActivitiesContext);

export function ActivitiesProvider({ children }: { children: React.ReactNode}) {
    const activities = useActivities();
    return (
    <ActivitiesContext.Provider value={activities}>
        {children}
        </ActivitiesContext.Provider>
    );
}