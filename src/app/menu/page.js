import React from 'react'
import './menu.css'
import Image from 'next/image';
import { Suspense } from 'react';

const Menu = [
  {name:'Pizza de Pepperoni',img:'/pizza-peperoni.jpg', description:'Mediana $50 <br> Grande  $90 <br>Familiar $165'},
  {name:'Pizza Mexicana',img:'/pizza-mexicana.png', description:'Mediana $50 <br> Grande  $90 <br>Familiar $165'},
  {name:'Pizza de Atún',img:'/pizza-atun.jpg', description:'Mediana $50 <br> Grande  $90 <br>Familiar $165'},
  {name:'Pizza Vegetariana',img:'/pizza-vegetariana.jpg', description:'Mediana $50 <br> Grande  $90 <br>Familiar $165'},
  {name:'Pizza de Champiñones',img:'/pizza-champis.jpg', description:'Mediana $50 <br> Grande  $90 <br>Familiar $165'},
  {name:'Pizza Margarita',img:'/pizza-margarita.jpg', description:'Mediana $50 <br> Grande  $90 <br>Familiar $165'},
];

function menu() {
  return (
    <article className='page-container'>
      <div className='menu-container'>
         <div className='menu-grid'>
         {Menu.map((item, index) => (
            <div 
            key={index} 
            className='menu-item'
            >
            <Image
            width={0}
            height={0}
            src={item.img}
            alt={item.name}
            sizes="100vw"
            className='item-image'
            >
            </Image>
            <div className='description'>
              <h2 className='item-title'>{item.name}</h2>
              <p className='item-detalles' dangerouslySetInnerHTML={{ __html:item.description}}></p>
            </div>
            </div>
          ))}
         </div>
        
      </div>
    </article>
  )
}

export default menu