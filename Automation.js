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

const Automation = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <Text>{"\n\n\n\n"}</Text>
        <Text>{"\n\n\n\n"}</Text>
        <Text>{"\n\n\n\n"}</Text>
        <Text>{"\n\n\n\n"}</Text>
        <Text>{"\n\n\n\n"}</Text>
      </View>

      <View>
        <Image
          source={require("./assets/need2.png")}
          style={{
            width: screenWidth,
            aspectRatio: 4 / 3, // Set the aspect ratio of your image
            resizeMode: "contain", // Use 'contain' to fit the entire image within the width of the screen
          }}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Automation;
