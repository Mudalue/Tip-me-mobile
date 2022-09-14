import { colors } from "../../../constants/color";
import { Fonts } from "../../../constants/fonts";

export const transactionstyle = {
  transactioncontainer: {
    display: "flex",
    height: "100%",
    padding: 15,
    backgroundColor: "#ecf0f1",
  },
  transactioncard: {
    backgroundColor: colors.Purple,
    height: "25%",
    padding: 10,
    borderRadius: 10,
  },
  content: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  plusbutton: {
    backgroundColor: colors.green,
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  walletText: {
    fontFamily: Fonts.Monsterat,
    lineHeight: 25,
    fontSize: 13,
    color: colors.white,
  },
  walletBold: {
    fontFamily: Fonts.MonsteratBold,
    lineHeight: 25,
    fontSize: 18,
    textAlign: "center",
    color: colors.white,
  },
  balanceText: {
    fontFamily: Fonts.Monsterat,
    fontSize: 12,
    textAlign: "center",
    lineHeight: 20,
    color: colors.white,
    marginTop: 13,
  }
};
