import { Pressable, StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";

export default function addActivity() {
  return (
    <View style={styles.container}>
    <Pressable style={styles.addLink}>
    <Text>Add Activity</Text>
        
    </Pressable>
      <Link href="/" replace style={styles.goHomeLink}>
      <Text style={styles.goHomeText}>Go Back</Text>
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
    addLink: {
        backgroundColor: "#1ED2AF",
        width: "50%",
        textAlign: "center",
        padding: 20,
      },
      goHomeLink: {
        backgroundColor: "#D00414",
        width: "50%",
        textAlign: "center",
        padding: 20,
        
      },
      goHomeText: {
        justifyContent: "center",
      }

})