import { createContext, useEffect, useState } from 'react';
import api from '../services/api';
import { AuthContextType,AuthProviderProps,TokenProps } from './Dtos/auth.dto';

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [ userData, setUserData] = useState<UserVerificationRequirement | null>(null);
  const [ authenticated, setAuthenticated] = useState<boolean | null>(null);
  const [ token, setToken] = useState<boolean | null>(null);

  //Validation Data
  const validation = async () => {
    if(localStorage.getItem('Token')){
      try{
        const verificateValidationToken = await api.get('/validation',{
          headers: {            
            authorization: localStorage.getItem('Token')
          }
        })
        if(verificateValidationToken.data){
          const dataToken:TokenProps = verificateValidationToken.data;       
          const getUserData = await api.get(`/getUser/${dataToken.userId}`, {
            headers: {
              authorization: localStorage.getItem('Token')
            }
          });
          setUserData(getUserData.data.response)
          setAuthenticated(true)
          setToken(true)
          return
        }
      }catch(err){
        console.log(err)
      }
    }
    localStorage.removeItem('Token');
    setUserData(null);
    setAuthenticated(false)
    setToken(false)
  }
  
  useEffect(()=>{
    validation()
  },[token])
  
  const contextValue:AuthContextType = {authenticated, userData}    
  return(
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  )

}