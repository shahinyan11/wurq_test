import { VictoryTheme } from "victory-native"
import { colors } from "app/theme/colors"
import { typography } from "app/theme/typography"
import { VictoryThemeDefinition } from "victory-core/src/victory-theme/types"

export const customTheme: VictoryThemeDefinition = {
  ...VictoryTheme.grayscale,

  axis: {
    ...VictoryTheme.grayscale.axis,

    style: {
      ...VictoryTheme.grayscale.axis?.style,
      axis: {
        ...VictoryTheme.grayscale.axis?.style?.axis,
        stroke: colors.palette.neutral100,
        strokeWidth: 0.5,
      },
      tickLabels: {
        ...VictoryTheme.grayscale.axis?.style?.tickLabels,
        fontFamily: typography.fonts.montserrat.normal,
        fontSize: 10,
        padding: 5,
        stroke: colors.palette.neutral100,
      },
      grid: {
        fill: "none",
        stroke: "rgba(255, 255, 255, 0.20)",
        strokeDasharray: "4, 4",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        pointerEvents: "painted",
      },
    },
  },

  line: {
    ...VictoryTheme.grayscale.line,
    style: {
      ...VictoryTheme.grayscale.line?.style,
      data: {
        ...VictoryTheme.grayscale.line?.style?.data,
        stroke: colors.palette.neutral100,
        strokeWidth: 2,
      },
    },
  },
}
