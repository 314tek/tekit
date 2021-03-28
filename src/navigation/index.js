import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { enableScreens } from 'react-native-screens'
import { Router } from 'utils'
import BottomStack from './BottomStack'
import FromScreen from 'pages/Form'

enableScreens()

const Stack = createStackNavigator()

const RootNavigator = () => {
  return (
    <Stack.Navigator headerMode={'none'}>
      <Stack.Screen name={Router.BOTTOM_STACK} component={BottomStack} />
      <Stack.Screen name={Router.FORM_SCREEN} component={FromScreen} />
    </Stack.Navigator>
  )
}

export default React.memo(RootNavigator)
