import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import QRCode from "react-native-qrcode-svg";
import Container from "../../../container/Container";
import { colors } from "../../../constants/color";
import { Fonts } from "../../../constants/fonts";

const Qrcode = () => {
  const [url, setUrl] = useState("google.com");

  return (
    <Container>
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          backgroundColor: "#ecf0f1"
        }}
      >
        <Text style={{ textAlign: "center", lineHeight: 50, fontSize: 18, fontFamily: Fonts.MonsteratBold, color: colors.Purple }}>Scan the qr code below</Text>
        <QRCode
          value={url}
          size={300}
          color={colors.grey}
          backgroundColor= "#ecf0f1"
        />
      </View>
    </Container>
  );
};

export default Qrcode;
