import { colors, typography } from "app/theme"
import { scaledFontSize, scaledSize } from "app/utils/scaledSizes"
import { TextStyle, ViewStyle } from "react-native"

export const textDark: TextStyle = {
  color: colors.textGray,
  fontFamily: typography.primary.normal,
}
export const textLight: TextStyle = {
  color: colors.palette.neutral100,
  fontFamily: typography.primary.normal,
}

export const card: ViewStyle = {
  backgroundColor: colors.cardDark,
  flexDirection: "row",
  borderRadius: scaledSize(11),
  height: scaledSize(200),
  marginLeft: scaledSize(18),
  marginRight: scaledSize(24),
  overflow: "hidden",
  borderWidth: 0,
  padding: 0,
  marginTop: scaledSize(55),
}

export const left: ViewStyle = {
  justifyContent: "space-between",
  padding: scaledSize(10),
  paddingRight: scaledSize(5),
  flex: 1,
}
export const row: ViewStyle = {
  alignItems: "center",
  flexDirection: "row",
  justifyContent: "space-between",
}

export const leftTop: ViewStyle = {
  ...row,
  marginBottom: scaledSize(11),
}

export const right: ViewStyle = {
  alignItems: "center",
  backgroundColor: colors.palette.neutral900,
  paddingTop: scaledSize(50),
  width: scaledSize(120),
}


export const date: TextStyle = {
  color: colors.textGrayLite,
  fontSize: scaledFontSize(11),
  fontWeight: "700",
  letterSpacing: -0.12,
  marginBottom: scaledSize(10),
}

export const title: TextStyle = {
  ...textLight,
  fontSize: scaledFontSize(15),
  fontWeight: "700",
  letterSpacing: -0.28,
}

export const icon: ViewStyle = {
  marginRight: scaledSize(35),
}

export const label: TextStyle = {
  ...textDark,
  fontSize: scaledFontSize(11),
  marginRight: 2,
}

export const number: TextStyle = {
  ...textLight,
  marginLeft: scaledSize(35),
  fontWeight: "700",
}

export const textAccent: TextStyle = {
  color: colors.textAccent,
  fontFamily: typography.primary.normal,
  fontWeight: "700",
}

export const totalPoint: TextStyle = {
  ...textDark,
  fontFamily: typography.primary.normal,
  fontWeight: "700",
  fontSize: scaledFontSize(13),
}




