import video from '../../public/NewColeccion.gif'
import Image from 'next/image';
import newcollection from '../../public/newcolle.png'
import styles from '../styles/Header2.module.css'

const Header2 = () => {
    return (
        <>
         <h1 className={styles.title} >ESTUDIO 2.15</h1>
          <div className={styles.container}>    
            <Image className={styles.image} width={450} height={500} src={newcollection} alt='estudio2.15' loop ></Image>
            <Image className={styles.video} width={450} height={500} src={video} alt='logo estudio2.15' loop ></Image>
        </div>
         </>
      
    );
}

export default Header2;