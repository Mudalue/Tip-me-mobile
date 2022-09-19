import { View, Text, Image, ScrollView, ImageBackground, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { colors } from "../../../constants/color";
import { Fonts } from "../../../constants/fonts";
import Container from "../../../container/Container";
import { onboardingstyle } from "./style";
import photo1 from '../../../assets/images/photo1.jpg'
import photo2 from '../../../assets/images/photo2.jpg'
import photo3 from '../../../assets/images/photo3.jpg'
import photo4 from '../../../assets/images/photo4.jpg'
import photo5 from '../../../assets/images/photo5.jpg'
import { useNavigation } from "@react-navigation/native";
import { DashboardScreenTitles } from "../../../constants/screens";


export const Onboarding = () => {
  let navigation = useNavigation();
  const content = [
    { id: 1, name: "transfer", icon: "paper-plane", color: "red"},
    { id: 2, name: "scan code", icon: "barcode", color: "green", navigation: DashboardScreenTitles.SCAN },
    { id: 3, name: "Qr-code", icon: "qrcode", color: "orange", navigation: DashboardScreenTitles.QRCODE },
  ];
  const activity = [
    { id: 1, name: "John doe", image: photo1, transaction: "2", amount: "100" },
    { id: 2, name: "Abiodun lawal", image: photo2, transaction: "4", amount: "500" },
    { id: 3, name: "Badmus Rafiat", image: photo3, transaction: "10", amount: "4000" },
    { id: 4, name: "Bode Olawale", image: photo4, transaction: "5" , amount: "700"},
    { id: 5, name: "Anita Joseph", image: photo5, transaction: "3",  amount: "200" },
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
              <Text style={onboardingstyle.balanceText}>Your balance</Text>
              <Text style={onboardingstyle.balanceAmount}>{"\u20A6"} 00.0k</Text>
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
            <TouchableOpacity style={onboardingstyle.contentCard} key={d.id} onPress={()=>navigation.navigate(d.navigation)}>
              <View style={onboardingstyle.contentIcon}>
                <Icon name={d.icon} size={25} color={d.color} />
              </View>
              <Text style={onboardingstyle.contentText}>{d.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={onboardingstyle.statContainer}>
          <View style={onboardingstyle.statSubContainer}>
            <View style={{ display: "flex", justifyContent: "center" }}>
              <Text style={onboardingstyle.dot}></Text>
            </View>
            <View style={onboardingstyle.statTextContainer}>
              <Text style={onboardingstyle.statText}>Earned</Text>
              <Text style={onboardingstyle.statAmount}>{"\u20A6"} 0.0k</Text>
            </View>
          </View>
          <View style={onboardingstyle.statSubContainer}>
            <View style={{ display: "flex", justifyContent: "center" }}>
              <Text style={onboardingstyle.dotRed}></Text>
            </View>
            <View style={onboardingstyle.statTextContainer}>
              <Text style={onboardingstyle.statText}>Spent</Text>
              <Text style={onboardingstyle.statAmount}>{"\u20A6"} 0.0k</Text>
            </View>
          </View>
        </View>
        <View>
          <Text style={onboardingstyle.nameText}>Activities</Text>
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
                  <Image
                  resizeMode="cover"
                    source={a.image}
                    style={{ borderRadius: 50 / 2, width: 50, height: 50, borderWidth: 2, borderColor: colors.grey }}
                  />
                  <View style={{ marginHorizontal: 10, paddingTop: 10 }}>
                    <Text style={{fontFamily: Fonts.MonsteratBold}}>{a.name}</Text>
                    <Text style={{fontFamily: Fonts.Monsterat, fontSize: 12, color: colors.grey, lineHeight: 20}}>{a.transaction} transactions</Text>
                  </View>
                </View>
                <View style={{paddingTop: 10}}>
                  <Text style={{fontFamily: Fonts.MonsteratBold, fontSize: 16}}> {"\u20A6"} {a.amount}</Text>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    </Container>
  );
};
