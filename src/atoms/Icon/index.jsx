import React from 'react'
import { Wrapper } from './styled'
import FeatherIcon from 'react-native-vector-icons/Feather'
import { Theme } from 'utils'

const Icon = ({ size, color, name, ...others }) => {
  return (
    <Wrapper {...others}>
      <FeatherIcon
        name={name}
        size={size || 22}
        color={color || Theme.colors.gray_3}
      />
    </Wrapper>
  )
}

export default React.memo(Icon)
