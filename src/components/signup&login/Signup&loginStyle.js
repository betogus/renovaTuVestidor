import registerBackground from '../../assets/registerBackground.jpg'

export const styles = {
    imgContainer: {
        width: "60%",
        backgroundImage: `url(${registerBackground})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: 'cover',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        borderRadius: '2rem',
        objectFint: 'contain',
        width: '250px',
        height: '220px',
        marginBottom: '10px'
    },
    container: {
        height: "90.5vh",
        width: "100%",
        display: 'flex',
    }, 
    h1: {
        color: 'white',
        fontWeight: 'bolder'
    },
    form: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textField: {
        display: 'flex',
        flexDirection: 'column',
        width: "70%"
        
    },
    formContainer: {
        width: '40%'
    }
    
}
