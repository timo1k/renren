import React from "react";
import {
  View,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
  Text,
} from "react-native";

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
              height: screenHeight,
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
    justifyContent: "flex-start",
    alignItems: "center",
  },
  content: {
    marginTop: 0,
    alignItems: "center",
  },
});

export default Profile;
