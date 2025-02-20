
import { useActivities } from "@/hooks/use-activities";
import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import { FlashList } from "@shopify/flash-list";
import Activity from "./components/Activity";

export default function Index() {
  const {activities} = useActivities();
  return (
    <View style={styles.container}>
      <View style={styles.list}>
      <FlashList
        renderItem={({ item }) => <Activity activity={item} /> }
        data={activities}
        estimatedItemSize={70}
        />
        </View>
        <Link href="/add-activity" replace style={styles.link}>
          <Text style={styles.linkText}>Add Activity</Text>
        </Link>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "#FEF9E6"
    },
    list: {
      flex: 1,
      width: "100%",
    },
    link: {
      backgroundColor: "#1ED2AF",
      width: "50%",
      textAlign: "center",
      padding: 10,
    },
    linkText: {
      justifyContent: "center"
    },
})
