import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import NexaBlack from './src/assets/fonts/Nexa-Trial-Black.ttf';
// import {useFonts } from 'expo-font';
// import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthNavigation from './src/navigation/authentication/AuthNavigation'

const Stack = createNativeStackNavigator();
export default function App() {
  // let [fontsLoaded] = useFonts({
  //   NexaBlack,
  // });

  // if (!fontsLoaded) {
  //   return <AppLoading />;
  // }
  return (
    // <View>
    //   <Text>
    //     Hello
    //   </Text>
    // </View>
   <NavigationContainer>
   <Stack.Navigator initialRouteName="AppHome">
        <Stack.Screen
          name="AppHome"
          component={AuthNavigation}
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen
          name="AppDashboard"
          component={BottomStackNavigation}
          options={{ headerShown: false }}
        /> */}
      </Stack.Navigator>
   </NavigationContainer>
  );
}


