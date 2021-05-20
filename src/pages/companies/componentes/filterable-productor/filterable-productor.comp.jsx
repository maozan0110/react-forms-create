import React from 'react';
import './filterable-productor.style.css';
import Partscar from './partscar/partscar.com';
import FormVpartscar from './forms/formVpartscar.comp';
import Formproductor from './forms/formproductor.comp';

const Filterableproductor = (props) => {
  
    return (
        
        <div className="filterable-productor-container">
  
            <partscar VpartscarList={props.VpartscarList}/>
            <formVpartscar onAddVpartscar={props.onAddVpartscar}/>
            <formproductor onAddVpartscar={props.onAddVpartscar}/>
      </div>
     
    );
}
export default Filterableproductor;