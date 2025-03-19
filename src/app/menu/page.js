import React from 'react'
import './menu.css'
import Image from 'next/image';

const Menu = [
  {name:'Pizza de Pepperoni',img:'/pizza-peperoni.jpg', description:'Mediana $50 <br> Grande  $90 <br>Familiar $165'},
  {name:'Pizza Mexicana',img:'/pizza-peperoni.jpg', description:'No'},
  {name:'Pizza de Pepperoni',img:'/pizza-peperoni.jpg', description:'Grande mediana'},
  {name:'Pizza de Pepperoni',img:'/pizza-peperoni.jpg', description:'Grande mediana'},
  {name:'Pizza de Pepperoni',img:'/pizza-peperoni.jpg', description:'Grande mediana'},
  {name:'Pizza de Pepperoni',img:'/pizza-peperoni.jpg', description:'Grande mediana'},
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