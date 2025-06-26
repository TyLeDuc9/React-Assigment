

import { DrinkItem } from './DrinkItem'

export const Drink = ({ drinks }) => {

  return (
    <section className='grid grid-cols-4  gap-6 p-4 w-4/5 mx-auto'>
      {drinks.length > 0 ? (
        drinks.map((item) => (
          <div key={item.id}>
            <DrinkItem 
            id={item.id} 
            name={item.name} 
            price={item.price} 
            des={item.des} 
            imageUrl={item.imageUrl}/>
          </div>
        ))
      ) : (
        <p>Không có đồ uống nào.</p>
      )}
    </section>
  )
}
