//y pura checkout ka page h
import React from 'react'
import { useStateValue } from '../provider/StateProvider';
import CheckOutProduct from './CheckOutProduct';
import './CheckOut.css';
import Subtotal from './Subtotal';

function CheckOut() {

    const [{basket,user}, dispatch]= useStateValue();

  return (

    <div className='checkout'>

        <div className='Checkout__left'>

            {/* <img className='checkout__ad'
            src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg'
            alt=''
            /> */}

        <h2 className='checkout__title'>Your Shopping Basket</h2>

        {
            basket.map(item=>(
                <CheckOutProduct id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
                />
            ))
        }
        </div>

        <div className='checkout__right'>
            <Subtotal />
        </div>
      
    </div>
  )
}

export default CheckOut
