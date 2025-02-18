import { Pressable, StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>
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
    },
    link: {
      backgroundColor: "#1ED2AF",
      width: "50%",
      textAlign: "center",
      padding: 20,
    },
    linkText: {
      justifyContent: "center"
    }

})