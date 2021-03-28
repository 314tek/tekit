import React, { useCallback } from 'react'
import {
  Wrapper,
  HeaderWrapper,
  HeaderGrid,
  Left,
  Right,
  HeaderTitle,
  Title
} from './styled'

const Header = ({
  left,
  right,
  title,
  titleComponent,
  titleStyle,
  children,
  ...others
}) => {
  const renderHeader = useCallback(() => {
    return (
      <HeaderWrapper>
        <HeaderGrid>
          <Left>{left && left}</Left>
          <HeaderTitle>
            {titleComponent ? (
              titleComponent
            ) : (
              <Title style={titleStyle}>{title || ''}</Title>
            )}
          </HeaderTitle>
          <Right>{right && right}</Right>
        </HeaderGrid>
      </HeaderWrapper>
    )
  }, [left, right, titleComponent, title, titleStyle])
  return (
    <Wrapper {...others}>
      {renderHeader()}
      {renderHeader}
      {children}
    </Wrapper>
  )
}

export default React.memo(Header)
