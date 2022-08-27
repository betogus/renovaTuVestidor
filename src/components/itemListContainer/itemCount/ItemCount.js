import React from 'react'
import Button from '@mui/material/Button';
import  ButtonGroup  from '@mui/material/ButtonGroup';


const ItemCount = (props) => {

    const [counter, setCounter] = React.useState(0);

    const handlerCounterUp = () => {
        if (props.user.clothes[0].stock !== undefined) {
            if (counter < props.user.clothes[0].stock) {
                setCounter(counter + 1) 
            }
        }
        
    }

    const handlerCounterDown = () => {
        if (props.user.clothes[0].stock !== undefined) {
            if (counter>0) {
                setCounter(counter-1)    
            }
        }
    }
        


  return (
    <div>
        <ButtonGroup
        disableElevation
        variant="contained"
        aria-label="Disabled elevation buttons"
        className="d-flex justify-content-center align-items-center">
        <Button onClick={handlerCounterDown} className="mx-3" >-</Button>
        <span>{counter}</span>
        <Button onClick={handlerCounterUp} className="mx-3">+</Button>
        </ButtonGroup>
                   
    </div>
  )
}

export default ItemCount