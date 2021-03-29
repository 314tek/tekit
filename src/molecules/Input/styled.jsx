import styled from 'styled-components/native'
import { Text, TextInput, MidView, Icon } from 'atoms'
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
  align-items: center;
  overflow: hidden;
`

export const TextInputBox = styled(TextInput)`
  padding-left: ${props => `${props.paddingLeft}px`}
  padding-right: 10px;
`

export const ColBox = styled(MidView)`
  width: 46px;
  height: 100%;
`

export const Left = styled(ColBox)``

export const Right = styled(ColBox)`
  background-color: ${Theme.colors.gray_6};
`

export const ClearIcon = styled(Icon)`
  padding-right: 6px;
`
