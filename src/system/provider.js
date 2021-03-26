import React from 'react'

export const SystemContext = React.createContext({})

const SystemProvider = ({ children }) => {
  const [shared, setShared] = React.useState({})

  const value = React.useMemo(() => {
    shared, setShared
  }, [shared])

  return (
    <SystemContext.Provider value={value}>{children}</SystemContext.Provider>
  )
}

export default SystemProvider
