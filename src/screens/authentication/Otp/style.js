import { colors } from "../../../constants/color";
import { Fonts } from "../../../constants/fonts";

export const otpstyle = {
  text: {
    textAlign: "center",
    fontFamily: Fonts.Monsterat,
    fontSize: 12,
  },
  header: {
    textAlign: "center",
    color: colors.Purple,
    fontSize: 23,
    lineHeight: 40,
    fontWeight: "700",
    fontFamily: Fonts.MonsteratBold,
    marginTop: 20
  },
  textinput: {
    height: 60,
    width: "18%",
    borderColor: colors.Purple,
    borderWidth: 1,
    padding: 5,
    fontFamily: Fonts.MonsteratBold,
    fontSize: 40,
    textAlign: "center",
    margin: 10
  },
};
