import { Text, TouchableOpacity, View } from "react-native";
import React, { Component } from "react";
import Container from "../../../container/Container";
import { colors } from "../../../constants/color";
import Icon from "react-native-vector-icons/FontAwesome";
import { Fonts } from "../../../constants/fonts";
import {transactionstyle} from '../transactions/style.js'

export class Transactions extends Component {
  render() {
    return (
      <Container>
        <View
          style={{
            display: "flex",
            height: "100%",
            padding: 10,
            backgroundColor: "#ecf0f1",
          }}
        >
          <View
            style={{
              backgroundColor: colors.white,
              height: "20%",
              padding: 10,
            }}
          >
            <View style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
              <View>
                <Text style={transactionstyle.walletText}>Account name: John doe</Text>
                <Text>Account Number: 2347*******</Text>
                <Text>Bank Name: hello bank</Text>
              </View>
              <View>
              <TouchableOpacity style={{backgroundColor: colors.Purple, padding: 5, borderRadius: 100/2}}>
                <Icon name="plus" size="15" color="#fff"/>
              </TouchableOpacity>
            </View>
            </View>

            <Text style={{ textAlign: "center" }}>Balance: N 300000</Text>
            
          </View>
        </View>
      </Container>
    );
  }
}

export default Transactions;
