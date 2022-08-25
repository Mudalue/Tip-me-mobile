import { TouchableOpacity, Text } from "react-native";
import { colors } from "../../../../constants/color.js";
import { buttonstyle } from "./style.js";
const Button = ({ text }) => {
  return (
    <TouchableOpacity style={buttonstyle.button}>
      <Text style={{textAlign: "center", color: colors.white, fontSize: 16, fontWeight: "600"}}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
