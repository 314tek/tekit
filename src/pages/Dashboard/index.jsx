import React, { useCallback } from 'react'
import { Pressable, Text } from 'react-native'
import { Router } from 'utils'
import { useNavigation } from '@react-navigation/native'
import { Wrapper } from './styled'

const Dashboard = () => {
  const navigation = useNavigation()
  const onPressFormScreen = useCallback(() => {
    navigation.navigate(Router.FORM_SCREEN)
  }, [navigation])

  return (
    <Wrapper label={'Dashboard'}>
      <Pressable onPress={onPressFormScreen}>
        <Text>Form</Text>
      </Pressable>
    </Wrapper>
  )
}

export default React.memo(Dashboard)
