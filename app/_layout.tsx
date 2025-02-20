import { Stack } from "expo-router";
import { DatabaseProvider } from "./components/DatabaseProvider";
import { ActivitiesProvider } from "./components/ActivitiesProvider";

export default function RootLayout() {
  return (
    <DatabaseProvider>
      <ActivitiesProvider>
      <Stack />;
      </ActivitiesProvider>
    </DatabaseProvider>
  ) 
}
