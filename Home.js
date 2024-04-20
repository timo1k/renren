import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation hook
import Camera from "./Camera"; // Import your Camera component

const HomeScreen = ({ navigation }) => {
  const handleImagePress = () => {
    navigation.navigate("Camera"); // Navigate to the 'Camera' screen
  };

  return (
    <ScrollView>
      <Text style={{ fontSize: 24, textAlign: "center", fontWeight: "bold" }}>
        {"\n"}Xfinity Home Explorer{"\n"}
      </Text>
      <TouchableOpacity onPress={handleImagePress}>
        <Image
          source={require("./assets/frontButton.png")}
          style={{ width: 430, height: 400 }}
        />
      </TouchableOpacity>
      <View>
        <Image
          source={require("./assets/frontButton.png")}
          style={{ width: 430, height: 400 }}
        />
      </View>
      <Text>{"\n\n\n\n"}</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
        }}
        defaultValue="You can type"
      />
      <Text>{"\n\n\n\n"}</Text>
      <View></View>
    </ScrollView>
  );
};

export default HomeScreen;
