
import { useActivities } from "@/hooks/use-activities";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { Link } from "expo-router";
import { FlashList } from "@shopify/flash-list";
import Activity from "./components/Activity";

export default function Index() {
  const { activities, deleteActivities } = useActivities();

  const handleDeleteAll = () => {
    deleteActivities();
  };


  return (
    <View style={styles.container}>
      <View style={styles.list}>
        {activities.length > 0 ? (
          <FlashList
            renderItem={({ item }) => <Activity activity={item} />}
            data={activities}
            estimatedItemSize={70}
            />
        ) : (
          <Text style={styles.noActivities}>Activities cleared</Text>
        )}
        </View>

        <View style={styles.buttonContainer}>
          <Link href="/add-activity" replace style={styles.link}>
            <Text style={styles.linkText}>Add Activity</Text>
          </Link>

          <Pressable onPress={handleDeleteAll} style={styles.deleteButton}>
            <Text style={styles.linkText}>Delete All Activities</Text>
          </Pressable>
        </View>
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
      padding: 8,
      marginTop: 8,
    },
    listStyle: {
      padding: 8,
    },
    buttonContainer: {
      width: "100%",
      marginTop: 5,
      paddingBottom: 40,
    },
    link: {
      backgroundColor: "#1ED2AF",
      width: "100%",
      textAlign: "center",
      padding: 18,
    },
    linkText: {
      justifyContent: "center",
      color: "#fff",
      textAlign: "center",
      padding: 9,
    },
    deleteButton: {
      backgroundColor: "#D00414",
      width: "100%",
      padding: 9,
    },
    noActivities: {
      fontSize: 18,
    },
})
