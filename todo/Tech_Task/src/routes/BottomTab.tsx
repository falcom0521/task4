import React from "react";
import { View, Animated, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Home from "../pages/home/Home";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let iconScale = new Animated.Value(1);

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          }

          // Scale animation
          Animated.spring(iconScale, {
            toValue: focused ? 1.2 : 1,
            useNativeDriver: true,
          }).start();

          return (
            <Animated.View style={{ transform: [{ scale: iconScale }] }}>
              <Ionicons name={iconName} size={size} color={color} />
            </Animated.View>
          );
        },
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: styles.tabBar,
      })}
    >
      <Tab.Screen
        options={{ headerShown: false }}
        name="Home"
        component={Home}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "#000", // Change this to your desired color
  },
});

export default MyTabs;
