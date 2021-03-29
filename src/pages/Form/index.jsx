import React, { useCallback, useState } from 'react'
import { Wrapper, FormWrapper } from './styled'
import { Text, Icon } from 'atoms'
import { Header, Input } from 'molecules'
import { useNavigation } from '@react-navigation/native'

const Form = () => {
  const navigation = useNavigation()

  const [search, setSearch] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const onGoBack = useCallback(() => {
    navigation.goBack()
  }, [navigation])

  const renderForm = () => {
    return (
      <FormWrapper>
        <Input placeholder={'Text'} />
        <Input
          placeholder={'Search'}
          right={<Icon name={'search'} />}
          value={search}
          onChangeText={setSearch}
          onClear={() => setSearch('')}
        />
        <Input placeholder={'User'} left={<Icon name={'user'} />} />
        <Input
          placeholder={'Password'}
          left={<Icon name={'lock'} />}
          secureTextEntry={!showPassword}
          right={
            <Icon
              name={!showPassword ? 'eye' : 'eye-off'}
              size={18}
              onPress={() => setShowPassword(!showPassword)}
            />
          }
        />
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
