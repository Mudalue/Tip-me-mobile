import { View, Text, Image, ScrollView, ImageBackground } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { colors } from "../../../constants/color";
import { Fonts } from "../../../constants/fonts";
import Container from "../../../container/Container";
import { onboardingstyle } from "./style";

export const Onboarding = () => {
  const content = [
    { id: 1, name: "transfer", icon: "paper-plane", color: "red" },
    { id: 2, name: "scan code", icon: "barcode", color: "green" },
    { id: 3, name: "Qr-code", icon: "qrcode", color: "orange" },
  ];
  const activity = [
    { id: 1, name: "John doe", image: "../../../assets/images/photo1.jpg", transaction: "2", amount: "100" },
    { id: 2, name: "Abiodun lawal", image: "../../../assets/images/saving.png", transaction: "4", amount: "500" },
    { id: 3, name: "Badmus Rafiat", image: "", transaction: "10", amount: "4000" },
    { id: 4, name: "Bode Olawale", image: "", transaction: "5" , amount: "700"},
    { id: 5, name: "Anita Joseph", image: "", transaction: "3",  amount: "200" },
  ];
  return (
    <Container>
      <View style={onboardingstyle.container}>
        <View style={{ marginVertical: 10 }}>
          <Text style={onboardingstyle.nameText}>Hi, John</Text>
          <Text style={onboardingstyle.dateText}>
            Today, Tue, 10th September
          </Text>
        </View>
        <View style={onboardingstyle.balanceSection}>
          <View style={onboardingstyle.balanceContainer}>
            <View>
              <Text style={onboardingstyle.balanceText}>Total balance</Text>
              <Text style={onboardingstyle.balanceAmount}>N 3200</Text>
            </View>
            <View>
              <Image
                source={require("../../../assets/images/creditcard.png")}
                style={onboardingstyle.balanceImage}
              />
            </View>
          </View>
        </View>
        <View style={onboardingstyle.contentContainer}>
          {content.map((d) => (
            <View style={onboardingstyle.contentCard} key={d.id}>
              <View style={onboardingstyle.contentIcon}>
                <Icon name={d.icon} size="25x" color={d.color} />
              </View>
              <Text style={onboardingstyle.contentText}>{d.name}</Text>
            </View>
          ))}
        </View>
        <View style={onboardingstyle.statContainer}>
          <View style={onboardingstyle.statSubContainer}>
            <View style={{ display: "flex", justifyContent: "center" }}>
              <Text style={onboardingstyle.dot}></Text>
            </View>
            <View style={onboardingstyle.statTextContainer}>
              <Text style={onboardingstyle.statText}>Earned</Text>
              <Text style={onboardingstyle.statAmount}>N 300</Text>
            </View>
          </View>
          <View style={onboardingstyle.statSubContainer}>
            <View style={{ display: "flex", justifyContent: "center" }}>
              <Text style={onboardingstyle.dotRed}></Text>
            </View>
            <View style={onboardingstyle.statTextContainer}>
              <Text style={onboardingstyle.statText}>Spent</Text>
              <Text style={onboardingstyle.statAmount}>N 100</Text>
            </View>
          </View>
        </View>
        <View>
          <Text style={onboardingstyle.nameText}>Activity</Text>
          <ScrollView>
            {activity.map((a) => (
              <View
                key={a.id}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginVertical: 10,
                  justifyContent: "space-between"
                }}
              >
                <View style={{display: "flex", flexDirection: "row"}}>
                  <ImageBackground
                  resizeMode="cover"
                    source={a.image}
                    style={{ borderRadius: 50 / 2, width: 50, height: 50 }}
                  />
                  <View style={{ marginHorizontal: 10, paddingTop: 10 }}>
                    <Text style={{fontFamily: Fonts.MonsteratBold}}>{a.name}</Text>
                    <Text style={{fontFamily: Fonts.Monsterat, fontSize: 12, color: colors.grey, lineHeight: 20}}>{a.transaction} transactions</Text>
                  </View>
                </View>
                <View style={{paddingTop: 10}}>
                  <Text style={{fontFamily: Fonts.MonsteratBold, fontSize: 16}}> N {a.amount}</Text>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    </Container>
  );
};
