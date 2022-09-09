import {styles} from './FormStyle';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';


const Form = (props) => {
    
    return (
        <form style={styles.form}>
            <div style={styles.container}>
                <Link to={`/${props.searchInput}`}>
                    <SearchIcon/>
                </Link>
                <input type='text' placeholder="Buscar"  onChange={props.onChange} style={styles.input} value={props.search}></input>
            </div>
        </form>
    )
}

export default Form;