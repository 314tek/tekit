import React, { useCallback } from 'react'
import {
  Wrapper,
  HeaderWrapper,
  HeaderGrid,
  ColBox,
  MidBox,
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
    if (!left && !right && !title) return null

    return (
      <HeaderWrapper>
        <HeaderGrid>
          <ColBox>
            <MidBox>{left && left}</MidBox>
          </ColBox>
          <HeaderTitle>
            {titleComponent ? (
              titleComponent
            ) : (
              <Title style={titleStyle}>{title || ''}</Title>
            )}
          </HeaderTitle>
          <ColBox>
            <MidBox>{right && right}</MidBox>
          </ColBox>
        </HeaderGrid>
      </HeaderWrapper>
    )
  }, [left, right, titleComponent, title, titleStyle])

  return (
    <Wrapper {...others}>
      {renderHeader()}
      {children}
    </Wrapper>
  )
}

export default React.memo(Header)
