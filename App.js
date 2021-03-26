/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import SystemProvider from 'system/provider'
import RootNavigator from './src/navigation'

const App = props => {
  return (
    <SafeAreaProvider>
      <SystemProvider>
        <NavigationContainer>
          <RootNavigator {...props} />
        </NavigationContainer>
      </SystemProvider>
    </SafeAreaProvider>
  )
}

export default React.memo(App)
