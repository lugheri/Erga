
export interface User{
  id:number;
  date_created:string;
  name:string;
  username:string;
  type_user:string;
  password:string;
  reset:number;
  logged:number;
  status:number;
}

export interface AuthContextType {
  authenticated: boolean | null;
  userData: User;
}

export interface AuthProviderProps{
  children: React.ReactNode;
}

export interface PrivateProps {
  Item: React.ComponentType; // Tipo do componente Item que será renderizado
}

export interface TokenProps {
  userId: number;
}