import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Activity } from "@/hooks/use-activities";

export default function ActivityComponent({ activity }: { activity: Activity}) {
    return (
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
    );
}

const styles = StyleSheet.create({
    activityBox: {
        width: "100%",
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