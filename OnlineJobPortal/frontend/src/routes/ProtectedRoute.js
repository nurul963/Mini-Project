import React from 'react'
import { useAuth } from '../context/AuthProvider'
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({allowedRoles}) => {
    let {user,loading}=useAuth();
    if(loading){
        return (
            <div className='d-flex justify-content-center align-item-center min-vh-100'>
                <div className='spinner-border text-primary' role='status'>
                    <span className='visually-hidden'>Loading...</span>

                </div>
            </div>
        )
    }
    if(!user){
        return <Navigate to='/' replace/>
    }
    if(allowedRoles && !allowedRoles.includes(user.user_type)){
        return <Navigate to='/unauthorized' replace/>
    }
  return <Outlet/>
}

export default ProtectedRoute