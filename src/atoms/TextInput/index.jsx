import React from 'react'
import { Wrapper } from './styled'
import { Theme } from 'utils'

const Input = ({ ...others }) => {
  return <Wrapper placeholderTextColor={Theme.colors.gray_4} {...others} />
}

export default React.memo(Input)
