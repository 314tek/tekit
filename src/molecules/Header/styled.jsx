import styled from 'styled-components/native'

import { Text, MidView, Grid, Col } from 'atoms'
import { Constant } from 'utils'

export const Wrapper = styled.View`
  padding-top: ${`${Constant.layout.navPadding}`};
  width: ${`${Constant.layout.screenWidth}px`};
  background: white;
`
export const HeaderWrapper = styled.View`
  height: 42px;
`
export const HeaderGrid = styled(Grid)``

export const ColBox = styled(Col)`
  width: 42px;
  height: 100%;
`

export const MidBox = styled(MidView)`
  flex: 1;
`

export const HeaderTitle = styled(Col)`
  height: 100%;
  justify-content: center;
  align-items: center;
`

export const Title = styled(Text)`
  font-weight: bold;
`
