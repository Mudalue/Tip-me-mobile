import { colors } from "../../../constants/color";
import { Fonts } from "../../../constants/fonts";

export const onboardingstyle = {
container: {
    display: "flex",
    height: "100%",
    padding: 10,
    backgroundColor: "#ecf0f1",
  }, 
  nameText:{
    fontSize: 18,
    fontWeight: "700",
    fontFamily: Fonts.MonsteratBold,
    paddingVertical: 5
  },
  dateText: {
    fontSize: 12,
    color: colors.grey,
    lineHeight: 20,
    fontFamily: Fonts.Monsterat,
  },
  balanceSection: {
    backgroundColor: colors.Purple,
    height: 150,
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
  },
  balanceContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  }, 
  balanceText: { fontFamily: Fonts.Monsterat, color: colors.white },
  balanceAmount: {
    fontFamily: Fonts.MonsteratBold,
    fontSize: 28,
    color: colors.white,
    lineHeight: 40,
  },
  balanceImage: { width: 70, height: 70, borderRadius: 100 / 5 },
  contentContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginVertical: 15,
  },
  contentCard: {
    backgroundColor: colors.white,
    height: 100,
    width: 100,
    borderRadius: 10,
  },
  contentIcon: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 16,
  },
  contentText: {
    textAlign: "center",
    fontFamily: Fonts.Monsterat,
    fontSize: 12,
    color: colors.grey
  },
  statContainer: {
    backgroundColor: colors.white,
    height: 100,
    width: "100%",
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    marginBottom: 16
  },
  statSubContainer: {
    width: "50%",
    display: "flex",
    flexDirection: "row",
    padding: 10,
    paddingLeft: 40,
  },
  dot:{
    borderRadius: 10/2,
    backgroundColor: colors.green,
    width: 8,
    height: 8,
  },
  dotRed:{
    borderRadius: 10/2,
    backgroundColor: "red",
    width: 8,
    height: 8,
  },
  statTextContainer:{
    display: "flex",
    marginLeft: 10,
    justifyContent: "center",
  },
  statText: {
    fontFamily: Fonts.Monsterat,
    color: colors.grey,
    fontSize: 12
  },
  statAmount: {
    fontFamily: Fonts.MonsteratBold,
    fontSize: 20
  }

};