import { ActivityIndicator } from "react-native";
import * as Font from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthNavigation from "./src/navigation/authentication/AuthNavigation";
import { useState, useEffect } from "react";
import { ReadFromStorage } from "./src/assets/utils/appStorage";
import BottomStackNavigation from "./src/navigation/authentication/ButtomStacknavigation";
import { colors } from "./src/constants/color";
import UserContext from "./src/context/UserContext";


export default function App() {

  const [appIsReady, setAppIsReady] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    async function bootApp() {
      try {
        // load required fonts
        await Font.loadAsync({
          Montserrat: require("./src/assets/fonts/Montserrat-Regular.ttf"),
          Montserrat500: require("./src/assets/fonts/Montserrat_500.ttf"),
          Montserrat600: require("./src/assets/fonts/Montserrat_600.ttf"),
          MontserratBold: require("./src/assets/fonts/Montserrat-Bold.ttf"),
          MtSans: require("./src/assets/fonts/MartelSans/MartelSans-Bold.ttf"),
          InterMedium: require("./src/assets/fonts/Inter/Inter-Medium.ttf"),
          InterRegular: require("./src/assets/fonts/Inter/Inter-Regular.ttf"),
          InterSemiBold: require("./src/assets/fonts/Inter/Inter-SemiBold.ttf"),
        });
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
        let checkLog = await ReadFromStorage("@token");
        console.log(checkLog);
        if (checkLog) {
          setIsLoggedIn(true);
          // navigation.navigate("AppDashboard");
        }
        console.log("End!");
      }
    }
    bootApp();
  }, []);

  const Stack = createNativeStackNavigator();
  if (!appIsReady) return <ActivityIndicator color={colors.Purple} />;
  return (
    <UserContext>
      <NavigationContainer>
        <Stack.Navigator initialRouteName= "AppHome">
          <Stack.Screen
            name="AppHome"
            component={AuthNavigation}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="AppDashboard"
            component={BottomStackNavigation}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </UserContext>
  );
}
