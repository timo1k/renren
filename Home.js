import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = ({ navigation }) => {
  const screenWidth = Dimensions.get("window").width;

  const handleImagePress = () => {
    navigation.navigate("Camera");
  };
  const handleImagePress2 = () => {
    navigation.navigate("Video");
  };

  return (
    <ScrollView>
      <Text style={{ fontSize: 24, textAlign: "center", fontWeight: "bold" }}>
        {"\n"}
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

      <Image
        source={require("./assets/need5.png")}
        style={{ width: 422, height: 1000 }}
        resizeMode="contain"
      />
    </ScrollView>
  );
};

export default HomeScreen;
