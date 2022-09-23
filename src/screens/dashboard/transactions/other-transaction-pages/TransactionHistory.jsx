import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import AllTransaction from "../transaction history/AllTransaction";
import CreditTransaction from "../transaction history/CreditTransaction";
import DebitTransaction from "../transaction history/DebitTransaction";
import Container from "../../../../container/Container";
import { Fonts } from "../../../../constants/fonts";
import { colors } from "../../../../constants/color";
import  Icon  from "react-native-vector-icons/MaterialIcons";

const Tab = createMaterialTopTabNavigator();
export default function TransactionHistory() {
  return (
    <Container>
      <NavigationContainer independent={true}>
        <Tab.Navigator
          initialRouteName="All"
          screenOptions={{
            tabBarLabelStyle: { fontFamily: Fonts.MonsteratBold, fontSize: 12, paddingTop: 30 },
            tabBarActiveTintColor: colors.grey,
            tabBarIndicatorStyle: { backgroundColor: colors.grey },
          }}
        >
          <Tab.Screen name="All" component={AllTransaction} />
          <Tab.Screen name="Incoming" component={CreditTransaction} />
          <Tab.Screen name="Outgoing" component={DebitTransaction} />
        </Tab.Navigator>
      </NavigationContainer>
    </Container>
  );
}

const styles = StyleSheet.create({});
