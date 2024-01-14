import React, { FC } from "react"
import { View } from "react-native"
import moment from "moment"
import { observer } from "mobx-react-lite"

import { IconHeart } from "assets/svgs"
import { Text } from "app/components"
import { HistoryStore } from "app/models/HistoryStore"
import * as styles from "./styles"

type CardProps = { data: HistoryStore["history"] }

const Card: FC<CardProps> = observer(function Card({ data }) {
  return (
    <View style={styles.card}>
      <View style={styles.left}>
        <View>
          <View style={styles.leftTop}>
            <View>
              <Text style={styles.date} text={moment(data?.dateTime).format("DD/MM/YYYY")} />
              <Text style={styles.title} text={data?.name} />
            </View>
            <IconHeart style={styles.icon} />
          </View>
          <View style={styles.row}>
            <View style={styles.row}>
              <Text text="Time:" size="xxs" style={styles.label} />
              <Text text={`${data?.time}`} size="sm" style={styles.textLight} />
            </View>
            <View style={styles.row}>
              <Text text="Rest:" style={styles.label} />
              <Text text={`${data?.rest} `} style={styles.textLight} />
              <Text text={`| 5%`} style={styles.textLight} />
            </View>

            <Text text={`${data?.hr}`} size="sm" style={styles.number} />
          </View>
        </View>
        <View>
          <Text text={data?.exercises} size="xxs" style={styles.textLight} />
        </View>
      </View>
      <View style={styles.right}>
        <Text text={`+${data?.points}`} size="xxl" style={styles.textAccent} />
        <Text text="Total Points" style={styles.totalPoint} />
      </View>
    </View>
  )
})

export default Card
