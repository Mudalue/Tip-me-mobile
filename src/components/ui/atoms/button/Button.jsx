import { TouchableOpacity, Text } from "react-native";
import { colors } from "../../../../constants/color.js";
import { Fonts } from "../../../../constants/fonts.js";
import { buttonstyle } from "./style.js";
const Button = ({ text, onpress }) => {
  return (
    <TouchableOpacity style={buttonstyle.button} onPress={onpress}>
      <Text style={{textAlign: "center", color: colors.white, fontSize: 16, fontFamily: Fonts.Monsterat600}}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
