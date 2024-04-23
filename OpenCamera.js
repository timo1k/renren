import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Button,
  TouchableOpacity,
} from "react-native";
import { ResizeMode } from "expo-av";
import VideoPlayer from "expo-video-player";

const OpenCamera = ({ navigation }) => {
  async function makeCall() {
    try {
      const response = await fetch(
        "https://s7dkaywo3bhmh7gcypxd4e7ley0ybsie.lambda-url.us-east-1.on.aws/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            // phoneNumber: "2674324401",
          }),
        }
      );

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text>
        {"\n\n\n\n"}
        <Button title="Go Back" onPress={() => navigation.goBack()} />
        {"\n"}
      </Text>
      <VideoPlayer
        videoProps={{
          shouldPlay: true,
          resizeMode: ResizeMode.CONTAIN,
          source: {
            uri: "https://firebasestorage.googleapis.com/v0/b/temple-trading-hub-tth.appspot.com/o/fire4.mp4?alt=media&token=4c6968b8-85d7-4428-a5ca-21592879aec8",
          },
        }}
      />
      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 20,
            paddingTop: 20,
          }}
        >
          <TouchableOpacity style={styles.roundedButton} onPress={() => {}}>
            <Text style={styles.buttonText}>Record Clip</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.roundedButton} onPress={() => {}}>
            <Text style={styles.buttonText}>Take Picture</Text>
          </TouchableOpacity>
        </View>
        <Text style={{ paddingHorizontal: 20, paddingTop: 20 }}>
          View saved in activity
        </Text>
        <Text style={{ paddingHorizontal: 20, paddingTop: 20 }}>
          Add 24/7 video recording{"\n"}
        </Text>
        <TouchableOpacity style={styles.roundedButton} onPress={() => {}}>
          <Text style={styles.buttonText}>Learn More</Text>
        </TouchableOpacity>
        <Text> {"\n\n"}</Text>
        <Button title="Call" onPress={() => makeCall()} />
        <Text> {"\n\n"}</Text>
      </View>
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
    height: 300,
  },
  roundedButton: {
    backgroundColor: "#007AFF",
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});

export default OpenCamera;
