import React, { FC, useCallback, useEffect, useState } from "react"
import { observer } from "mobx-react-lite"
import { Image, View } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { Button, Chart, Screen, Text, TextField } from "app/components"
import LinearGradient from "react-native-linear-gradient"

import { useStores } from "app/models"
import { colors } from "app/theme"
import styles from "./styles"
import Card from "./Card"

const logoImage = require("assets/images/wurq-logo.png")

interface WurqScreenProps extends AppStackScreenProps<"Wurq"> {}

export const WurqScreen: FC<WurqScreenProps> = observer(function WurqScreen() {
  const { historyStore } = useStores()
  const { history, pointsPerWod } = historyStore
  const [points, setPoints] = useState<number | string>("")
  const [name, setName] = useState("")

  useEffect(() => {
    ;(async () => {
      await historyStore.fetchHistory()
    })()

    setPoints(history.points)
    setName(history.name)
  }, [historyStore])

  const handleEditHistory = useCallback(() => {
    historyStore.editHistory({ name, points: +points })
  }, [name, points])

  const handleChangeName = useCallback((text: string) => {
    const filteredText = text.replace(/[^a-zA-Z\s]/g, "")
    setName(filteredText)
  }, [])

  return (
    <Screen
      contentContainerStyle={styles.container}
      preset="scroll"
      StatusBarProps={{ backgroundColor: colors.transparent }}
      statusBarStyle={"light"}
      safeAreaEdges={["bottom"]}
    >
      <View style={styles.logoContainer}>
        <View style={styles.logoView}>
          <Image source={logoImage} style={styles.logo} />
        </View>
        <LinearGradient
          style={styles.shadowView}
          colors={["rgba(0, 0, 0, 0.25)", "rgba(0, 0, 0, 0)"]}
        />
      </View>
      <Text text="Points per WOD" size="sm" style={styles.middleText} />
      <Chart data={pointsPerWod} />
      <Text text="History:" size="lg" style={styles.bigText} />
      <Card data={history} />

      <View style={styles.form}>
        <TextField
          label="Points"
          value={`${points}`}
          onChangeText={setPoints}
          inputWrapperStyle={styles.inputWrapper}
          style={styles.inputStyle}
          LabelTextProps={{ style: styles.inputLabel }}
          keyboardType={"numeric"}
        />
        <TextField
          label="Name"
          value={name}
          onChangeText={handleChangeName}
          inputWrapperStyle={styles.inputWrapper}
          style={styles.inputStyle}
          LabelTextProps={{ style: styles.inputLabel }}
        />

        <Button
          text="Submit"
          style={styles.button}
          textStyle={styles.buttonText}
          onPress={handleEditHistory}
        />
      </View>
    </Screen>
  )
})
