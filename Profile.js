import React from "react";
import { View, Image, ScrollView, StyleSheet, Dimensions, Text } from "react-native";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const Profile = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.content}>
          <Image
            source={require("./assets/need.png")}
            style={{
              width: screenWidth,
              height: screenHeight, // Set the height to the screen height
              resizeMode: "contain",
            }} 
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start", // Align content at the top
    alignItems: "center",
  },
  content: {
    marginTop: 0, // Ensure the image starts from the top of the phone
    alignItems: "center",
  }
});

export default Profile;
