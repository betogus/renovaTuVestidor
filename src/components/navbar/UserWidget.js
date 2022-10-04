import React from 'react'
import { useUserContext } from '../../Context/userContext/UserContext'
import { styles } from './NavBarStyles'
import userCheck from './person-check-fill.svg'
import userDash from './person-dash-fill.svg'

const UserWidget = () => {
  const {user, setUser} = useUserContext()
  return (
    <div>
        <div className="bg-white" style={styles.cartContainer}>
            {user ? <img src={userCheck} alt="user" style={{width: "30px"}}/> : <img src={userDash} alt="user" style={{width: "30px"}}/>}
        </div>
    </div>
  )
}

export default UserWidget