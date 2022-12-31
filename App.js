import React, { useEffect, useState } from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/layout/theme";
import { useFonts, Oswald_400Regular } from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import Navigation from "./src/layout/navigation";
import { AuthContextProvider } from "./src/services/auth/AuthContext";

export default function App() {
  let [oswaldLoaded] = useFonts({
    Oswald_400Regular,
  });

  let [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthContextProvider>
          <Navigation />
        </AuthContextProvider>
      </ThemeProvider>

      <ExpoStatusBar style="auto" />
    </>
  );
}
