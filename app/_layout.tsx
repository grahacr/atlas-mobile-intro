import { Stack } from "expo-router";
import { DatabaseProvider } from "./components/DatabaseProvider";
import ActivitiesProvider from "./components/ActivitiesProvider";
import { GestureHandlerRootView } from "react-native-gesture-handler";
export default function RootLayout() {
  return (
    <DatabaseProvider>
      <ActivitiesProvider>
        <GestureHandlerRootView>
      <Stack />;
      </GestureHandlerRootView>
      </ActivitiesProvider>
    </DatabaseProvider>
  ) 
}
