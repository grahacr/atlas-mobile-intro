
import { useSQLiteContext } from "expo-sqlite";
import { useState, useEffect } from "react";
import { Alert } from "react-native";

export type Activity = {
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

    function insertActivity(steps: number, date: Date) {
        db.execSync(`INSERT INTO activities (steps, date) VALUES (${steps}, ${date.getTime()})`);
        reLoad();
    }

    function deleteActivities() {
        db.execSync("DELETE FROM activities");
        reLoad();
    }

    function reLoad() {
        const data = getActivities();
        console.log("activities loaded:", data);
        setActivities(data);
    }

    useEffect(() => {
        reLoad();
    }, []);

    return { getActivities, activities, insertActivity, deleteActivities };
}