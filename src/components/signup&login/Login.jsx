import React, {useState} from 'react'
import { styles } from './Signup&loginStyle'
import Logo from '../../assets/logo.png'
import { Box } from '@mui/system'
import { Fab, TextField } from '@mui/material'
import * as yup from 'yup';
import { Formik } from 'formik';
import {collection, getDocs, query, where} from 'firebase/firestore'
import "toastify-js/src/toastify.css"
import Toastify from 'toastify-js'
import { Link, useNavigate } from 'react-router-dom';
import { db } from '../../firebase/FirebaseConfig'
import { useUserContext } from '../../Context/userContext/UserContext'

const Login = () => {
  const { setUser} = useUserContext();
  const navigate = useNavigate()
  const [invalidUser, setInvalidUser] = useState(false)


  const yupSchema = yup
	.object()
	.shape({
		email: yup.string().email('Debe ser un email válido').min(4, 'El email debe tener al menos 4 caracteres').required('El email es requerido'),
    password: yup.string().min(6, 'La contraseña debe tener al menos 6 caracteres').required('La contraseña es requerida'),
	})
	.required();

  const submitHandler = async (values, resetForm) => {
      const q = query(collection(db, 'users'), where ('email', '==', values.email))
      const querySnapshot = await getDocs(q)
      const docs = []
      querySnapshot.forEach((doc) => {
        docs.push({...doc.data()})
      });
        resetForm()
        if (docs[0] && docs[0].password === values.password) {
          
          setUser({...docs[0], id: querySnapshot.docs[0].id})
          localStorage.setItem('usuario',JSON.stringify({...docs[0], id: querySnapshot.docs[0].id}) )
          Toastify({
            text: `Bienvenid@ ${docs[0].name}`,
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "top", 
            position: "left", 
            stopOnFocus: true, 
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            onClick: function(){} 
          }).showToast();
          navigate('/') 
        } else {

          setInvalidUser(true)
        }
  };
 
  return (
    <div style={styles.container}>
    <div style={styles.imgContainer}>
      <img src={Logo} alt='logo'style={styles.logo}/>
      <h1 style={styles.h1}>Vendé lo que no usás</h1>
      <h1 style={styles.h1}>Comprá lo que querés</h1>
    </div>
    <div style={styles.formContainer}>
      <h3 className='text-center pt-3'>YA TENÉS CUENTA?</h3>
      <Formik
              initialValues={{ name: '', lastname: '', email: '', dressingRoomNickname: '', password: '', verifyPassword: '' }}
              onSubmit={(values, { resetForm }) => submitHandler(values, resetForm)}
              validationSchema={yupSchema}
            >
              {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isValid,
                  dirty,
              }) => (
        <Box
        component="form"
        sx={{'& > :not(style)': { m: 1, width: '25ch' },}}
        noValidate
        autoComplete="on"
        onSubmit={handleSubmit}
        style={styles.form}
        >

          <TextField 
          id="standard-basic3" 
          type='email'
          label="Mail" 
          variant="standard" 
          name='email'
          onChange={handleChange}
                    value={values.email}
                    onBlur={handleBlur}
          style={styles.textField}

          />
          {errors.email && touched.email && errors.email}

          <TextField 
          id="standard-basic5" 
          label="Contraseña" 
          variant="standard" 
          name='password'
          type='password'
          onChange={handleChange}
                    value={values.password}
                    onBlur={handleBlur}
          style={styles.textField}
          />
          {errors.password && touched.password && errors.password}

          
          <Fab 
          disabled={!(isValid && dirty)}
          onSubmit={handleSubmit}
          variant="extended"
          type='submit'
          color="error"
          style={{width:"70%"}}
          >
            INGRESÁ</Fab>
            { invalidUser && <p>El mail y/o la contraseña no coinciden</p>}
        </Box>
        )}
      </Formik>
      <h3 className='text-center pt-3'>Sos Nuev@?</h3>
      <Link to='/signup' style={{display:"flex", justifyContent:"center", textDecoration:"none"}}>
      <Fab 
          variant="extended"
          type='submit'
          color="error"
          style={{width:"70%"}}
          >
            CREÁ TU CUENTA</Fab>
      </Link>
    </div>
  </div>
)
}

export default Login