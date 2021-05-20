import React, {useState} from 'react';
 import Filterableproductor from './componentes/filterable-productor/filterable-productor.comp';
 
const ProductorPages = () => {
  let VpartscarList = [
    {   
        
        id:"t1",
        name:'Intern Parts',
      
        vpartscar:[
            {              
                id:"t1v1",
                name:"Tires",
                average:'99',
                company: 'Michelin',
              
            },
            {
                id:"t1v2",
                name:"Piston",
                average:'199',
                company : 'Suzuki',
            },
            {
                id:"t1v3",
                name:"Biela",
                average:'4.29',
                company : 'Ford',
            },
            {
                id:"t1v4",
                name:"Culata",
                average:'91',
                company : 'Chevy',
            },
            {
                id:"t1v5",
                name:"Block",
                average:'87',
                company : 'Subaru',
            }
        ]
    },
    {
     
        id:"t2",
        name:'Breaks',

        vpartscar:[
            {
                id:"t2v1",
                name:"PistonBreak",
                average:'38',
                company : 'Atena',
            },
            {
                id:"t2v2",
                name:"BrakeDisk",
                average:'65',
                company : 'Korean',
            },
            {
                id:"t2v3",
                name:"liquidBrake",
                average:'9',
                company : 'oilbrasilian',
            },
            {
                id:"t2v4",
                name:"Caliper",
                average:'29',
                company : 'Korean',
            },
            {
                id:"t2v5",
                name:"tablet",
                average:'41',
                company : 'Sofasa',
            }
        ]
    },
    {
      
        id:"t3",
        name:'Luxury',

        vpartscar:[
            {
                id:"t3v1",
                name:"Radio",
                average:'400',
                company : 'Pioner',
            },
            {
                id:"t3v2",
                name:"Alarm",
                average:'120',
                company : 'Nemesis',
            },
            {
                id:"t3v3",
                name:"Polarized",
                average:'17',
                company : 'MuMovil',
            },
            {
                id:"t3v4",
                name:"Sound",
                average:'5.0',
                company : 'Sparco',
            },
            {
                id:"t3v5",
                name:"ElectricGlass",
                average:'81',
                company : 'Nemesis',
            }
        ]
    }
   
];
const [Vpartscar, setVpartscar] = useState (VpartscarList);  
return (
    
    <div>
         <> 
         <Filterableproductor
           VpartscarList={Vpartscar}

           onAddVpartscar={(newVpartscarObj, TypeId)=>{
     
               const newVpartscar = [];
               for(let i=0; i<Vpartscar.length; i++){
                   if(Vpartscar[i].id !== TypeId){
                      newVpartscar.push(Vpartscar[i]);
                   }
                   else{
                      newVpartscar.push(
                          {
                              ...Vpartscar[i],
                              Vpartscar:[...Vpartscar[i].vpartscar, newVpartscarObj]
                          }
                          );
                   }
               }
             
               setVpartscar(newVpartscar);
               console.log(newVpartscar);
            
           }}
       
        
         /> 
         </>
   <div />
       
    </div>
      );
}
export default ProductorPages;