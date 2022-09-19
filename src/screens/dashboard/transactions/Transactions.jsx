import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Container from "../../../container/Container";
import { colors } from "../../../constants/color";
import Icon from "react-native-vector-icons/MaterialIcons";
import { transactionstyle } from "../transactions/style.js";

export default function Transactions() {
  const content = [
    { id: 1, name: "Pay bills", icon: "credit-card" },
    { id: 2, name: "Transaction history", icon: "restore" },
    { id: 3, name: "save", icon: "stars" },
    { id: 4, name: "Credit wallet", icon: "payments" },
  ];
  return (
    <Container>
      <View style={transactionstyle.transactioncontainer}>
        <View style={transactionstyle.transactioncard}>
          <View style={transactionstyle.content}>
            <View>
              <Text style={transactionstyle.walletText}>
                Account name: John doe
              </Text>
              <Text style={transactionstyle.walletText}>
                Account Number: 2347 **** ***
              </Text>
              <Text style={transactionstyle.walletText}>
                Bank Name: hello bank
              </Text>
            </View>
            <View>
              <TouchableOpacity style={transactionstyle.plusbutton}>
                <Icon name="add" size={15} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>

          <Text style={transactionstyle.balanceText}>Your balance</Text>
          <Text style={transactionstyle.walletBold}>{"\u20A6"} 30000</Text>
        </View>
        <View style={transactionstyle.contentContainer}>
          {content.map((contents) => (
            <TouchableOpacity style={transactionstyle.contentButton} key={contents.id}>
              <View style={{ width: "80%" }}>
                <Text style={transactionstyle.contentText}>
                  {contents.name}
                </Text>
                <Text style={transactionstyle.contentSubText}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                  nulla
                </Text>
              </View>
              <View>
                <Icon name={contents.icon} size={40} color={colors.Purple} />
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </Container>
  );
}
