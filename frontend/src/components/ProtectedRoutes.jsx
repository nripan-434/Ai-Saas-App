import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

const ProtectedRoutes = ({children,role})=>{
    const {user,status}=useSelector(x => x.auth)
     if (status === "pending") 
        return  <div> loading</div>
     ;
    if(!user ){
         return <Navigate to='/login' replace/>}
    if(role && user.role!==role){
        return <Navigate to='/register' replace/>
    }
    return children
}
export default ProtectedRoutes