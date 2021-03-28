import React, { useCallback } from 'react'
import { Container, Wrapper, TextInputBox, Title } from './styled'

const Input = ({ containerStyle, title, ...others }) => {
  return (
    <Container>
      {title && <Title>{title}</Title>}
      <Wrapper style={containerStyle}>
        <TextInputBox {...others} />
      </Wrapper>
    </Container>
  )
}

export default React.memo(Input)
