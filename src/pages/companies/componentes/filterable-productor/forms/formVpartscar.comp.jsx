import React, { useState } from 'react';
import './formVpartscar.style.css'

const FormVpartscar = (props) => {
  
    const [tpartscar, settpartscar] = useState('');
    const [name, setName] = useState('');
    const [average, setAverage] = useState(0);
    const addtpartscar = (event) => {
        event.preventDefault();


        const newvpartscar = {
            id: name,
            name: name,
            average: Number(average),
           };
           props.onAddVpartscar(newvpartscar,tpartscar);
       
     
        console.log('tpartscar ' + tpartscar);
        console.log('name ' + name);
        console.log('average ' + average);
    }
    return (
        <table className="form-Vpartscar-container">
        <div >
       <th> Video-Games Rating </th>
        <form>
     
      
       <tr>
               <td>
             Type Video-Game <select value={tpartscar} onChange={(event)=>{
                   settpartscar(event.target.value);
                    }}
       >
              <option value="t1">News</option>
              <option value="t2">Trends</option> 
              <option value="t3">Bests</option> 
       </select>
               </td>

       </tr>
                 
       <tr>
               <td>
                  Video-Game <input type="text"
                    value={name}
                    onChange={(event)=>{
                      setName(event.target.value);
                    }}
                   />
               </td>
       </tr>

           
 <tr>
       <td>
            Average <input type="number"  value={average} onChange={(event)=>{
                      setAverage(event.target.value);
                    }}
                   />
               </td>
       </tr>
           
          
     
          
           <tr>
                <td>
                     <button
                     onClick={addtpartscar}
                     >
                         Añadir
                     </button>
               </td>
           </tr>
           </form>
    </div>
    </table>
);
    
}
export default FormVpartscar;