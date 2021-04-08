import React, { useContext, useState } from 'react'

const AppPleopleContext = React.createContext()

export function useAllPeopleContext () {
  return useContext(AppPleopleContext)
}

export function PeopleProvider ({ children }) {
  const [person, setPerson] = useState({})
  function handlePerson (newPerson) {
    return setPerson(newPerson)
  }

  const value = {
    person,
    handlePerson
  }

  return (
    <AppPleopleContext.Provider value={value}>
      {children}
    </AppPleopleContext.Provider>
  )
}
