import { Pressable, StyleSheet, Text, View, TextInput } from "react-native";
import { useState } from "react";
import { Link, router } from "expo-router";
import { useActivitiesContext } from "./components/ActivitiesProvider";

export default function addActivity() {
  const [steps, setSteps] = useState<number>(0);
  const {insertActivity} = useActivitiesContext();

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Add Activity</Text>
      <TextInput
      style={styles.textInput}
      placeholder="Enter steps"
      keyboardType="number-pad"
      onChangeText={(value) => setSteps(parseInt(value))} />

      <Pressable
      style={styles.addLink}
      onPress={() => {
        insertActivity(steps, new Date());
        router.push("/")
      }}>
        <Text style={styles.buttonText}>Add Activity</Text>
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
        paddingHorizontal: 20,
    },
    headerText: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 30,
    },

    textInput: {
      width: "100%",
      height: 50,
      borderColor: "00000",
      borderWidth: 3,
      paddingHorizontal: 10,
      marginBottom: 20,
    },

    addLink: {
      backgroundColor: "#1ED2AF",
      width: "100%",
      marginBottom: 10,
      alignItems: "center",
      padding: 15,
    },
    buttonText: {
      color: "#fff",
    },
    goHomeLink: {
      backgroundColor: "#D00414",
      width: "100%",
      textAlign: "center",
      padding: 20,
    },
    goHomeText: {
      justifyContent: "center",
      alignSelf: "center",
    },

});