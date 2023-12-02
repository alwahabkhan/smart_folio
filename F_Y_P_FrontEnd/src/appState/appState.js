import React, { useState } from 'react'
import AppContext from './appContext'
export default function AppState(props) {
  const [letterQuestionare, setletterQuestionare] = useState({
    specificJob:'',
    strengths:[],
    experience:'',
    recentJobTitle:'',
    isInSchool:'',
    workingStyle:'',
    jobApplyingFor:{
      position:'',
      company:''
    },
    topSkills:[],
    kindOfSchool:'',
  })
  return (
    <AppContext.Provider value={{letterQuestionare, setletterQuestionare}}>
      {props.children}
    </AppContext.Provider>
  )
}
