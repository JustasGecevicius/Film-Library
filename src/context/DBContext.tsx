import React from 'react'
import { Firestore } from 'firebase/firestore'

type DBContextProps = {
  db: Firestore
}

export const DBContext = React.createContext<DBContextProps | undefined>(
  undefined
)

export const useDBContext = () => {
  const context = React.useContext(DBContext)

  if (context === undefined) {
    throw new Error('useDBContext must be used withing a DBContext.Provider')
  }

  return context
}
