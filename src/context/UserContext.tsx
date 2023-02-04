import React, { useState } from 'react'

type SignInInfo = {
  name: string | null
  photoURL: string | null
  id: string
  email: string | null
}

type UserContextProps = {
  signInInfo?: SignInInfo
  setSignInInfo: React.Dispatch<React.SetStateAction<SignInInfo | undefined>>
}

type ProviderProps = {
  children: JSX.Element
}

const UserContext = React.createContext<UserContextProps | undefined>(undefined)

export const UserContextProvider = ({ children }: ProviderProps) => {
  const [signInInfo, setSignInInfo] = useState<SignInInfo>()

  const value = {
    signInInfo,
    setSignInInfo,
  }

  return (
    <UserContext.Provider value={value}>
      {React.cloneElement(children)}
    </UserContext.Provider>
  )
}

export const useUserContext = () => {
  const context = React.useContext(UserContext)

  if (context === undefined) {
    throw new Error('useUserContext must be used withing a UserContextProvider')
  }

  return context
}
