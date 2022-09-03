import { View, Text, Image } from 'react-native'
import React from 'react'
import Container from "../../../container/Container";
import { useNavigation } from "@react-navigation/native";
import { Fonts } from "../../../constants/fonts";
import { otpstyle } from "./style";
import Button from "../../../components/ui/atoms/button/Button";
import { onboarding } from "../../../constants/screens";
import Inputfields from '../../../components/ui/atoms/inputfield/InputFields';
const ResentOtp = () => {
    let navigation = useNavigation();
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
          source={require("../../../assets/images/resend.png")}
          style={{ width: "100%", height: 250 }}
        />
        <Text style={otpstyle.header}>OTP Verification</Text>
        <Text style={otpstyle.text}>we would send you a one time password to your email</Text>
      </View>
      <View style={{ height: "45%" }}>
        <View
          style={{
        
            width: "100%",
            marginTop: 55,
            marginBottom: 30
          }}
        >
            <Text style={{textAlign: "center", fontSize: 12, fontFamily: Fonts.Monsterat}}>Enter email address</Text>
          <Inputfields />
        </View>
        <View>
          <Button text="Get OTP" onpress={() => navigation.navigate(onboarding.OTPVERIFICATION)}/>
        </View>
      </View>
    </View>
  </Container>
  )
}

export default ResentOtp