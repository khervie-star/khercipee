import { AntDesign } from "@expo/vector-icons";
import {
  View,
  ImageBackground,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import { RootStackParamList, RootStackScreenProps } from "../types";

const image = {
  uri: "https://res.cloudinary.com/nfttest/image/upload/v1674614912/kherviecee/onboardingBackground_a1n1v7.png",
};

export default function OnboardingScreen({
  navigation,
}: RootStackScreenProps<"Onboarding">) {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.background}>
        <View style={styles.overlay} />
        <View style={styles.topText}>
          <AntDesign name="star" size={18} color="white" />
          <Text style={styles.text}>
            <Text style={{ fontFamily: "Poppins_600SemiBold" }}> 60k+</Text>
            <Text> one word in bold</Text>
          </Text>
        </View>
        <View style={styles.bottomContainer}>
          <Text style={styles.bottomText}>Let’s Cooking</Text>
          <Text style={styles.bottomTextDescription}>
            Find best recipes for cooking
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Root", { screen: "Home" })}
          >
            <Text style={styles.buttonText}>Start cooking</Text>
            <AntDesign name="arrowright" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 60,
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  topText: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    gap: 16,
    paddingVertical: 16,
    paddingHorizontal: 32,
  },
  text: {
    fontSize: 18,
    color: "white",
    fontFamily: "Poppins_400Regular",
    marginLeft: 6,
  },
  bottomContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 20,
  },
  bottomText: {
    fontSize: 72,
    lineHeight: 84.2,
    color: "white",
    fontFamily: "Poppins_700Bold",
    textAlign: "center",
  },
  bottomTextDescription: {
    fontSize: 18,
    color: "white",
    fontFamily: "Poppins_400Regular",
    marginVertical: 40,
  },
  button: {
    backgroundColor: "#E23E3E",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    gap: 16,
    paddingVertical: 16,
    paddingHorizontal: 32,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontFamily: "Poppins_600SemiBold",
    marginRight: 12,
  },
});
