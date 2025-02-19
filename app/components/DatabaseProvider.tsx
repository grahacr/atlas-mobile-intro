import * as SQLite from 'expo-sqlite';
import { Asset } from "expo-asset";
import * as FileSystem from "expo-file-system";
import React, { useEffect, useState, Suspense } from "react";
import { View, Platform } from "react-native";

async function loadDatabase() {
    const name = "activities.db";
    const dbPath = `${FileSystem.documentDirectory}SQLite/${name}`;
    const fileInfo = await FileSystem.getInfoAsync(dbPath);

    if (!fileInfo.exists) {
        const dbAsset = require("@/assets/" + name);
        const dbURI = Asset.fromModule(dbAsset).uri;
        await FileSystem.makeDirectoryAsync(
            `${FileSystem.documentDirectory}SQLite`,
            {intermediates: true}
        );
        await FileSystem.downloadAsync(dbURI, dbPath);
    }
}

function useDB() {
    const [loaded, setLoaded ] = useState(false);
    useEffect(() => {
        let isMounted = true;
        if (Platform.OS !== 'web') {
            loadDatabase()
            .then(() => setLoaded(true));
        } else {
            setLoaded(true);
        }
        return () => {
            isMounted = false;
        };
    }, []);
    return { loaded }
}

export function DatabaseProvider({ children }: {children: React.ReactNode}) {
    const { loaded } = useDB();
    if (!loaded) {
        return null;
    }
    if (Platform.OS !== 'web') {
        return (
            <Suspense fallback={<View></View>}>
                <SQLite.SQLiteProvider useSuspense databaseName="activities.db">
                    {children}
                </SQLite.SQLiteProvider>
            </Suspense>
            );
    }
    return <>{children}</>;
}
