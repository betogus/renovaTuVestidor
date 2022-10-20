import React, {useState} from 'react'
import { styles } from './Signup&loginStyle'
import Logo from '../../assets/logo.png'
import { Box } from '@mui/system'
import { Fab, TextField } from '@mui/material'
import * as yup from 'yup';
import { Formik } from 'formik';
import { addDoc, collection, query, where, getDocs } from 'firebase/firestore'
import { db } from '../../firebase/FirebaseConfig'
import "toastify-js/src/toastify.css"
import Toastify from 'toastify-js'
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../../Context/userContext/UserContext'


const yupSchema = yup
	.object()
	.shape({
		name: yup
			.string()
			.required('El nombre es requerido'),
		lastname: yup
			.string()
			.required('El apellido es requerido'),
		email: yup.string().email('Debe ser un email válido').min(4, 'El email debe tener al menos 4 caracteres').required('El email es requerido'),
    dressingRoomNickname: yup.string().min(4, 'El apodo debe tener al menos 4 caracteres').required('El apodo es requerido'),
    phone: yup.string().min(7, 'el número de teléfono debe tener al menos 7 caracteres' ).required('el teléfono es requerido'),
    password: yup.string().min(6, 'La contraseña debe tener al menos 6 caracteres').required('La contraseña es requerida'),
    verifyPassword: yup.string().min(6, 'La contraseña debe tener al menos 6 caracteres').required('debe verificar su contraseña')
	})
	.required();  

const Signup = () => {
  
  const { setUser} = useUserContext();
  const navigate = useNavigate()
  const [invalidUser, setInvalidUser] = useState(false)
  const submitHandler = async (values, resetForm) => {
    if (values.password === values.verifyPassword) {
      const q = query(collection(db, 'users'), where ('email', '==', values.email))
      const querySnapshot = await getDocs(q)
      const docs = []
      querySnapshot.forEach((doc) => {
        docs.push({...doc.data()})
      });
      if (!docs[0]) {
        const docRef = await addDoc(collection(db, 'users'), {...values});
        await setUser({...values, id: docRef.id})
        localStorage.setItem("usuario", JSON.stringify({...values, id: docRef.id}))

        resetForm()
        Toastify({
          text: `¡Registro completo! Tu id es ${docRef.id}`,
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
        navigate('/')
      } else {
        setInvalidUser(true)
      }
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
            id="standard-basic1" 
            label="Nombre (dato privado)" 
            type='text'
            variant="standard" 
            name='name'
            onChange={handleChange}
					  value={values.name}
					  onBlur={handleBlur}
            style={styles.textField}
            />
            {errors.name && touched.name && errors.name}

            <TextField 
            id="standard-basic2" 
            label="Apellido (dato privado)" 
            variant="standard" 
            name='lastname'
            onChange={handleChange}
					  value={values.lastname}
					  onBlur={handleBlur}
            style={styles.textField}

            />
            {errors.lastname && touched.lastname && errors.lastname}

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
            id="standard-basic4" 
            label="Apodo de tu vestidor"
            type='text' 
            variant="standard" 
            name='dressingRoomNickname'
            onChange={handleChange}
					  value={values.dressingRoomNickname}
					  onBlur={handleBlur}
            style={styles.textField}

            />
            {errors.dressingRoomNickname && touched.dressingRoomNickname && errors.dressingRoomNickname}

            <TextField 
            id="standard-basic7" 
            label="Teléfono" 
            type='number'
            variant="standard" 
            name='phone'
            onChange={handleChange}
					  value={values.phone}
					  onBlur={handleBlur}
            style={styles.textField}
            />
            {errors.phone && touched.phone && errors.phone}

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

            <TextField 
            id="standard-basic6" 
            label="Verificar Contraseña"
            type='password' 
            variant="standard" 
            name='verifyPassword'
            onChange={handleChange}
					  value={values.verifyPassword}
					  onBlur={handleBlur}
            style={styles.textField}

            />
            {errors.verifyPassword && touched.verifyPassword && errors.verifyPassword}
            
            <Fab 
            disabled={!(isValid && dirty)}
            onSubmit={handleSubmit}
            variant="extended"
            type='submit'
            color="error"
            style={{width:"70%"}}
            >
              CREAR CUENTA</Fab>
            <p>Al crear la cuenta, aceptás los <span style={{cursor: "pointer", textDecoration: "underline"}}>Términos y condiciones</span></p>
            { values.password !== values.verifyPassword && <p>Las contraseñas no coinciden</p>}
            {invalidUser && <p>El mail ya se encuentra registrado</p>}
          </Box>
	      )}
        </Formik>

        </div>
    </div>
  )
}

export default Signup
