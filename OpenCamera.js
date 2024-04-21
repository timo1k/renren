import React from "react";
import { View, Text, ScrollView, StyleSheet, Button } from "react-native";
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
            phoneNumber: "2674324401",
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
            uri: "https://firebasestorage.googleapis.com/v0/b/temple-trading-hub-tth.appspot.com/o/images%2Ffire4.mp4?alt=media&token=e160ad40-6739-4879-b1ca-f6fe95c2417c",
          },
        }}
      />
      <View>
        <Text>
          {"\n\n\n\n"}AUTOMATION _ NOTHING{"\n"}
        </Text>
        <Text>
          {"\n\n\n\n"}AUTOMATION _ NOTHING{"\n"}
        </Text>
        <Text>
          {"\n\n\n\n"}AUTOMATION _ NOTHING{"\n"}
        </Text>
        <Text>
          {"\n\n\n\n"}AUTOMATION _ NOTHING{"\n"}
        </Text>
        <Text>
          {"\n\n\n\n"}
          <Button title="Call" onPress={() => makeCall()} />
          {"\n"}
        </Text>
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
});

export default OpenCamera;
