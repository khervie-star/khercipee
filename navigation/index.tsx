/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { CurvedBottomBar } from "react-native-curved-bottom-bar";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import {
  Alert,
  Animated,
  ColorSchemeName,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";

import NotFoundScreen from "../screens/NotFoundScreen";

import TabTwoScreen from "../screens/TabTwoScreen";
import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from "../types";
import LinkingConfiguration from "./LinkingConfiguration";
import OnboardingScreen from "../screens/OnboardingScreen";
import HomeScreen from "../screens/MainRouting/HomeScreen";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import AllNotificationsScreen from "../screens/MainRouting/Notifications/AllBotificationsScreen";
import ReadNotificationsScreen from "../screens/MainRouting/Notifications/ReadNotificationsScreen";
import UnreadNotificationsScreen from "../screens/MainRouting/Notifications/UnreadNootificationsScreen";
import { Poppins_600SemiBold } from "@expo-google-fonts/poppins";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer linking={LinkingConfiguration}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Onboarding"
        component={OnboardingScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Root"
        component={CurvedBottomTabNavigation}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={
        {
          // tabBarActiveTintColor: Colors[colorScheme].tint,
        }
      }
    >
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }: RootTabScreenProps<"Home">) => ({
          title: "Home",
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        })}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoScreen}
        options={{
          title: "Tab Two",
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}

const CurvedBottomTabNavigation = () => {
  const _renderIcon = (routeName: string, selectedTab: string) => {
    let icon = "";

    switch (routeName) {
      case "Home":
        icon = "home-minus-outline";
        break;
      case "Discover":
        icon = "bookmark-minus-outline";
        break;
      case "Notifications":
        icon = "bell-outline";
        break;
      case "Profile":
        icon = "account-outline";
        break;
    }

    return (
      <MaterialCommunityIcons
        name={icon}
        size={25}
        color={routeName === selectedTab ? "#E23E3E" : "#c1c1c1"}
      />
    );
  };
  const renderTabBar = ({ routeName, selectedTab, navigate }: any) => {
    return (
      <TouchableOpacity
        onPress={() => navigate(routeName)}
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {_renderIcon(routeName, selectedTab)}
      </TouchableOpacity>
    );
  };

  return (
    <CurvedBottomBar.Navigator
      style={styles.bottomBar}
      strokeWidth={0.5}
      strokeColor="#dddddd"
      height={55}
      circleWidth={55}
      bgColor="white"
      initialRouteName="Home"
      borderTopLeftRight
      renderCircle={({ selectedTab, navigate }) => (
        <Animated.View style={styles.btnCircle}>
          <TouchableOpacity
            style={{
              flex: 1,
              justifyContent: "center",
            }}
            onPress={() => Alert.alert("Click Action")}
          >
            <MaterialCommunityIcons name={"plus"} color="white" size={25} />
          </TouchableOpacity>
        </Animated.View>
      )}
      tabBar={renderTabBar}
    >
      <CurvedBottomBar.Screen
        name="Home"
        position="LEFT"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <CurvedBottomBar.Screen
        name="Discover"
        position="LEFT"
        component={HomeScreen}
      />
      <CurvedBottomBar.Screen
        name="Notifications"
        position="RIGHT"
        component={NotificationsTabNavigation}
      />
      <CurvedBottomBar.Screen
        name="Profile"
        component={NotificationsTabNavigation}
        position="RIGHT"
      />
    </CurvedBottomBar.Navigator>
  );
};

const NotificationsTab = createMaterialTopTabNavigator();

function NotificationsTabNavigation() {
  return (
    <NotificationsTab.Navigator
      initialRouteName="All"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "transparent",
          elevation: 0,
          marginVertical: 16,
        },
        tabBarLabelStyle: {
          fontSize: 16,
          lineHeight: 20,
          fontFamily: "Poppins_600SemiBold",
        },
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#EE8B8B",
        tabBarIndicatorStyle: {
          height: "100%",
          top: 0,
          backgroundColor: "#E23E3E",
          borderRadius: 10,
        },
      }}
    >
      <NotificationsTab.Screen name="All" component={AllNotificationsScreen} />
      <NotificationsTab.Screen
        name="Read"
        component={ReadNotificationsScreen}
      />
      <NotificationsTab.Screen
        name="Unread"
        component={UnreadNotificationsScreen}
      />
    </NotificationsTab.Navigator>
  );
}

export const styles = StyleSheet.create({
  button: {
    marginVertical: 5,
  },
  bottomBar: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  btnCircle: {
    width: 60,
    height: 60,
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E23E3E",
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
    bottom: 30,
  },
  imgCircle: {
    width: 30,
    height: 30,
    tintColor: "gray",
  },
  img: {
    width: 30,
    height: 30,
  },
});
