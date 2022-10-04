import React from 'react'
import { useUserContext } from '../../Context/userContext/UserContext'

const User = () => {
    const {user, setUser} = useUserContext()
  return (
    <div className='text-center'>
      <h1 className="text-center">Usuario</h1>
        {user ? (<div><p>usuario: {user.name}</p>
        <p>email: {user.email}</p>
        <p>id: {user.id}</p></div>) :
        <p>No se encuentra logueado</p>
    }
        
    </div>
  )
}

export default User