import {Routes, Route} from 'react-router-dom'   // Navigate


// auth
import {SignIn} from '../pages/SignIn'
import {SignOut} from '../pages/SignOut'



export function AuthRoutes() {
    const user = localStorage.getItem("@rocketnotes:user");
    console.log(user)
    
    return (
    <Routes>
        <Route path="/" element={<SignIn/>}/>
        <Route path="/SignOut" element={<SignOut/>}/>
        {/* { !user && <Route path="*" element={<Navigate to="/signin"/>} /> } */}
    </Routes>
    )
}
