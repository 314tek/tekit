import styled from 'styled-components/native'
import { Grid, Col } from 'react-native-easy-grid'
import { Text } from 'atoms'
import { Constant } from 'utils'

export const Wrapper = styled.View`
  padding-top: ${Constant.layout.navPadding};
  width: ${Constant.layout.screenWidth};
  background: white;
`
export const HeaderWrapper = styled.View`
  height: 42px;
`
export const HeaderGrid = styled(Grid)``

export const Left = styled(Col)`
  width: 42px;
  height: 100%;
  justify-content: center;
  align-items: center;
`

export const Right = styled(Col)`
  width: 42px;
  height: 100%;
  justify-content: center;
  align-items: center;
`

export const HeaderTitle = styled(Col)`
  height: 100%;
  justify-content: center;
  align-items: center;
`

export const Title = styled(Text)`
  font-weight: bold;
`
