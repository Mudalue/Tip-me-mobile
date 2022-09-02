import { View, Text, Image } from "react-native";
import Container from "../../../container/Container";
import { useNavigation } from "@react-navigation/native";
import { onboarding } from "../../../constants/screens";
import { colors } from "../../../constants/color";
import { registrationStyle } from "../Registration/style";
import Button from "../../../components/ui/atoms/button/Button";
import Inputfields from "../../../components/ui/atoms/inputfield/InputFields";
import { Fonts } from "../../../constants/fonts";
const Login = () => {
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
            source={require("../../../assets/images/login.png")}
            style={{ width: "100%", height: 250 }}
          />
          <Text style={registrationStyle.header}>Hello Again!</Text>
          <Text style={registrationStyle.text}>Login your credentials to proceed!</Text>
        </View>
        <View style={{ height: "50%" }}>
          <Inputfields placeholder="email" type="emailAddress" />
          <Inputfields placeholder="password" type="password" />
          <View>
            <Button text="Login" />
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
          <Text style={{marginHorizontal: 4, color: colors.grey, fontFamily: Fonts.Monsterat}}>Don't have an account?</Text>
          <Text style={{color: colors.Purple, fontFamily: Fonts.MonsteratBold}} onPress={() => navigation.navigate(onboarding.REGISTRATION)}>Sign up</Text>
        </View>
      </View>
    </Container>
  );
};

export default Login;
