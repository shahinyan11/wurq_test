import * as React from "react"
import { FC } from "react"
import { View, ViewStyle } from "react-native"
import { VictoryAxis, VictoryChart, VictoryLine, VictoryScatter } from "victory-native"
import { observer } from "mobx-react-lite"

import { colors, typography } from "app/theme"

export interface ChartProps {
  /**
   * The chart data.
   */
  data?: any[]
}

/**
 * Renders a Victory chart.
 */
export const Chart: FC<ChartProps> = observer(function Chart({ data }) {
  return (
    <View style={$container}>
      <VictoryChart
        // theme={VictoryTheme.material}
        style={{
          background: { fill: "#222B31" },
        }}
        padding={{ top: 8, bottom: 8, left: 32, right: 32 }}
        height={215}
      >
        <VictoryAxis
          dependentAxis
          tickValues={[-20, -10, 0, 10, 20]}
          tickFormat={(tick) => `${tick}`}
          style={{
            axis: $axisStyle,
            tickLabels: $tickLabel,
          }}
        />

        <VictoryLine data={data} style={{ data: $lineStyle }} />
        <VictoryScatter
          style={{
            data: {
              fill: ({ datum }: any) => datum.y >= 0 ? "#A8FF89" : "#FFF",
            },
          }}
          size={7}
          data={data}
        />

      </VictoryChart>
    </View>
  )
})

const $container: ViewStyle = {
  justifyContent: "center",
}

const $lineStyle = {
  stroke: colors.palette.neutral100,
  strokeWidth: 2,
}

const $axisStyle = {
  stroke: colors.palette.neutral100,
  strokeWidth: 0.5,
}

const $tickLabel = {
  fontFamily: typography.fonts.montserrat.normal,
  fontSize: 10,
  padding: 5,
  fill: colors.palette.neutral100,
}
