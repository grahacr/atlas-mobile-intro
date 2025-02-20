import { useActivities } from "@/hooks/use-activities";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  const {activities} = useActivities();
  return (
    <View style={styles.container}>
      {activities.map((activity) => (
        <View key={activity.id} style={styles.activityBox}>
          <View style={styles.activityDateContainer}>
          <Text style={styles.activityDate}>
            {" "}{new Date(activity.date).toLocaleDateString()},
          </Text>
          <Text style={styles.activityTime}>
            {" "}{new Date(activity.date).toLocaleTimeString()}
          </Text>
          </View>
          <Text style={styles.stepsNumber}>Steps: {activity.steps}</Text>
        </View>
      ))}
      <Link href="/add-activity" replace style={styles.link}>
      <Text style={styles.linkText}>Add Activity</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FEF9E6"
    },
    link: {
      backgroundColor: "#1ED2AF",
      width: "50%",
      textAlign: "center",
      padding: 20,
      marginTop: 20,
    },
    linkText: {
      justifyContent: "center"
    },
    activityBox: {
      width: "50%",
      borderWidth: 2,
      borderColor: "#888",
      margin: 3,
    },
    activityDateContainer: {
      flexDirection: "row",
    },
    activityDate: {
      fontSize: 5,
      color: "#888",
    },

    activityTime: {
      fontSize: 5,
      color: "#888",
    },
    stepsNumber: {
      fontSize: 10,
      fontWeight: "bold",
      padding: 2,
    }


})
