import { StyleSheet } from "react-native"
import { colors } from "app/theme"
import { scaledFontSize, scaledSize } from "app/utils/scaledSizes"

const styles = StyleSheet.create({
  bigText: {
    color: colors.palette.neutral100,
    marginLeft: 30,
  },
  button: {
    borderRadius: scaledSize(11),
    minHeight: scaledSize(44),
    width: scaledSize(193),
  },
  buttonText: {
    fontSize: scaledSize(20),
    fontWeight: "700",
  },
  card: {
    backgroundColor: colors.cardDark,
    borderWidth: 0,
    marginLeft: 18,
    marginRight: 24,
  },
  cardText: {
    backgroundColor: colors.cardDark,
    borderWidth: 0,
    marginLeft: 18,
    marginRight: 24,
  },
  container: {
    backgroundColor: colors.darkBackground,
    paddingTop: 32,
  },
  form: {
    alignItems: "center",
    padding: scaledSize(36),
    paddingBottom: scaledSize(5),
  },
  inputLabel: {
    color: colors.palette.neutral100,
  },
  inputStyle: {
    color: colors.palette.neutral100,
    fontSize: scaledFontSize(15),
    marginHorizontal: scaledSize(20),
    textAlignVertical: "center",
  },
  inputWrapper: {
    backgroundColor: colors.inputBackground,
    borderRadius: scaledSize(11),
    borderWidth: 0,
    height: scaledSize(46),
    justifyContent: "center",
    marginBottom: scaledSize(40),
    width: scaledSize(193),
  },
  logo: {
    width: 136,
  },
  logoContainer: {
    height: 75,
    marginBottom: 20,
    width: "100%",
  },
  logoView: {
    alignItems: "center",
    backgroundColor: colors.darkBackground,
    flex: 1,
    justifyContent: "center",
    width: "100%",
  },
  middleText: {
    color: colors.palette.neutral100,
    marginLeft: 35,
  },

  shadowView: { height: 4 },

  statusBar: {
    backgroundColor: colors.darkBackground,
  },
})

export default styles
