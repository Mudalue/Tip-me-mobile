import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import Container from "../../../../container/Container";
import { Fonts } from "../../../../constants/fonts";
import { colors } from "../../../../constants/color";
import Icon from "react-native-vector-icons/MaterialIcons";

const PayBills = () => {
  const billContents = [
    { id: 1, name: "Electricity", icon: "bolt" },
    { id: 2, name: "Water", icon: "opacity" },
    { id: 3, name: "Internet", icon: "wifi" },
    { id: 4, name: "Subscription", icon: "subscriptions" },
    { id: 5, name: "Airtime", icon: "phone-iphone" },
    { id: 6, name: "Tv", icon: "tv" },
  ];
  return (
    <Container>
      <View
        style={{
          backgroundColor: "#ecf0f1",
          display: "flex",
          height: "100%",
          padding: 10,
        }}
      >
        <View style={{ marginTop: 15 }}>
          <Text
            style={{
              textAlign: "center",
              fontFamily: Fonts.MonsteratBold,
              fontSize: 17,
            }}
          >
            Pay Your Bills
          </Text>
        </View>
        <View style={{ marginTop: 20 }}>
          <View
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-evenly",
            }}
          >
            {billContents.map((billContent) => (
              <TouchableOpacity style={styles.billButton} key={billContent.id}>
                <Icon name={billContent.icon} size={40} color={colors.Purple}/>
                <Text style={styles.normaltext}>{billContent.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
    </Container>
  );
};
const styles = StyleSheet.create({
  normaltext: {
    textAlign: "center",
    fontFamily: Fonts.Monsterat,
    fontSize: 12,
    lineHeight: 30, 
    color: colors.grey
  },
  billButton: {
    height: 200,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white,
    marginVertical: 5,
    width: "47%",
    borderRadius: 8
  },
});
export default PayBills;
