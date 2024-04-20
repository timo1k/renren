import React from "react";
import { View, Text, Image, ScrollView, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons"; // Make sure to import Ionicons from Expo vector icons

import Camera from "./Camera"; // Import your Camera component

const Tab = createBottomTabNavigator();

const HomeScreen = ({ navigation }) => {
  const handleImagePress = () => {
    navigation.navigate('Camera');
  };

  return (
    <ScrollView>
      <Text style={{ fontSize: 24, textAlign: 'center', fontWeight: 'bold' }}>
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

const MainScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Camera"
        component={Camera}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="construct-outline" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainScreen;
