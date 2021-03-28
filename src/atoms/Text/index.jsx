import React from 'react'
import { Wrapper } from './styled'

const Text = ({ children, size, ...others }) => {
  return (
    <Wrapper {...others} size={size}>
      {children}
    </Wrapper>
  )
}

export default React.memo(Text)
