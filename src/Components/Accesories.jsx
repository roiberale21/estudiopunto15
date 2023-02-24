import Image from 'next/image';
import styles from '../styles/Accesories.module.css'

const Image1 = 'https://i.imgur.com/rEf1cFE.jpg'
const Image2 = 'https://i.imgur.com/bUkrtQB.jpg'
const Image3 = 'https://i.imgur.com/zs2fu0M.jpg'

const Accesories = () => {
    return (
        <>
      <section className={styles.container} >
          <div>
        <Image  width={100} height={100}  unoptimized  loading='lazy' className={styles.images} src={Image1} alt='logo estudio2.15' ></Image>
          </div>
          <div>
        <Image width={100} height={100}  unoptimized loading='lazy' className={styles.images} src={Image2} alt='logo estudio2.15' ></Image>
          </div>
          <div>
        <Image  width={100} height={100}  unoptimized  loading='lazy' className={styles.images} src={Image3} alt='logo estudio2.15' ></Image>
          </div>
      </section>
      </>  
    );
}

export default Accesories;