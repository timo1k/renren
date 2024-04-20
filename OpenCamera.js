import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import Video from "react-native-video";

const OpenCamera = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text>
        {"\n\n\n\n"}AUTOMATION _ NOTHING{"\n"}
      </Text>
      <Video
        source={require("./assets/fire4.mp4")}
        style={styles.video}
        controls={true}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  video: {
    width: "100%",
    height: 300, // Adjust height as needed
  },
});

export default OpenCamera;
