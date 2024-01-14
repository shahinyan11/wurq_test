import { Dimensions } from "react-native"

const { width, height } = Dimensions.get("window")
const DEF_HEIGHT = 932
const DEF_WIDTH = 430

const scaleWidth = width / DEF_WIDTH
const scaleHeight = height / DEF_HEIGHT
const scale = Math.min(scaleWidth, scaleHeight)

export const scaledSize = (size: number) => size * scaleWidth

export const scaledFontSize = (size: number) => {
  const responsiveText = Math.ceil(size * scale)
  return responsiveText < 8 ? 8 : responsiveText
}
