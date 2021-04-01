import styled from 'styled-components/native'
import { Grid, Col, Row } from 'atoms'
import { Theme } from 'utils'

export const Wrapper = styled.View`
  flex: 1;
  background-color: ${Theme.colors.background};
`

export const FormWrapper = styled.ScrollView`
  padding-top: 30px;
`

export const FormItemWrapper = styled.View`
  margin-right: 15px;
  margin-left: ${props => (props.left ? `${props.left}px` : '15px')};
  margin-top: 10px;
`
