import React, { useCallback } from 'react'
import {
  Container,
  Wrapper,
  TextInputBox,
  Title,
  Left,
  Right,
  ClearIcon
} from './styled'

const Input = ({
  containerStyle,
  title,
  titleStyle,
  left,
  right,
  value,
  onClear,
  ...others
}) => {
  const renderTitle = useCallback(() => {
    if (!title) return null
    return <Title style={titleStyle}>{title}</Title>
  }, [title, titleStyle])

  const renderInput = useCallback(() => {
    return (
      <Wrapper style={containerStyle}>
        {left && <Left>{left}</Left>}
        <TextInputBox value={value} {...others} paddingLeft={left ? 0 : 10} />
        {!!value && !!onClear && (
          <ClearIcon name={'x-circle'} size={14} onPress={onClear} />
        )}
        {right && <Right>{right}</Right>}
      </Wrapper>
    )
  }, [containerStyle, others, left, right, onClear, value])

  return (
    <Container>
      {renderTitle()}
      {renderInput()}
    </Container>
  )
}

export default React.memo(Input)
