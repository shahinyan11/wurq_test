import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { Button, Screen, Text } from "app/components"
import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

interface WurqScreenProps extends AppStackScreenProps<"Wurq"> {}

export const WurqScreen: FC<WurqScreenProps> = observer(function WurqScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()
  const navigation = useNavigation()

  return (
    <Screen style={$root} preset="scroll">
      <Button
        testID="next-screen-button"
        preset="reversed"
        tx="welcomeScreen.letsGo"
        onPress={() =>{
          navigation.navigate("Demo", { screen: "DemoShowroom", params: {} })
        }}
      />
      <Text text="wurq" />
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
}
