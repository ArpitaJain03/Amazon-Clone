//isme sirf vo products h jo humne cart m add kiye h
import React from 'react'
import './CheckOutProduct.css';
import {useStateValue} from "../provider/StateProvider";

function CheckOutProduct({id, image, title, price, rating, hideButton}) {

  const [{basket},dispatch]= useStateValue();
  const removeFromBasket=()=>{
    //remove the item from baskte
    dispatch({
      type:'REMOVE_FROM_BASKET',
      id:id,
    })
  }

  return (
    <div className='checkOutProduct'>

      <img className='checkOutProduct__image' src={image} />

      <div className='checkOutProduct__info'>
        <p className='checkOutProduct__title'>{title}</p>
        <p className='checkOutProduct__price'>
        <small>$</small>
        <strong>{price}</strong>
        </p>

        <div className='checkOutProduct__rating'>

         {
          Array(rating).fill().map((_,i)=>(
              <p>⭐</p>
            ))
         }
         </div>

         {!hideButton && (
          <button onClick={removeFromBasket}>Remove From Cart</button>
         )}

      </div>
      
    </div>
  )
}

export default CheckOutProduct
