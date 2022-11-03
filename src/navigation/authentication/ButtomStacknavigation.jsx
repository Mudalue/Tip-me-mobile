import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TabScreenOptions } from "../../constants/screens";
import { colors } from "../../constants/color";
import Icon from "react-native-vector-icons/MaterialIcons";

const Tab = createBottomTabNavigator();
export default function BottomStackNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarIndicatorStyle: {
          backgroundColor: colors.Purple,
        },
        tabBarActiveTintColor: "#000",
      }}
    >
      {TabScreenOptions.map((screen) => (
        <Tab.Screen
          key={screen.id}
          name={screen.name}
          component={screen.component}
          options={{
            headerShown: false,
            tabBarIcon: () => (
              <Icon name={screen.icon} color="#232B2B" size={20} />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
}
