import React from 'react'
import AppContext from './appContext'
export default function AppState(props) {
  return (
    <AppContext.Provider value={{}}>
      {props.children}
    </AppContext.Provider>
  )
}
