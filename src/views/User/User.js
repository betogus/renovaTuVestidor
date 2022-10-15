import { Table, TableHead, TableRow, TableContainer, TableCell, TableBody } from '@mui/material'
import { query, collection, where, getDocs } from 'firebase/firestore'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUserContext } from '../../Context/userContext/UserContext'
import { db } from '../../firebase/FirebaseConfig'
import Toastify from 'toastify-js'

const User = () => {
    const {user, setUser} = useUserContext()
    const [orders, setOrders] = useState([])

      const getOrders = async (user) => {
        const q = query(collection(db, 'orders'), where ('buyer.email', '==', user.email))
        const querySnapshot = await getDocs(q)
        const docs = []
        querySnapshot.forEach((doc) => {
          docs.push({...doc.data(), id: doc.id})
        });
        setOrders(docs)
        
      }
      getOrders(user)

      const navigate = useNavigate()

    const logOut = () => {
      setUser()
      localStorage.clear()
      navigate('/')
      Toastify({
        text: `Ha cerrado sesión`,
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function(){} // Callback after click
      }).showToast();
    }

  return (
    <div className='text-center'>
      <h1 className="text-center">Mis datos</h1>
      
      {user ? 
        <div>
          
          <h2>Datos de cuenta</h2>
          <p>usuario: {user.name} {user.lastname}</p>
          <p>email: {user.email}</p>
          <p>id: {user.id}</p>
          <button onClick={logOut}>Cerrar sesión</button>
          <h2>Ordenes de compra</h2>
          <TableContainer style={{display: "flex", justifyContent: "center"}}>

              <Table sx={{ maxWidth: 700, textAlign: "center" }} aria-label="a dense table">
                <TableHead>
                  <TableRow>
                  <TableCell>Id de la orden</TableCell>
                  <TableCell>Fecha</TableCell>
                  <TableCell>Monto</TableCell>
                    <TableCell>Producto</TableCell>
                    <TableCell align="right">Cantidad</TableCell>
                    <TableCell align="right">Precio</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                {orders.map((order) => (
                  order.items.map((item) => (
                    <TableRow
                      key={item.name}
                      
                    >
                      <TableCell component="th" scope="row">
                        {order.id}
                      </TableCell>
                      <TableCell align="right">{order.date.toString()}</TableCell>
                      <TableCell align="right">{order.total}</TableCell>
                      <TableCell align="right">{item.name}</TableCell>
                      <TableCell align="right">{item.quantity}</TableCell>
                      <TableCell align="right">{item.price}</TableCell>

                    </TableRow>
                  ))
                ))}
                </TableBody>
              </Table>
          </TableContainer>
        </div>
      : <p>No se encuentra logueado</p>}
    </div> 
  )
}

export default User

