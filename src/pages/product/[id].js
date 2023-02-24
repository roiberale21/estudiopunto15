import { useRouter } from 'next/router';
import firebaseApp from '../../../firebase'
import styles from '../../styles/productDetails.module.css'
import Image from 'next/image';
import ForYou from '@/containers/ForYou';
import { useContext, useEffect, useRef, useState } from 'react';
import AppContext from '@/Context/AppContext';
import { getDatabase, ref, child, get } from 'firebase/database'



function Product() {
  const { state, addToCart } = useContext(AppContext);
  const [selectedSize, setSelectedSize] = useState('')
  const [product, setProduct] = useState(null);
  const {query} = useRouter();
  
 
  const getValue = async (path) => {
    try {
      const database = getDatabase(firebaseApp);
      const rootReference = ref(database);
      const dbGet = await get(child(rootReference, path));
      const dbValue = dbGet.val();
      const dbExist = dbGet.exists();
  
      if (!dbExist) {
        console.log('Data does not exist');
      } else {
        console.log('Data exists:', dbValue);
        return dbValue;
      }
    } catch (getError) {
      console.log('Error:', getError.message);
    }
  };
  
  useEffect(() => {
    const fetchData = async () => {
      const product = await getValue(`colection_vem/${query.id}`);
      setProduct(product);
    };
    fetchData();
  }, [query.id]);
    

  if (!product) {
    return <div>Cargando...</div>;
  }
  const producto = {
    talla:selectedSize,
    name:product.name,
    id:product.id,
    picture:product.picture,
    price:product.price
  }
  const handleClick = () => {
    if (!selectedSize) {
      alert('Por favor selecciona una talla antes de agregar al carrito');
      return;
    }

    const productIndex = state.cart.findIndex(
      (item) => item.id === producto.id && item.talla === producto.talla
    );

    if (productIndex !== -1) {
      alert('Este producto ya está en el carrito');
      return;
    }

    addToCart(producto);
    console.log(state.cart);
  };

  return (
    <>
    <main className={styles.container}>
        <div>
        <Image 
            unoptimized 
          className={styles.image}
           loading='lazy'
             width={140} 
             height={140} 
             src={product.picture} 
             alt={product.name} >
             </Image>
        </div>
        <div className={styles.productDetails} >
          <p className={styles.title} >{product.name}</p>
          <p className={styles.price}>${product.price}</p>
          <p className={styles.description} >{product.description}</p>
          <div onClick={handleClick} >
            <span className={styles.buttonAdd} >Añadir <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.67943 16.0687C8.56307 15.9559 8.50488 15.8223 8.50488 15.6679C8.50488 15.5139 8.56307 15.3804 8.67943 15.2676L12.089 11.9617L8.6678 8.64453C8.55919 8.53922 8.50488 8.40759 8.50488 8.24962C8.50488 8.09166 8.56307 7.95627 8.67943 7.84344C8.7958 7.73061 8.93358 7.67419 9.09277 7.67419C9.25165 7.67419 9.38928 7.73061 9.50565 7.84344L13.4156 11.6458C13.4622 11.6909 13.4952 11.7398 13.5148 11.7925C13.534 11.8451 13.5436 11.9015 13.5436 11.9617C13.5436 12.0219 13.534 12.0783 13.5148 12.131C13.4952 12.1836 13.4622 12.2325 13.4156 12.2776L9.49401 16.08C9.3854 16.1853 9.25165 16.2379 9.09277 16.2379C8.93358 16.2379 8.7958 16.1815 8.67943 16.0687Z" fill="white" fillOpacity="0.63"/>
</svg> </span>
          </div>
          <div className={styles.containerTallas} >
            <span>Selecciona una talla</span>
            <ul className={styles.tallas} >
              <li onClick={() => setSelectedSize('xs')} >xs</li>
              <li onClick={() => setSelectedSize('s')} >s</li>
              <li>m</li>
              <li>l</li>
              <li>xl</li>
            </ul>
          </div>
        </div>
    </main>
    <ForYou title='completa tu look' ></ForYou>

    </>
  );
}

export default Product;