import { Text, View, Image, ActivityIndicator } from "react-native";
import Button from "../../../components/ui/atoms/button/Button";
import Inputfields from "../../../components/ui/atoms/inputfield/InputFields";
import { colors } from "../../../constants/color";
import Container from "../../../container/Container";
import { registrationStyle } from "./style";
import { useNavigation } from "@react-navigation/native";
import { onboarding } from "../../../constants/screens";
import { Fonts } from "../../../constants/fonts";
import { useState } from "react";
import { postRequest } from "../../../assets/utils/api";

export const Registration = () => {
  let navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loader, setLoader] = useState(false);
  //submit form
  const submit = async () => {
    if (!email.trim() || !password.trim() || !confirm.trim()) {
      alert("Input value required");
    } else {
      if (password === confirm) {
        setLoader(true);
        const response = await postRequest("user/signup", {
          email: email,
          password: password,
        });
        console.log(response.data);
        if (response.data.isSuccess === true) {
          navigation.navigate(onboarding.OTPVERIFICATION);
        } else {
          alert(response.data);
        }
        setLoader(true);
      } else {
        alert("password does not match!!");
      }
    }
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
            source={require("../../../assets/images/register.png")}
            style={{ width: "100%", height: 250 }}
          />
          <Text style={registrationStyle.header}>Welcome to Tipp</Text>
          <Text style={registrationStyle.text}>keep your data safe!</Text>
        </View>
        <View style={{ height: "50%" }}>
          <Inputfields
            placeholder="email"
            type="emailAddress"
            onchange={setEmail}
            value={email}
            label="check"
          />
          <Inputfields
            placeholder="password"
            type="password"
            onchange={setPassword}
            value={password}
          />
          <Inputfields
            placeholder="confirm password"
            type="password"
            onchange={setConfirm}
            value={confirm}
          />
          <View>
            {loader === true ? (
              <View style={{ marginVertical: 20 }}>
                <ActivityIndicator size="large" color={colors.Purple} />
              </View>
            ) : (
              <Button
                text={
                  !email.trim() || !password.trim() || !confirm.trim()
                    ? "fill the form to proceed"
                    : " Register"
                }
                onpress={submit}
              />
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
            Already have an account?
          </Text>
          <Text
            style={{ color: colors.Purple, fontFamily: Fonts.MonsteratBold }}
            onPress={() => navigation.navigate(onboarding.LOGIN)}
          >
            Login
          </Text>
        </View>
      </View>
    </Container>
  );
};
