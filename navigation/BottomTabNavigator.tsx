import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import Browse from "../screens/Browse";
import AlbumReview from "../screens/AlbumReviewScreen";
import AlbumSongs from "../screens/AlbumSongsScreen";
import TabTwoScreen from "../screens/TabTwoScreen";
import { BottomTabParamList, TabOneParamList, TabTwoParamList } from "../types";
import { Album } from "../models/album";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Browse"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
    >
      <BottomTab.Screen
        name="Browse"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-code" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-code" color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createSharedElementStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator
      screenOptions={{
        // gestureEnabled: false,
        headerShown: false,
        cardOverlayEnabled: true,
      }}
      mode="modal"
    >
      <TabOneStack.Screen
        name="Browse"
        component={Browse}
        options={{ headerTitle: "Browse" }}
      />
      <TabOneStack.Screen
        name="AlbumReview"
        component={AlbumReview}
        options={{ headerTitle: "Tab One Title" }}
        sharedElements={(route, otherRoute, showing) => {
          const { id } = route.params.album as Album;
          return [id];
        }}
      />
      <TabOneStack.Screen
        name="AlbumSongs"
        component={AlbumSongs}
        options={{ headerTitle: "Tab One Title" }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createSharedElementStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: "Tab Two Title" }}
      />
    </TabTwoStack.Navigator>
  );
}
