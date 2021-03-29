import React from 'react'
import { Wrapper } from './styled'

const MidView = ({ children, ...others }) => {
  return <Wrapper {...others}>{children}</Wrapper>
}

export default React.memo(MidView)
