import { useSQLiteContext } from "expo-sqlite";
import { useState, useEffect } from "react";

type Activity = {
    id: number;
    steps: number;
    date: number;
}
export function useActivities() {
    const [ activities, setActivities ] = useState<Activity[]>([]);
    const db = useSQLiteContext();

    function getActivities() {
        return db.getAllSync<Activity>("SELECT * FROM activities");
    }

    useEffect(() => {
        const data = getActivities();
        setActivities(data);
    }, [])

    return { getActivities, activities };
}