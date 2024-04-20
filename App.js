import React from "react";
import { View, Text, Image, ScrollView, TextInput, Button } from "react-native";
import { RNCamera } from "react-native-camera";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Home";
import Profile from "./Profile";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Welcome" }}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const HomeScreen = ({ navigation }) => {
  return (
    <Button
      title="Go to Jane's profile"
      onPress={() => navigation.navigate("Profile", { name: "Jane" })}
    />
  );
};
const ProfileScreen = ({ navigation, route }) => {
  return <Home />;
};
