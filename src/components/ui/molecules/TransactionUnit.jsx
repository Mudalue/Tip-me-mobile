import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../../../constants/color";
import { Fonts } from "../../../constants/fonts";

export default function TransactionUnit({ value, day, month, name, amount }) {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        borderLeftColor: value === "credit" ? colors.green : "red",
        borderLeftWidth: 4,
        paddingVertical: 10,
        paddingHorizontal: 10,
        margin: 5,
        backgroundColor: colors.white,
        justifyContent: "space-between",
      }}
    >
      <View style={{ display: "flex", flexDirection: "row" }}>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#ecf0f1",
           height: 70,
           width: 70
          }}
        >
          <Text
            style={{
              color: colors.grey,
              fontFamily: Fonts.MonsteratBold,
              fontSize: 20,
            }}
          >
            {day}
          </Text>
          <Text style={{ fontFamily: Fonts.Monsterat, fontSize: 12 }}>
            {month}
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            marginHorizontal: 10,
          }}
        >
          <Text style={{ fontFamily: Fonts.Monsterat600, fontSize: 14 }}>
            {name}
          </Text>
          <Text style={{ fontFamily: Fonts.Monsterat, fontSize: 12, lineHeight: 20 }}>
            {name} tipp
          </Text>
        </View>
      </View>
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          marginHorizontal: 10,
        }}
      >
        <Text style={{ color: value === "credit" ? colors.green : "red", fontFamily: Fonts.MonsteratBold }}>
          {value === "credit" ? `+ \u20A6${amount}` : `- \u20A6${amount}`}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
