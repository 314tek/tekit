import React from 'react'
import { Wrapper } from './styled'

const Row = ({ children, ...others }) => {
  return <Wrapper {...others}>{children}</Wrapper>
}

export default React.memo(Row)
