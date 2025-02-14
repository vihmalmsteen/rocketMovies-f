import {Routes, Route, Navigate} from 'react-router-dom'   // Navigate

// auth
import {SignIn} from '../pages/SignIn'
import {SignOut} from '../pages/SignOut'

export function AuthRoutes() {
    const user = localStorage.getItem("@rocketnotes:user");
    
    return (
    <Routes>
        <Route path="/" element={<SignIn/>}/>
        <Route path="/SignOut" element={<SignOut/>}/>
        { !user && <Route path="*" element={<Navigate to="/"/>} /> }
    </Routes>
    )
}
