import CardComponent from "./cardComponent/CardComponent";
import { usuarios } from "../../baseDeDatos/BaseDeDatos";



function ItemListContainer (props) {
    return (
        <div className="d-flex">
          <CardComponent 
            user = {
              {
                logo :`${usuarios.usuario1.logo}`,
                name : `${usuarios.usuario1.name}`,
                clothes: [{
                  img : `${usuarios.usuario1.clothes[0].img}`,
                  name : `${usuarios.usuario1.clothes[0].name}`,
                  size : `${usuarios.usuario1.clothes[0].size}`,
                  price: `${usuarios.usuario1.clothes[0].price}`,
                  stock: `${usuarios.usuario1.clothes[0].stock}`
                }]
              }
            }
          />
      </div>
    )
}

export default ItemListContainer