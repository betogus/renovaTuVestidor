import {styles} from './FormStyle';
import SearchIcon from '@mui/icons-material/Search';


const Form = (props) => {
    
    return (
        <form style={styles.form} onSubmit={props.onSubmit}>
            <div style={styles.container}>
                
                
                    <SearchIcon
                    onSubmit={props.onSubmit}/>
                
                <input type='text' placeholder="Buscar"  onChange={props.onChange} style={styles.input} value={props.search}></input>
            </div>
        </form>
    )
}

export default Form;