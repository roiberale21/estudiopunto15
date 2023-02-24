import OrderItem from '@/Components/OrderItem';
import Link from 'next/link';
import React, { useContext, useEffect, useState} from  'react';
import AppContext from '../Context/AppContext';
import styles from '../styles/MyOrder.module.css'



const MyOrder = () => {
  const { state } = useContext(AppContext);

  const formatNumber = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };
  const sumTotal = () => {
    const reducer = (accumalator, currentValue) => accumalator + parseFloat(currentValue.price);
    const sum = state.cart.reduce(reducer, 0);
     
    return state.cart.length > 0 ? formatNumber(sum.toFixed(3)) : null;
  };
    return (  
      <>   
        <aside className={styles.MyOrder}>
        <div className={styles.containerTitle} >
          <p className={styles.title}>My order</p>
        </div>

          <div className={styles.items} >
            {state.cart.length > 0 ? state.cart.map(product=>(
                <OrderItem  product={product} key={`orderItem-${product.id}`} />
          )) : <h1>cesta vacia</h1> }
          </div>
        
        <div className={styles.containerSum} >
        <p>
          <span>Total</span>
        </p>
        <p className={styles.sumTotal}>$ {sumTotal()} COP</p>
      <Link href='/information' >
      <div className={styles.buttonCheckout}>
        Pagar
      </div>
      </Link> 
        </div>
  </aside>
  </>
    );
}

export default MyOrder;