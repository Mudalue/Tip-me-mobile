import { View, Text, Image, ActivityIndicator } from "react-native";
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

const Login = () => {
  let navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);
  const [token, setToken] = useState("");

  //login
  const login = async () => {
    setLoader(true);
    const response = await postRequest("user/login", {
      email: email,
      password: password,
    });
    console.log(response.data);
    if (response.data.isSuccess !== "true") {
      setToken(response.data.token);
      WriteToStorage(token, "@token");
      navigation.navigate("AppDashboard");
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
            source={require("../../../assets/images/login.png")}
            style={{ width: "100%", height: 250 }}
          />
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
              <Button text="Login" onpress={login} />
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
            style={{ color: colors.Purple, fontFamily: Fonts.MonsteratBold }}
            onPress={() => navigation.navigate("AppDashboard")}
          >
            Sign up
          </Text>
        </View>
      </View>
    </Container>
  );
};

export default Login;
