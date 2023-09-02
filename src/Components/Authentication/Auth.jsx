import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useSelector } from 'react-redux'


const Auth = () => {
    const isLogin = useSelector(state => state.persisitedReducer.isLoggedIn)
    const location = useLocation();
    
  return (
    isLogin? <Outlet />: <Navigate to="/login" state={{ from : location }} replace />
  )
}

export default Auth