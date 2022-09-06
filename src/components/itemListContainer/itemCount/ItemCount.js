import React, {useState} from 'react'
import Button from '@mui/material/Button';
import  ButtonGroup  from '@mui/material/ButtonGroup';


const ItemCount = ({initial, stock, onAdd}) => {
    
    const [counter, setCounter] = useState(initial);

    const handlerCounterUp = () => setCounter(counter + 1);
        
    const handlerCounterDown = () => setCounter(counter-1) 



  return (
    <div>
        <ButtonGroup
        disableElevation
        variant="contained"
        aria-label="Disabled elevation buttons" className='d-flex flex-column'>
        <div  className="d-flex justify-content-center align-items-center">
        <Button disabled={counter <= 0} onClick={handlerCounterDown} className="mx-3" >-</Button>
        <span>{counter}</span>
        <Button disabled={counter >= stock} onClick={handlerCounterUp} className="mx-3">+</Button>
        </div>
        <Button disabled={stock<=0 || counter === 0} onClick={()=>{onAdd(counter, stock, initial)}} className='my-2'>Agregar</Button>
 
        </ButtonGroup>
                   
    </div>
  )
}

export default ItemCount