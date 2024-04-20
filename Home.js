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
  const handleImagePress2 = () => {
    navigation.navigate("Video"); // Navigate to the 'Camera' screen
  };

  return (
    <ScrollView>
      <Text style={{ fontSize: 24, textAlign: "center", fontWeight: "bold" }}>
        {"\n"}Xfinity Home Explorer{"\n"}
      </Text>
      <TouchableOpacity onPress={handleImagePress}>
        <Text style={{ textAlign: "left", fontWeight: "bold" }}>
          Living Room {"\n"}
        </Text>
        <Image
          source={require("./assets/living.jpeg")}
          style={{ width: 430, height: 300 }}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleImagePress2}>
        <View>
          <Text style={{ textAlign: "left", fontWeight: "bold" }}>
            Outside {"\n"}
          </Text>
          <Image
            source={require("./assets/1425628.jpg")}
            style={{ width: 430, height: 300 }}
          />
        </View>
      </TouchableOpacity>

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
