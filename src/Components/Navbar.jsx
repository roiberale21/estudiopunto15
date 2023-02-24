import Image from "next/image";
import logo from '../../public/logo.svg'
import bag from '../../public/bag-light.svg'
import user from '../../public/userr.svg'
import heart from '../../public/heart-light.svg'
import styles from '../styles/Navbar.module.css'
import { useContext, useEffect, useRef, useState } from "react";
import AppContext from "@/Context/AppContext";
import MyOrder from "@/containers/MyOrder";
import Link from "next/link";




const Navbar = () => {
    const[toggle, setToggle]= useState(false);
    const {state}= useContext(AppContext);
    const [toggleOrders, setToggleOrders]= useState(false);

    

    useEffect(() => {
     const savedCart = JSON.parse(localStorage.getItem('cart')) ?? [];
     state.cart = savedCart;
   }, []);
   
     useEffect(() => {
       localStorage.setItem('cart', JSON.stringify(state.cart));
     }, [state.cart]);


    return (
        <>
        <nav className={styles.navbar} >
          <div className={styles.hamburger}>
          <svg width="28" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 6C4 5.73478 4.10536 5.48043 4.29289 5.29289C4.48043 5.10536 4.73478 5 5 5H19C19.2652 5 19.5196 5.10536 19.7071 5.29289C19.8946 5.48043 20 5.73478 20 6C20 6.26522 19.8946 6.51957 19.7071 6.70711C19.5196 6.89464 19.2652 7 19 7H5C4.73478 7 4.48043 6.89464 4.29289 6.70711C4.10536 6.51957 4 6.26522 4 6ZM4 18C4 17.7348 4.10536 17.4804 4.29289 17.2929C4.48043 17.1054 4.73478 17 5 17H19C19.2652 17 19.5196 17.1054 19.7071 17.2929C19.8946 17.4804 20 17.7348 20 18C20 18.2652 19.8946 18.5196 19.7071 18.7071C19.5196 18.8946 19.2652 19 19 19H5C4.73478 19 4.48043 18.8946 4.29289 18.7071C4.10536 18.5196 4 18.2652 4 18ZM5 11C4.73478 11 4.48043 11.1054 4.29289 11.2929C4.10536 11.4804 4 11.7348 4 12C4 12.2652 4.10536 12.5196 4.29289 12.7071C4.48043 12.8946 4.73478 13 5 13H13C13.2652 13 13.5196 12.8946 13.7071 12.7071C13.8946 12.5196 14 12.2652 14 12C14 11.7348 13.8946 11.4804 13.7071 11.2929C13.5196 11.1054 13.2652 11 13 11H5Z" fill="#f7f7f7"/>
</svg>

          </div>
          <Link className={styles.logo} href='/' ><Image src={logo} alt='logo estudio2.15' ></Image></Link>

            <div>
            <a className={styles['nav-item']} href="">LOGUIN</a>
            <a className={styles['nav-item']} href="">INDUMENTARIA FESTIVAL</a>
            </div>

            <span className={styles.search} >BUSCAR</span>

            <div  className={styles.icons} >
            <Image src={heart} alt='logo estudio2.15' ></Image>
            <Image src={user} alt='logo estudio2.15' ></Image>
            <Image  onClick={ () => setToggleOrders(!toggleOrders)} src={bag} alt='logo estudio2.15' ></Image>
            {state.cart.length === 0 ? null : <div  className={styles.conter} > {state.cart.length} </div> } 
            
            </div>

            <Image className={styles.bag} onClick={ () => setToggleOrders(!toggleOrders)} src={bag} alt='logo estudio2.15' ></Image>
            {state.cart.length === 0 ? null : <div  className={styles.conter} > {state.cart.length} </div> } 
          
            {toggleOrders && <MyOrder/>}
        </nav>
        </>
    );
}

export default Navbar;