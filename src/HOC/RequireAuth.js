import {  useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
const RequireAuth = ({isLoginPage=false}) => {
    const { auth } = useSelector((state) => state.authReducer)
    if(isLoginPage){
        return !auth?.role ? <Outlet /> : auth?.role=="admin"?
         <Navigate to="/admin/student" replace />: 
         <Navigate to="/" replace />
       
    }
 
    return auth?.role ? <Outlet /> : <Navigate to="/" replace />

}

export default RequireAuth