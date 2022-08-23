import LogoUsuario1 from './usuario.png';
import Ropa1Usuario1 from './clothes1.jpeg';
import Ropa2Usuario1 from './clothes2.jpeg';
import Ropa3Usuario1 from './clothes3.jpeg';

export const usuarios = {
    usuario1 : {
        logo: `${LogoUsuario1}`,
        name : "Et-Voila",
        clothes: 
            [{
                img: `${Ropa1Usuario1}`,
                name: "Camisa",
                size: "S",
                price: 2800
            },
            {
                img: `${Ropa2Usuario1}`,
                name: "Pantalón Jazmín Chebar",
                size: "M",
                price: 8900
            },
            {
                img: `${Ropa3Usuario1}`,
                name: "Jean Levis",
                size: "Único",
                price: 2800
            },  
            ]
        
    }
}