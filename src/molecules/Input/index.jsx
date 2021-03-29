import React, { useCallback } from 'react'
import { Container, Wrapper, TextInputBox, Title, Right } from './styled'

const Input = ({ containerStyle, title, titleStyle, right, ...others }) => {
  const renderTitle = useCallback(() => {
    if (!title) return null
    return <Title style={titleStyle}>{title}</Title>
  }, [title, titleStyle])

  const renderInput = useCallback(() => {
    return (
      <Wrapper style={containerStyle}>
        <TextInputBox {...others} />
        {right && <Right>{right}</Right>}
      </Wrapper>
    )
  }, [containerStyle, others])

  return (
    <Container>
      {renderTitle()}
      {renderInput()}
    </Container>
  )
}

export default React.memo(Input)
