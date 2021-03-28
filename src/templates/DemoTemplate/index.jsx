import React from 'react'
import { Text } from 'atoms'
import { Header } from 'molecules'
import { Wrapper } from './styled'

const DemoTemplate = ({ label, children, ...others }) => {
  return (
    <>
      <Header title={label} />
      <Wrapper {...others}>{children}</Wrapper>
    </>
  )
}

export default React.memo(DemoTemplate)
