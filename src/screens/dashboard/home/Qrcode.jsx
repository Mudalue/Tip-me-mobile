import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import QRCode from "react-native-qrcode-svg";
import Container from "../../../container/Container";

const Qrcode = () => {
  const [url, setUrl] = useState("google.com");

  
  return (
    <Container>
      <View>
        <Text>Hello</Text>
  <Qrcode value="https://www.google.com"/>
      </View>
    </Container>
  );
};

export default Qrcode;
