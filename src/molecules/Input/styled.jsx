import styled from 'styled-components/native'
import { Text, TextInput } from 'atoms'
import { Constant, Theme } from 'utils'

export const Container = styled.View`
  margin-vertical: 5px;
`

export const Title = styled(Text)`
  margin-left: 15px;
  margin-bottom: 8px;
`

export const Wrapper = styled.View`
  flex-direction: row;
  margin-horizontal: 15px;
  height: 46px;
  border-width: 1px;
  border-color: ${Theme.colors.gray_5};
  border-radius: 4px;
  overflow: hidden;
`

export const TextInputBox = styled(TextInput)`
  padding-horizontal: 10px;
`

export const Right = styled.View`
  width: 46px;
  height: 100%;
  background-color: ${Theme.colors.gray_6};
  justify-content: center;
  align-items: center;
`
