import React from 'react'
import { Wrapper } from './styled'

const BaseText = ({ children, ...others }) => {
  return <Wrapper {...others}>{children}</Wrapper>
}

export default React.memo(BaseText)
