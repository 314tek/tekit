import React, { useCallback } from 'react'
import { Button } from 'molecules'
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
      <Button onPress={onPressFormScreen} label={'Form screen'} />
    </Wrapper>
  )
}

export default React.memo(Dashboard)
