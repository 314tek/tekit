import styled from 'styled-components/native'
import { Grid, Col, Row } from 'atoms'
import { Theme } from 'utils'

export const Wrapper = styled.View`
  flex: 1;
  background-color: ${Theme.colors.background};
`

export const FormWrapper = styled.ScrollView`
  padding-top: 30;
`
