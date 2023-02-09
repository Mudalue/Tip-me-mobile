import { colors } from "../../../constants/color";
import { Fonts } from "../../../constants/fonts";
export const welcomepagestyle = {
  image: {
    height: 300,
    width: "100%",
    marginTop: 0,
  }, 
  image_work: {
    height: 300,
    width: "100%",
    marginTop: 0,
  },
  title: {
    fontSize: 30,
    fontWeight: "700",
    color: "#3D3D3D",
    fontFamily: Fonts.MonsteratBold
  },
  home: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    lineHeight: 25,
    textAlign: "center",
    marginBottom: 100,
    fontSize: 12,
    color: colors.textGrey,
    fontFamily: Fonts.Monsterat
  },
  subtitle: {
    paddingVertical: 4,
    paddingHorizontal: 2,
    lineHeight: 20,
    fontSize: 12,
    color: colors.textGrey,
    fontFamily: Fonts.Monsterat
  },
  dot:{
    lineHeight: 25,
    fontSize: 22,
    color: colors.textGrey,
    fontFamily: Fonts.Monsterat
  }
};
