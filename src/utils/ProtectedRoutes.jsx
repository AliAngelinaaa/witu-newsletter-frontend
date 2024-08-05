import { Outlet, Navigate, } from "react-router-dom";

const ProtectedRoutes = ({userstatus}) => {
    const user = userstatus
    return user ? <Outlet/> : <Navigate to='/'/>
}

export default ProtectedRoutes;