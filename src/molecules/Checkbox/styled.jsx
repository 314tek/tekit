import styled from 'styled-components/native'
import { Text, TextInput, MidView } from 'atoms'
import { Constant, Theme } from 'utils'

export const Wrapper = styled.View`
  width: 18px;
  height: 18px;
  border-radius: 4px;
  border-width: 1px;
  border-color: ${Theme.colors.gray_5};
  background-color: ${props =>
    props.checked ? Theme.colors.primary : 'transparent'};
`

export const Mid = styled(MidView)`
  flex: 1;
`

export const Container = styled.View`
  flex-direction: row;
  justify-content: flex-start;
`

export const Row = styled.Pressable`
  flex-direction: row;
  align-items: center;
`

export const Label = styled(Text)`
  margin-left: 10px;
`
