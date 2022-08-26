import { Text, View, Image } from "react-native";
import Button from "../../../components/ui/atoms/button/Button";
import Inputfields from "../../../components/ui/atoms/inputfield/InputFields";
import { colors } from "../../../constants/color";
import Container from "../../../container/Container";
import { registrationStyle } from "./style";
import { useNavigation } from "@react-navigation/native";
import { onboarding } from "../../../constants/screens";

export const Registration = () => {
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
            source={require("../../../assets/images/register.png")}
            style={{ width: "100%", height: 250 }}
          />
          <Text style={registrationStyle.header}>Welcome to Tipp</Text>
          <Text style={registrationStyle.text}>keep your data safe!</Text>
        </View>
        <View style={{ height: "50%" }}>
          <Inputfields placeholder="email" type="emailAddress" />
          <Inputfields placeholder="password" type="password" />
          <Inputfields placeholder="confirm password" type="password" />
          <View>
            <Button text="Register" />
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
          <Text style={{marginHorizontal: 4, color: colors.grey}}>Already have an account?</Text>
          <Text style={{color: colors.Purple, fontWeight: "700"}} onPress={() => navigation.navigate(onboarding.LOGIN)}>Login</Text>
        </View>
      </View>
    </Container>
  );
};
