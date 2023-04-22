import React, { useContext, useEffect, useState } from 'react'
import './style.css'
import SingleProduct from './SingleProduct'
import {MyContext} from '../Context'
const Cart = () => {
    const [total , setTotal]=useState(0)
    const {cart,setCart}=useContext(MyContext);

    useEffect(() => {
     setTotal(cart.reduce((acc,curr)=>acc+Number(curr.price),0))
     
    }, [cart])
    
  return (
    <>

        <span style={{fontSize:30}}>My Cart</span>
        <br/>
        <span style={{fontSize:30}}>Total Rs.{total}</span>
        <div className='productContainer'>
            {
                cart.map((prod)=>(
                    <SingleProduct prod={prod} key={prod.id} />
                ))
            }
        </div>
    </>
  )
}

export default Cart