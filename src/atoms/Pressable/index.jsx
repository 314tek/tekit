import React from 'react'
import { Wrapper } from './styled'

const Pressable = ({ hitSlop, ...others }) => {
  return <Wrapper {...others} hitSlop={hitSlop || 10} />
}

export default React.memo(Pressable)
