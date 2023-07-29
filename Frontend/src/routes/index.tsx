import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { PrivateProps } from '../contexts/Dtos/auth.dto';
//Templates
import { Template, TemplateAdm } from '../components/Template';
import { Login } from '../pages/Login';
import { ForgotPass } from '../pages/forgotPass';
import { Error } from '../pages/Error';
import { LoadingPage } from '../pages/LoadingPage';

import { Home } from '../pages/Home';
import { Profile } from '../pages/Profile';


//Validate Auths
const Private: React.FC<PrivateProps> = ({Item}) => {
  const authenticate = useAuth();  
  return(
    authenticate === undefined ? <LoadingPage/> 
    : authenticate.authenticated === null ? <LoadingPage/> 
      : authenticate.authenticated ? <Item/> : <Login/> 
  );
}

const RoutesApp = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element:<Private Item={Template}/>,
      errorElement:<Error/>,
      children:[
        {
          errorElement:<Error/>,
          children:[
            { index: true, element:<Home/>},             
            {
              path:'/Profile',
              element:<Profile/>,
            }
          ]
        }
      ],     
    },
    {
      path: '/forgotPass',
      element:<ForgotPass/>,
      errorElement:<Error/>,
    }   
  ])

  return(
    <RouterProvider router={router}/>
  )
}
export default RoutesApp;