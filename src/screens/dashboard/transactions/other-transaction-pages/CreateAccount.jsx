import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import Container from "../../../../container/Container";
import { Fonts } from "../../../../constants/fonts";
import Inputfields from "../../../../components/ui/atoms/inputfield/InputFields";
import { colors } from "../../../../constants/color";

const CreateAccount = () => {
  return (
    <Container>
      <View
        style={{
          display: "flex",
          height: "100%",
          padding: 20,
          backgroundColor: "#ecf0f1",
        }}
      >
        <View style={{ marginTop: 20 }}>
          <Text style={styles.headertext}>Create account</Text>
          <Text style={styles.normaltext}>
            Please fill the form below with the right information
          </Text>
        </View>
        <View style={{ height: "70%", marginTop: 30 }}>
          <View>
            <Text style={styles.label}>First name</Text>
            <Inputfields />
          </View>
          <View>
            <Text style={styles.label}>Last name</Text>
            <Inputfields />
          </View>
          <View>
            <Text style={styles.label}>Email</Text>
            <Inputfields />
          </View>
          <View>
            <Text style={styles.label}>Bvn</Text>
            <Inputfields />
          </View>
          <View>
            <Text style={styles.label}>Phone</Text>
            <Inputfields />
          </View>
          <View style={{ marginTop: 20 }}>
            <TouchableOpacity
              style={{
                backgroundColor: colors.Purple,
                padding: 18,
                borderRadius: 10,
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  color: colors.white,
                  fontFamily: Fonts.MonsteratBold,
                  fontSize: 14,
                }}
              >
                Submit
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
};
const styles = StyleSheet.create({
  headertext: {
    textAlign: "center",
    fontFamily: Fonts.MonsteratBold,
    fontSize: 18,
    lineHeight: 30,
  },
  normaltext: {
    textAlign: "center",
    fontFamily: Fonts.Monsterat,
    fontSize: 12,
  },
  label: {
    paddingTop: 10,
    fontFamily: Fonts.Monsterat,
    fontSize: 12,
  },
});
export default CreateAccount;
