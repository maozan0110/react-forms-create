import React from 'react';
import'./partscar.style.css';
import Tpartscar from './Tpartscar/Tpartscar.com';
import Vpartscar from './Vpartscar/Vpartscar.comp';


const Partscar = (props) => {
    
 return (
             <table className="partscar-container">
      
                 <div>
             {props.Vpartscar.map((Tpartscar,index) =>{
               return(
                <div key={(Tpartscar.id)}>
                
              <Tpartscar categoryName={Tpartscar.name}/>
     <div className="lis1">Vparts-car    Average      Company</div>
           {(Tpartscar.Vpartscar).map((datos, indexProduct)=>{
                   return(
                      <div>
                    <Vpartscar
                    key={datos.id} 
                    datos={datos}/>
                  </div>
                 );
                })}
                </div>
                );
              })}
              </div>
            </table>
         );

}
export default Partscar;