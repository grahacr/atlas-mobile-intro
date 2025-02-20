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
        borderWidth: 3,
        borderColor: "#888",
        marginBottom: 2,
        padding: 8,
      },
      activityDateContainer: {
        flexDirection: "row",
      },
      activityDate: {
        fontSize: 10,
        color: "#888",
      },
  
      activityTime: {
        fontSize: 10,
        color: "#888",
      },
      stepsNumber: {
        fontSize: 16,
        padding: 2,
      }
})