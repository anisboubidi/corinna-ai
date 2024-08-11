import { AuthContextProvider } from '@/src/context/use-auth-context'
import React from 'react'

type Props = {children:React.ReactNode}


const SignUpFormProvider = ({children}: Props) => {
  return <AuthContextProvider>
    <FormPrvider></FormPrvider>
  </AuthContextProvider>
  
}