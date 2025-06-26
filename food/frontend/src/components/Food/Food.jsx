import React from 'react'
import { FoodItem } from './FoodItem'

export const Food = ({foods}) => {
  return (
    <div className=''>
      <section className='grid grid-cols-4 w-4/5 mx-auto gap-7 p-8'>
        { foods.length>0?(
          foods.map((item)=>(
            <div key={item.id}>
              <FoodItem
              id={item.id}
              name={item.name}
              price={item.price}
              img={item.imageUrl}
              des={item.des}
              />
            </div>
          ))
        ):(
          <p>Not found</p>
        )}
      </section>
    </div>
  )
}
