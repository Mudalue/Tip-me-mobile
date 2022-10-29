import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Container from "../../../container/Container";
import photo1 from "../../../assets/images/photo1.jpg";
import photo2 from "../../../assets/images/photo2.jpg";
import photo3 from "../../../assets/images/photo3.jpg";
import Icon from "react-native-vector-icons/FontAwesome5";
import { colors } from "../../../constants/color";
import Inputfields from "../../../components/ui/atoms/inputfield/InputFields";
import Button from "../../../components/ui/atoms/button/Button";
import { Fonts } from "../../../constants/fonts";

const Transfer = () => {
  const content = [
    { id: 1, name: "Basiru", image: photo1 },
    { id: 2, name: "Dele", image: photo2 },
    { id: 3, name: "Nwosu", image: photo3 },
  ];
  return (
    <Container>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>My Balance</Text>
          <Text style={styles.amount}>{"\u20A6"} 0</Text>
        </View>
        <Text style={styles.beneficiaryHeader}>Beneficiaries</Text>
        <View style={styles.beneficiarySection}>
          <View style={styles.beneficiary}>
            {content.map((beneficiary) => (
              <View style={styles.imageContainer} key={beneficiary.id}>
                <Image
                  key={beneficiary.id}
                  resizeMode="cover"
                  source={beneficiary.image}
                  style={styles.image}
                />
                <Text style={styles.beneficiaryText}>{beneficiary.name}</Text>
              </View>
            ))}
            <View style={styles.addContainer}>
              <View style={styles.add}>
                <Icon name="plus" color={colors.green} />
              </View>
              <Text style={styles.beneficiaryText}>Add</Text>
            </View>
          </View>
        </View>
        <View style={styles.form}>
          <Text style={styles.beneficiaryHeader}>Fill form to transfer</Text>
          <Inputfields placeholder="To" />
          <Inputfields placeholder="amount" />
          <View>
            <Button text="Transfer" />
          </View>
        </View>
      </View>
    </Container>
  );
};

export default Transfer;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    height: "100%",
    padding: 15,
    backgroundColor: "#ecf0f1",
  },
  headerContainer: {
    height: "12%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: 14,
    fontWeight: "200",
    fontFamily: Fonts.Monsterat,
  },
  amount: {
    fontSize: 28,
    fontFamily: Fonts.MonsteratBold,
  },
  beneficiarySection: {
    height: "18%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  beneficiaryHeader: {
    fontSize: 14,
    fontFamily: Fonts.MonsteratBold,
    lineHeight: 40,
  },
  beneficiary: {
    display: "flex",
    flexDirection: "row",
  },
  imageContainer: {
    display: "flex",
    flexDirection: "column",
    marginHorizontal: 10,
  },
  image: {
    borderRadius: 60 / 2,
    width: 60,
    height: 60,
    borderWidth: 2,
    borderColor: colors.Purple,
  },
  addContainer: {
    display: "flex",
    flexDirection: "column",
    marginHorizontal: 10,
  },
  add: {
    borderRadius: 60 / 2,
    width: 60,
    height: 60,
    borderWidth: 2,
    borderColor: colors.green,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  beneficiaryText: {
    textAlign: "center",
    fontFamily: Fonts.Monsterat,
    fontSize: 12,
    lineHeight: 40,
  },
  form: {
    height: "30%",
    marginVertical: 15,
  },
});
