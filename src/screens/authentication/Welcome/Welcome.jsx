import React from "react";
import { Text, Image, View } from "react-native";
import Container from "../../../container/Container";
import { welcomepagestyle } from "./style.js";
import Onboarding from "react-native-onboarding-swiper";
import { useNavigation } from "@react-navigation/native";
import { onboarding } from "../../../constants/screens";

const list = [
  { key: "1", value: "Choose the person you want to tip" },
  { key: "2", value: "Enter the amount you want to send" },
  { key: "3", value: "Hit send. It's that easy!" },
];
const Item = ({ title }) => (
  <View style={{ flexDirection: "row", alignItems: "center" }}>
    <Text style={welcomepagestyle.dot}>•</Text>
    <Text style={welcomepagestyle.subtitle}>{title}</Text>
  </View>
);
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
            backgroundColor: "#ffffff",
            image: (
              <Image
                source={require("../../../assets/images/onboarding1.png")}
                style={welcomepagestyle.image}
              />
            ),
            title: <Text style={welcomepagestyle.title}>Tipster</Text>,
            subtitle: (
              <Text style={welcomepagestyle.home}>
                Welcome to tipster, the easy and convenient way to tip anyone,
                anytime, anywhere! With tipster, you can quickly and securely
                tip the people who matter to you, whether it's your barista,
                delivery driver, or a friend who helped you out.
              </Text>
            ),
          },
          {
            backgroundColor: "#ffffff",
            image: (
              <Image
                source={require("../../../assets/images/saving.png")}
                style={welcomepagestyle.image_work}
              />
            ),
            title: <Text style={welcomepagestyle.title}>How it works</Text>,
            subtitle: React.Children.toArray(
              list.map((item, index) => <Item key={index} title={item.value} />)
            ),
            // <>
            //   <Text style={welcomepagestyle.subtitle}>
            //     Choose the person you want to tip
            //   </Text>
            //   <Text style={welcomepagestyle.subtitle}>
            //     Enter the amount you want to send
            //   </Text>
            //   <Text style={welcomepagestyle.subtitle}>
            //     Hit send. It's that easy!
            //   </Text>
            // </>
          },
        ]}
      />
    </Container>
  );
};
