import React, { useState } from 'react';
import './formVpartscar.style.css'

const formVpartscar = (props) => {
  
    const [Tpartscar, setTpartscar] = useState('');
    const [name, setName] = useState('');
    const [average, setAverage] = useState(0);
    const addTpartscar = (event) => {
        event.preventDefault();


        const newVpartscar = {
            id: name,
            name: name,
            average: Number(average),
           };
           props.onAddVpartscar(newVpartscar,Tpartscar);
       
     
        console.log('Tpartscar ' + Tpartscar);
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
             Type Video-Game <select value={Tpartscar} onChange={(event)=>{
                   setTpartscar(event.target.value);
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
                     onClick={addTpartscar}
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
export default formVpartscar;