import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { Router } from 'utils'

const Stack = createStackNavigator()

const AuthorizedStack = () => {
  return (
    <Stack.Navigator
      lazy={true}
      headerMode={'none'}
      initialRouteName={Router.BOTTOM_TAB}
      screenOptions={{
        animationEnabled: true,
        gestureEnabled: false
      }}
    ></Stack.Navigator>
  )
}

export default React.memo(AuthorizedStack)
