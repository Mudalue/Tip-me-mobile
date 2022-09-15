import { colors } from "../../../constants/color";
import { Fonts } from "../../../constants/fonts";
export const settingStyle = {
  settingcontainer: {
    display: "flex",
    height: "100%",
    padding: 10,
    backgroundColor: "#ecf0f1",
  },
  settingHeader: {
    fontFamily: Fonts.MonsteratBold,
    fontSize: 16,
    lineHeight: 30,
  },
  settingsubcategory: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  iconcontainer: {
    backgroundColor: colors.white,
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  accountText: {
    fontFamily: Fonts.Monsterat,
    fontSize: 12,
    color: colors.grey,
  },
  settingButton: {
    backgroundColor: colors.white,
    height: 40,
    width: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 40 / 2,
  },
};
