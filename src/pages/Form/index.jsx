import React, { useCallback, useState } from 'react'
import { Wrapper, FormWrapper, FormItemWrapper } from './styled'
import { Text, Icon } from 'atoms'
import { Header, Input, Checkbox, Button } from 'molecules'
import { Theme } from 'utils'
import { useNavigation } from '@react-navigation/native'

const Form = () => {
  const navigation = useNavigation()

  const [search, setSearch] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [checked, setChecked] = useState(false)

  const onGoBack = useCallback(() => {
    navigation.goBack()
  }, [navigation])

  const renderInputs = () => {
    return (
      <>
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
      </>
    )
  }

  const renderCheckboxs = () => {
    return (
      <FormItemWrapper left={30}>
        <Checkbox
          // checked={checked}
          // onChange={setChecked}
          label={'Checkbox'}
          // disabled
        />
      </FormItemWrapper>
    )
  }

  const renderButtons = () => {
    return (
      <>
        <FormItemWrapper>
          <Button
            label='Default Button'
            onPress={() => alert('Default Button')}
          />
        </FormItemWrapper>

        <FormItemWrapper>
          <Button
            label='Right Icon'
            onPress={() => alert('Right Icon')}
            right={<Icon name={'star'} color={Theme.colors.light} />}
          />
          <Button
            label='Left Icon'
            onPress={() => alert('Left Icon')}
            left={<Icon name={'star'} color={Theme.colors.light} />}
            style={{ marginLeft: 15 }}
          />
        </FormItemWrapper>
      </>
    )
  }

  const renderForm = () => {
    return (
      <FormWrapper>
        {renderInputs()}
        {renderCheckboxs()}
        {renderButtons()}
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
