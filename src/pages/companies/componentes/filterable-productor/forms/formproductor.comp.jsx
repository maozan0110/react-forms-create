import React, { useState } from 'react';
import './formproductor.style.css'

const FormVpartscar = (props) => {
  
    const [Tpartscar, setTpartscar] = useState('');
    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [average, setAverage] = useState(0);
    const addVpartscar = (event) => {
        event.preventDefault();


        const newVpartscar = {
            id: name,
            name: name,
            company: company,
            average: Number(average),
           };
           props.onAddVpartscar(newVpartscar,Tpartscar);
       
     
        console.log('Tpartscar ' + Tpartscar);
        console.log('name ' + name);
        console.log('company ' + company);
        console.log('average ' + average);
    }
    return (
        <table className="form-productor-container">
        <div >
       <th> Company Video-Games </th>
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
                  Video-Game
    
                   <input type="text" required 
                   placeholder="Video Game Name"
                    value={name}
                    onChange={(event)=>{
                      setName(event.target.value); 
                    }}
                    required minlength="0" maxlength="20"/>
               </td>
       </tr>

       <tr>
               <td>
                  Company <input type="text" required
                  placeholder="Company Name"
                    value={company}
                    onChange={(event)=>{
                      setCompany(event.target.value);
                    }}
                    required minlength="0" maxlength="20"/>
               </td>
       </tr>


           
 <tr>
       <td>
            Average <input type="number" min="0" max="5" pattern="^[0-9]+"  value={average} onChange={(event)=>{
                      setAverage(event.target.value);
                    }}
                    />
               </td>
       </tr>
           
          
     
          
           <tr>
                <td>
                     <button
                     onClick={addVpartscar}
                     >
                         Add Company-Videogame
                     </button>

                     
               </td>
           </tr>
           </form>
    </div>
    </table>
);
    
}
export default FormVpartscar;