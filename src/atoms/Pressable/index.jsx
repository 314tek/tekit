import React from 'react'
import { Wrapper } from './styled'

const Pressable = ({ ...others }) => {
  return <Wrapper {...others} />
}

export default React.memo(Pressable)
