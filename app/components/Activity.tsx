import { StyleSheet, Text, View } from "react-native";
import { Activity } from "@/hooks/use-activities";
import Swipeable from "react-native-gesture-handler/ReanimatedSwipeable";

type ActivityProps = {
  activity: Activity;
  deleteActivity: (id: number) => void;
};

export default function ActivityComponent({ activity, deleteActivity }: ActivityProps) {

    // action button for handling swipeable options, left or right
    const Action = ({ text, onPress }: { text: string, onPress: () => void }) => (
      <View style={styles.actionView}>
        <Text style={styles.actionText} onPress={onPress}>{text}</Text>
      </View>
    );

  const handleDeleteOne = () => {
    deleteActivity(activity.id);
  };

  return (
    <View key={activity.id} style={styles.activityBox}>
      <Swipeable
        renderLeftActions={() => (
          <Action text="Delete" onPress={handleDeleteOne} />
        )}
        >
          <View style={styles.activityDateContainer}>
            <Text style={styles.activityDate}>
              {new Date(activity.date).toLocaleDateString()}
            </Text>
            <Text style={styles.activityTime}>
              {new Date(activity.date).toLocaleTimeString()}
            </Text>
          </View>
        <Text style={styles.stepsNumber}>Steps: {activity.steps}</Text>
        </Swipeable>
      </View>
      );
}

const styles = StyleSheet.create({
  actionView: {
    backgroundColor: "#D00414",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    width: 80,
  },
  actionText: {
    color: "#fff",
    textAlign: "center",
  },
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