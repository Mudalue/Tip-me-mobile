import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, View } from "react-native";
import { authscreens } from "../../constants/screens.js";

const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator>
      {authscreens.map((screen) => (
        <Stack.Screen
          key={screen.id}
          name={screen.name}
          component={screen.component}
          options={{ headerShown: false }}
        />
      ))}
    </Stack.Navigator>
  );
};

export default AuthNavigation;
