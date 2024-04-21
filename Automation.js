import React from "react";
import {
  View,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
  Text,
  TextInput
} from "react-native";

const screenWidth = Dimensions.get("window").width;

const Automation = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <View>
          <Image
            source={require("./assets/need2.png")}
            style={{
              width: screenWidth,
              aspectRatio: 4 / 3,
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
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  }
});

export default Automation;
