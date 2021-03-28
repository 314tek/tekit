import React, { useCallback } from 'react'
import { Wrapper, FormWrapper } from './styled'
import { Text, Icon } from 'atoms'
import { Header, Input } from 'molecules'
import { useNavigation } from '@react-navigation/native'

const Form = () => {
  const navigation = useNavigation()

  const onGoBack = useCallback(() => {
    navigation.goBack()
  }, [navigation])

  const renderForm = () => {
    return (
      <FormWrapper>
        <Input placeholder={'Text'} />
      </FormWrapper>
    )
  }

  return (
    <Wrapper>
      <Header
        title={'Form'}
        left={<Icon name='arrow-left' onPress={onGoBack} />}
      />
      {renderForm()}
    </Wrapper>
  )
}

export default React.memo(Form)
