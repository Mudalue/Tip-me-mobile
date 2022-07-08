import React from "react";
import { Text, View } from "react-native";
import Container from "../../container/Container";
import { welcomepagestyle } from "../../screens/authentication/style.js";
import Button from "../../components/atoms/Button";

export const Welcome = () => {
  return (
    <Container>
      <View style={welcomepagestyle.background}>
        <Text style={welcomepagestyle.text}>Tipp</Text>
        <View>
          <Button text="get started" />
        </View>
      </View>
    </Container>
  );
};
