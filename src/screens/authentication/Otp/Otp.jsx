import { View, Text, Image, TextInput, ActivityIndicator } from "react-native";
import React, { useState } from "react";
import Container from "../../../container/Container";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../../../constants/color";
import { Fonts } from "../../../constants/fonts";
import { otpstyle } from "./style";
import Button from "../../../components/ui/atoms/button/Button";
import { onboarding } from "../../../constants/screens";
import { postRequest } from "../../../assets/utils/api";

const Otp = () => {
  // const [number1, setNumber1] = useState("");
  // const [number2, setNumber2] = useState("");
  // const [number3, setNumber3] = useState("");
  // const [number4, setNumber4] = useState("");
  const [otp, setOtp] = useState("");
  const [email, setEmail] = useState("emekachristian511@gmail.com");
  const [loader, setLoader] = useState(false);
  let navigation = useNavigation();
  //verify
  const verify = async () => {
    setLoader(true);
    const response = await postRequest("user/verify", {
      email: email,
      otp: otp,
    });
    console.log(response.data);
    if (response.data.isSuccess === true) {
      navigation.navigate(onboarding.LOGIN);
    } else {
      alert(response.data);
    }
    setLoader(false);
  };
  return (
    <Container>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          padding: 15,
        }}
      >
        <View style={{ height: "45%", padding: 15 }}>
          <Image
            source={require("../../../assets/images/verify.png")}
            style={{ width: "100%", height: 250 }}
          />
          <Text style={otpstyle.header}>OTP Verification</Text>
          <Text style={otpstyle.text}>Check your mail for otp</Text>
        </View>
        <View style={{ height: "45%" }}>
          <OTPInput
            onChangeText={setOtp}
            value={otp}
            borderColor={colors.Purple}
            boxBackgroundColor={colors.grey}
            cursorColor={colors.grey}
          />
          ;
          {/* <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              width: "100%",
              marginVertical: 55,
            }}
          >
            <TextInput
              style={otpstyle.textinput}
              keyboardType="number-pad"
              onChangeText={setNumber1}
              value={number1}
              maxLength={1}
            />
            <TextInput
              style={otpstyle.textinput}
              keyboardType="number-pad"
              onChangeText={setNumber2}
              value={number2}
              maxLength={1}
            />
            <TextInput
              style={otpstyle.textinput}
              keyboardType="number-pad"
              onChangeText={setNumber3}
              value={number3}
              maxLength={1}
            />
            <TextInput
              style={otpstyle.textinput}
              keyboardType="number-pad"
              onChangeText={setNumber4}
              value={number4}
              maxLength={1}
            />
          </View> */}
          <View>
            {loader === true ? (
              <View style={{ marginVertical: 20 }}>
                <ActivityIndicator size="large" color={colors.Purple} />
              </View>
            ) : (
              <Button text="Verify and Proceed" onpress={verify} />
            )}
          </View>
        </View>
        <View
          style={{
            height: "5%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <Text
            style={{
              marginHorizontal: 4,
              color: colors.grey,
              fontFamily: Fonts.Monsterat,
            }}
          >
            Didn't get an otp?
          </Text>
          <Text
            style={{ color: colors.Purple, fontFamily: Fonts.MonsteratBold }}
            onPress={() => navigation.navigate(onboarding.RESENDOTP)}
          >
            Resend otp
          </Text>
        </View>
      </View>
    </Container>
  );
};

export default Otp;
