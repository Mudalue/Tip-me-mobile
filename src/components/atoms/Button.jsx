import { TouchableOpacity } from "react-native";
import { buttonstyle } from "../../components/atoms/style.js";
const Button = ({ text }) => {
  return <TouchableOpacity style={buttonstyle.button}>{text}</TouchableOpacity>;
};

export default Button;
