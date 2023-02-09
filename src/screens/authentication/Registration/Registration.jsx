import {
  Text,
  View,
  Image,
  ActivityIndicator,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
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
// import { GoogleSignIn, GoogleSignInButton } from "@react-native-google-signin/google-signin";

export const Registration = () => {
  let navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loader, setLoader] = useState(false);

  // GoogleSignIn.configure({
  //   scopes: ["email", "profile"],
  //   webClientId: "YOUR_WEB_CLIENT_ID",
  //   offlineAccess: false,
  // });

  // const [user, setUser] = useState('');

  // const signIn = async () => {
  //   try {
  //     const user = await GoogleSignIn.signIn();
  //     setUser(user);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // const signOut = async () => {
  //   try {
  //     await GoogleSignIn.signOut();
  //     setUser('');
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

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
      <KeyboardAvoidingView
        behavior="position"
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 0}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
              padding: 15,
            }}
          >
            <View style={{ padding: 15 }}>
              {/* <Image
                source={require("../../../assets/images/register.png")}
                style={{ width: "100%", height: 250 }}
              /> */}
              <Text style={registrationStyle.header}>Sign up</Text>
              <Text style={registrationStyle.text}>
                Welcome to QuickTip! We're excited to help you start tipping
                with ease. To get started, simply create an account with us.
              </Text>
            </View>

            <View>
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
            {/* <View>
              {user ? (
                <View>
                  <Text>{user.email}</Text>
                  <Button title="Sign Out" onPress={signOut} />
                </View>
              ) : (
                <GoogleSignInButton onPress={signIn} />
              )}
            </View> */}
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
                  color: colors.textGrey,
                  fontFamily: Fonts.Monsterat,
                }}
              >
                Already have an account?
              </Text>
              <Text
                style={{
                  color: colors.black,
                  fontFamily: Fonts.MonsteratBold,
                }}
                onPress={() => navigation.navigate(onboarding.LOGIN)}
              >
                Login
              </Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </Container>
  );
};
