import React, {useContext} from 'react';
import AppContext from '../Context/AppContext';
import Image from 'next/image';
import styles from '../styles/OrderItem.module.css'


const OrderItem = ({product }) => {
  const {removeFromCart} = useContext(AppContext);


  const handleRemove= product =>{
    removeFromCart(product);
  }
    return (
        <div className={styles.OrderItem}>
<figure>
  <Image unoptimized width={100} height={100} src={product.picture} alt={product.title}/>
</figure>
<div>
<p>{product.name}</p>
<p className={styles.price}>${product.price}</p>
<p className={styles.price}>{product.talla}</p>
</div>
<div onClick={ ()=> handleRemove(product)} >
    <span>eliminar</span>
</div>
</div>
    );
}

export default OrderItem;