import React from 'react'
import { Wrapper } from './styled'

const Col = ({ children, ...others }) => {
  return <Wrapper {...others}>{children}</Wrapper>
}

export default React.memo(Col)
