import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, ImageBackground } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";

const image = {
  uri: "https://res.cloudinary.com/nfttest/image/upload/v1674614912/kherviecee/onboardingBackground_a1n1v7.png",
};

export default function OnboardingScreen2() {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={styles.title}>Modal</Text>
        <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />
        <EditScreenInfo path="/screens/ModalScreen.tsx" />
      </ImageBackground>

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
