import React from 'react'
import { Wrapper } from './styled'

const Grid = ({ children, ...others }) => {
  return <Wrapper {...others}>{children}</Wrapper>
}

export default React.memo(Grid)
