import React, { useCallback } from 'react'
import { Container, Wrapper, Label, ColBox } from './styled'

const Button = ({ label, left, right, children, labelStyle, ...others }) => {
  const renderButton = useCallback(() => {
    return (
      <Wrapper {...others}>
        {!!left && <ColBox>{left}</ColBox>}
        {!!children ? children : <Label style={labelStyle}>{label}</Label>}
        {!!right && <ColBox>{right}</ColBox>}
      </Wrapper>
    )
  }, [left, right, label, children, labelStyle, others])

  return <Container>{renderButton()}</Container>
}

export default React.memo(Button)
