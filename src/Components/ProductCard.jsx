import Image from 'next/image';
import ImageProduct from '../../public/header1.png'
import styles from '../styles/ProductCard.module.css'
import AppContext from '../Context/AppContext';
import { useContext, useState } from 'react';
import Link from 'next/link';


const ProductCard = ({item}) => {
  const { state, addToCart } = useContext(AppContext);
  const [selectedSize, setSelectedSize] = useState('')
  
    
  const product = {
    talla:selectedSize,
    name:item.name,
    id:item.id,
    picture:item.picture,
    price:item.price
  }
  
	const handleClick = () => {
    if (!selectedSize) {
      alert('Por favor selecciona una talla antes de agregar al carrito');
      return;
    }
    if (state.cart.some(item => item.id === product.id && item.talla === product.talla)) {
      return;
    } else {
      addToCart(product)
      console.log(state.cart)
    }
  }
  
  

    return (
      <>
        <div className={styles.card}>
        <Link href={`/product/${item.id}`}>
            <div>
            <Image 
            unoptimized 
            className={styles.Imageproduct}
           loading='lazy'
             width={140} 
             height={140} 
             src={item.picture} 
             alt={item.name} >
             </Image>
            </div>
            </Link>
            <div className={styles['items-card']} >
                <p className={styles['product-name']}>{item.name}</p>
                <svg className={styles.liked} width="25" height="22" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.5 19.0781C12.4164 19.0767 12.3345 19.0531 12.2621 19.0094C12.1719 18.9664 10.1375 17.7547 8.07031 15.8125C5.24024 13.1398 3.80469 10.4844 3.80469 7.90623C3.80394 6.83956 4.12986 5.80077 4.73452 4.94256C5.33918 4.08435 6.1907 3.45199 7.1639 3.13843C8.1371 2.82487 9.18065 2.84666 10.1412 3.20058C11.1017 3.55451 11.9285 4.2219 12.5 5.10467C13.0715 4.2219 13.8983 3.55451 14.8588 3.20058C15.8194 2.84666 16.8629 2.82487 17.8361 3.13843C18.8093 3.45199 19.6608 4.08435 20.2655 4.94256C20.8701 5.80077 21.1961 6.83956 21.1953 7.90623C21.1953 10.4844 19.7598 13.1398 16.9297 15.8125C14.8625 17.7547 12.8281 18.9664 12.7379 19.0094C12.6655 19.0531 12.5836 19.0767 12.5 19.0781ZM8.5625 3.95311C7.56172 3.95311 6.60193 4.36959 5.89428 5.11095C5.18662 5.8523 4.78906 6.8578 4.78906 7.90623C4.78906 12.8304 11.1711 17.1273 12.5 17.9609C13.8289 17.1273 20.2109 12.8304 20.2109 7.90623C20.2128 6.99088 19.9115 6.10321 19.3583 5.39469C18.8051 4.68618 18.0343 4.20075 17.1775 4.02123C16.3208 3.84172 15.4311 3.97925 14.6603 4.41036C13.8895 4.84147 13.2855 5.53943 12.9512 6.38514C12.9159 6.48042 12.8539 6.5623 12.7734 6.62003C12.6929 6.67776 12.5976 6.70866 12.5 6.70866C12.4024 6.70866 12.3071 6.67776 12.2266 6.62003C12.1461 6.5623 12.0841 6.48042 12.0488 6.38514C11.762 5.66433 11.2778 5.04867 10.6573 4.61584C10.0369 4.18301 9.30794 3.9524 8.5625 3.95311Z" fill="black"  fillOpacity="0.7"/>
</svg>          
                <p className={styles['product-price']}>${item.price}</p>

    <div className={styles['select-container']}>
  <select value={selectedSize} onChange={(e) => setSelectedSize(e.target.value)} className={styles.select} >
    <option value="" disabled selected>talla</option>
    <option value="S">S</option>
    <option value="M">M</option>
    <option value="L">L</option>
    <option value="XL">XL</option>
  </select>
 
  <select className={styles.select} >
    <option value="" disabled selected>color</option>
    <option value="S">S</option>
    <option value="M">M</option>
    <option value="L">L</option>
    <option value="XL">XL</option>
  </select>
</div>
 
                    <div onClick= {() => handleClick (item)} className={styles.button}>
                     {state.cart.some((p) => p.id === item.id && p.talla === selectedSize)  ? <p className={styles.inCart} >Añadido al carrito</p> : <p>Añadir  al carrito</p> }
                      {state.cart.includes(item)? null : <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.67943 16.0687C8.56307 15.9559 8.50488 15.8223 8.50488 15.6679C8.50488 15.5139 8.56307 15.3804 8.67943 15.2676L12.089 11.9617L8.6678 8.64453C8.55919 8.53922 8.50488 8.40759 8.50488 8.24962C8.50488 8.09166 8.56307 7.95627 8.67943 7.84344C8.7958 7.73061 8.93358 7.67419 9.09277 7.67419C9.25165 7.67419 9.38928 7.73061 9.50565 7.84344L13.4156 11.6458C13.4622 11.6909 13.4952 11.7398 13.5148 11.7925C13.534 11.8451 13.5436 11.9015 13.5436 11.9617C13.5436 12.0219 13.534 12.0783 13.5148 12.131C13.4952 12.1836 13.4622 12.2325 13.4156 12.2776L9.49401 16.08C9.3854 16.1853 9.25165 16.2379 9.09277 16.2379C8.93358 16.2379 8.7958 16.1815 8.67943 16.0687Z" fill="black" fillOpacity="0.63"/>
</svg> } 
                    </div>

            </div>
        </div>
        </>
    );
}

export default ProductCard;