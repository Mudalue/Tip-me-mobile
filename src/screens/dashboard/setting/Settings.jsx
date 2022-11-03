import { Text, TouchableOpacity, View } from "react-native";
import Container from "../../../container/Container";
import Icon from "react-native-vector-icons/MaterialIcons";
import { colors } from "../../../constants/color";
import { Fonts } from "../../../constants/fonts";
import { settingStyle } from "./style";
import { useNavigation } from "@react-navigation/native";
import { onboarding, SettingsScreenTitles, UserScreenTitles } from "./../../../constants/screens";


export default function Settings() {
  let navigation = useNavigation();
  const settings = [
    {
      id: 1,
      name: "ResetPassword",
      icon: "security",
      color: colors.Purple,
      button: true,
      navigation: SettingsScreenTitles.CHANGEPASSWORD
    },
    {
      id: 2,
      name: "Notification",
      icon: "notifications",
      color: colors.Purple,
      button: true,
      navigation: UserScreenTitles.NOTIFICATION
    },
    {
      id: 3,
      name: "Language",
      icon: "language",
      color: colors.Purple,
      button: true,
    },
    {
      id: 4,
      name: "Logout",
      icon: "logout",
      color: "red",
      button: true,
      navigation: onboarding.REGISTRATION
    },
  ];
  return (
    <Container>
      <View style={settingStyle.settingcontainer}>
        <View style={{ padding: 10 }}>
          <Text style={settingStyle.settingHeader}>Account</Text>
          <View style={settingStyle.settingsubcategory}>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <View style={settingStyle.iconcontainer}>
                <Icon name="person" size={20} color={colors.Purple} />
              </View>
              <View style={{ paddingHorizontal: 20, paddingTop: 5 }}>
                <Text style={{ fontFamily: Fonts.MonsteratBold, fontSize: 14 }}>
                  John doe
                </Text>
                <Text style={settingStyle.accountText}>edit personal info</Text>
              </View>
            </View>
            <TouchableOpacity style={settingStyle.settingButton} onPress={()=>navigation.navigate(UserScreenTitles.PROFILE)}>
              <Icon name="chevron-right" size={20} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ padding: 10 }}>
          <Text style={settingStyle.settingHeader}>Settings</Text>
         
            <View style={settingStyle.settingsubcategory} >
              <View style={{ display: "flex", flexDirection: "row" }}>
                <View style={settingStyle.iconcontainer}>
                  <Icon name={"face"} size={20} color={colors.Purple} />
                </View>
                <View style={{ paddingHorizontal: 20, paddingTop: 15 }}>
                  <Text
                    style={{ fontFamily: Fonts.MonsteratBold, fontSize: 14 }}
                  >
                    test
                  </Text>
                </View>
              </View>
                <TouchableOpacity style={settingStyle.settingButton} onPress={()=>navigation.navigate(UserScreenTitles.NOTIFICATION)}>
                  <Icon name="chevron-right" size={20} />
                </TouchableOpacity>
    
            </View>
        
        </View>
      </View>
    </Container>
  );
}
