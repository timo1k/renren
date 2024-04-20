// Import necessary modules
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons"; // Assuming you're using Expo, if not, use appropriate icons library

// Import your screens for Overview, Activity, Automation, and More
// import OverviewScreen from "./screens/OverviewScreen";
import Home from "./Home";
import Automation from "./Automation";
import Profile from "./Profile";
import Activity from "./Activity";
import Camera from "./Camera";
// import AutomationScreen from "./screens/AutomationScreen";
// import MoreScreen from "./screens/MoreScreen";

// Create a bottom tab navigator
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: "blue", // Change this to your preferred color
          inactiveTintColor: "gray", // Change this to your preferred color
        }}
      >
        <Tab.Screen
          name="Overview"
          component={Home}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home-outline" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Activity"
          component={Activity}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="file-tray-outline" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Automation"
          component={Automation}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="construct-outline" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="More"
          component={Profile}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons
                name="ellipsis-horizontal-circle-outline"
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Camera"
          component={Camera} // Use the imported CameraScreen component
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="image-outline" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
