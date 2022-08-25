import React from "react";
import { Text, Image } from "react-native";
import Container from "../../../container/Container";
import { welcomepagestyle } from "./style.js";
import Onboarding from "react-native-onboarding-swiper";
import { useNavigation } from "@react-navigation/native";
import { onboarding } from "../../../constants/screens";

export const Welcome = () => {
  let navigation = useNavigation();
  return (
    <Container>
      <Onboarding
        showSkip={false}
        bottomBarHighlight={false}
        onDone={() => navigation.navigate(onboarding.REGISTRATION)}
        pages={[
          {
            backgroundColor: "#fff",
            image: (
              <Image
                source={require("../../../assets/images/onboarding1.png")}
                style={welcomepagestyle.image}
              />
            ),
            title: <Text style={welcomepagestyle.title}>Welcome</Text>,
            subtitle: (
              <Text style={welcomepagestyle.subtitle}>
                LorIn itatibus unde illo repellendus numquam dolor earum. Enim
                asperiores perferendis necessitatibus porro, ea veritatis
                commodi illo laudantium minima nostrum eum.
              </Text>
            ),
          },
          {
            backgroundColor: "#fff",
            image: (
              <Image
                source={require("../../../assets/images/saving.png")}
                style={welcomepagestyle.image}
              />
            ),
            title: <Text style={welcomepagestyle.title}>Save with us</Text>,
            subtitle: (
              <Text style={welcomepagestyle.subtitle}>
                LorIn itatibus unde illo repellendus numquam dolor earum. Enim
                asperiores perferendis necessitatibus porro, ea veritatis
                commodi illo laudantium minima nostrum eum.
              </Text>
            ),
          },
        ]}
      />
    </Container>
  );
};
