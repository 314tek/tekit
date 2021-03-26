import React from 'react'
import { Text, Wrapper } from './styled'

const DemoTemplate = ({ label, children, ...others }) => {
  return (
    <Wrapper {...others}>
      <Text>{label}</Text>
      {children}
    </Wrapper>
  )
}

export default React.memo(DemoTemplate)
