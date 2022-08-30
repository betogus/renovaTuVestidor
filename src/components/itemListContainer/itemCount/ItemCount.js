import React from 'react'
import Button from '@mui/material/Button';
import  ButtonGroup  from '@mui/material/ButtonGroup';


const ItemCount = (props) => {

    const [counter, setCounter] = React.useState(0);
    const [stock, setStock] = React.useState(props.user.clothes[0].stock);
    const [initial, setInitial] = React.useState(props.user.clothes[0].initial);

    const handlerCounterUp = () => {
        if (stock !== undefined) {
            if (counter < stock) {
                setCounter(counter + 1);
               
            }
        }
        
    }

    const handlerCounterDown = () => {
        if (stock !== undefined) {
            if (counter>0) {
                setCounter(counter-1) 
              
            }
        }
    }
        
    const onAdd = () => {
        props.user.clothes[0].onAdd(counter, initial, stock)
        setInitial(initial + counter);
        setStock(stock - counter)
        setCounter(0);
        
    }

  return (
    <div>
        <ButtonGroup
        disableElevation
        variant="contained"
        aria-label="Disabled elevation buttons" className='d-flex flex-column'>
        <div  className="d-flex justify-content-center align-items-center">
        <Button onClick={handlerCounterDown} className="mx-3" >-</Button>
        <span>{counter}</span>
        <Button onClick={handlerCounterUp} className="mx-3">+</Button>
        </div>
        <Button onClick={onAdd} className='my-2'>Agregar</Button>
 
        </ButtonGroup>
                   
    </div>
  )
}

export default ItemCount