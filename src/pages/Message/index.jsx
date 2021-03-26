import React from 'react'
import { Wrapper } from './styled'

const Message = () => {
  return <Wrapper label={'Message'} />
}

export default React.memo(Message)
