import React from 'react'
import { Wrapper } from './styled'

const BaseLayout = ({ children, ...others }) => {
  return <Wrapper {...others}>{children}</Wrapper>
}

export default React.memo(BaseLayout)
