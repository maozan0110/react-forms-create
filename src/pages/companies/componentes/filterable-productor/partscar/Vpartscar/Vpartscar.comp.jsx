import React from 'react';
import'./Vpartscar.style.css';

const Vpartscar = (props) => {
    return (
        <table className="Vpartscar-container">
            
            <tr>
       <td className="izq">{props.datos.name}</td>
       <td className="center">{props.datos.average}</td>
       <td className="derecha">{props.datos.company}</td>
   </tr> 
         
        
         
        </table>
    
 );
}
export default Vpartscar ;  