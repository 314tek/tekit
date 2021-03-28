import styled from 'styled-components/native'
import { Grid, Col } from 'react-native-easy-grid'
import { Text, TextInput } from 'atoms'
import { Constant, Theme } from 'utils'

export const Container = styled.View``

export const Title = styled(Text)`
  margin-left: 15;
  margin-bottom: 8;
`

export const Wrapper = styled.View`
  margin-horizontal: 15;
  height: 46;
  border-width: 1;
  border-color: ${Theme.colors.gray_5};
  border-radius: 4;
`

export const TextInputBox = styled(TextInput)`
  padding-horizontal: 10;
`
