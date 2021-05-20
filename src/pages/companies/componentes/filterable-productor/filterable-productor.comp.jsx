import React from 'react';
import './filterable-productor.style.css';
import partscar from './partscar/partscar.com';
import formVpartscar from './forms/formVpartscar.comp';
import formproductor from './forms/formproductor.comp';

const filterableproductor = (props) => {
  
    return (
        
        <div className="filterable-productor-container">
  
            <partscar videogameList={props.videogameList}/>
            <formVpartscar onAddVideogame={props.onAddVideogame}/>
            <formproductor onAddVideogame={props.onAddVideogame}/>
      </div>
     
    );
}
export default filterableproductor;