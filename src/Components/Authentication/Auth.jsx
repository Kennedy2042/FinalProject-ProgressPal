import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useSelector } from 'react-redux'


const Auth = () => {
    const token = useSelector(state => state.persisitedReducer.isLoggedIn)
    const location = useLocation();
    
  return (
    token? <Outlet />: <Navigate to="/login" state={{ from : location }} replace />
  )
}

export default Auth