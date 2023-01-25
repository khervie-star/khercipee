import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";

import {
  useFonts,
  Poppins_700Bold,
  Poppins_600SemiBold,
  Poppins_400Regular,
} from "@expo-google-fonts/poppins";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  let [fontsLoaded] = useFonts({
    Poppins_700Bold,
    Poppins_600SemiBold,
    Poppins_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
