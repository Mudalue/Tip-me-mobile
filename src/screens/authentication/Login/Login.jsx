import {
  View,
  Text,
  Image,
  ActivityIndicator,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import Container from "../../../container/Container";
import { useNavigation } from "@react-navigation/native";
import { onboarding } from "../../../constants/screens";
import { colors } from "../../../constants/color";
import { registrationStyle } from "../Registration/style";
import Button from "../../../components/ui/atoms/button/Button";
import Inputfields from "../../../components/ui/atoms/inputfield/InputFields";
import { Fonts } from "../../../constants/fonts";
import { useState } from "react";
import { postRequest } from "../../../assets/utils/api";
import { WriteToStorage } from "../../../assets/utils/appStorage";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = () => {
  let navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);
  const [token, setToken] = useState("token");

  //login
  const login = async () => {
    setLoader(true);
    if (!email.trim() || !password.trim()) {
      alert("Input value required");
    } else {
      const response = await postRequest("user/login", {
        email: email,
        password: password,
      });
      if (response.data.message === "Login successful") {
        setToken(response.data.token);
        const see = await AsyncStorage.setItem(token, "token");
        console.log(see);
        navigation.navigate("AppDashboard");
      } else {
        alert("invalid credentials!!");
      }
    }
    setLoader(false);
  };
  console.log(token);
  return (
    <Container>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        // keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 100}
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
            <View style={{ height: "45%", padding: 15 }}>
              {/* <Image
                source={require("../../../assets/images/login.png")}
                style={{ width: "100%", height: 250 }}
              /> */}
              <Text style={registrationStyle.header}>Hello Again!</Text>
              <Text style={registrationStyle.text}>
                Login your credentials to proceed!
              </Text>
            </View>
            <View style={{ height: "50%" }}>
              <Inputfields
                placeholder="email"
                type="emailAddress"
                onchange={setEmail}
                value={email}
              />
              <Inputfields
                placeholder="password"
                type="password"
                onchange={setPassword}
                value={password}
              />
              <View>
                {loader === true ? (
                  <View style={{ marginVertical: 20 }}>
                    <ActivityIndicator size="large" color={colors.Purple} />
                  </View>
                ) : (
                  <Button
                    text={
                      !email.trim() || !password.trim()
                        ? "enter credentials"
                        : "Login"
                    }
                    onpress={navigation.navigate("AppDashboard")}
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
                Don't have an account?
              </Text>
              <Text
                style={{
                  color: colors.Purple,
                  fontFamily: Fonts.MonsteratBold,
                }}
                onPress={() => navigation.navigate(onboarding.REGISTRATION)}
              >
                Sign up
              </Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </Container>
  );
};

export default Login;
