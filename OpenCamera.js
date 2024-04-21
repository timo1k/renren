import React from "react";
import { View, Text, ScrollView, StyleSheet, Button } from "react-native";
import { ResizeMode } from "expo-av";
import VideoPlayer from "expo-video-player";

const OpenCamera = ({ navigation }) => {
  const video = require("./assets/fire4.mp4");
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
          {"\n\n\n\n"}AUTOMATION _ NOTHING{"\n\n\n\n"}
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
    height: 300, // Adjust height as needed
  },
});

export default OpenCamera;
