
import Image from "next/image";
import Link from "next/link";
import arrow from '../../public/arow.svg'
import styles from '../styles/Header.module.css'

const Header = () => {
    const logoHome='https://i.imgur.com/Ctp3QVd.png'
    return (
        <header className={styles['header-container']} >
            <div className={styles.image1}>
                <section className={styles['collections-nav']}>
                    <div className={styles['item-collections-nav']} >
                    <Image src={arrow} alt='logo estudio2.15' ></Image>
                    <a href="">RENACIMIENTO</a>
                    </div>
                    <div  className={styles['item-collections-nav']}>
                    <Image src={arrow} alt='logo estudio2.15' ></Image>
                    <a href="">DELTA</a>
                    </div>
                    <div  className={styles['item-collections-nav']}>
                    <Image src={arrow} alt='logo estudio2.15' ></Image>
                    <Link href='/veranoEnMedellin'>VERANO EN MEDELLÍN</Link>
                    </div>
                </section> 
            </div>
            <div className={styles.image2}>
            <Image width={150} height={150}  unoptimized className={styles.logoHome} src={logoHome} alt='logo estudio2.15' ></Image>

            <div className={styles['botton-new-collection']}>
                <span>NEW COLLECTION</span>
                <svg width="52" height="54" viewBox="0 0 62 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24.0087 43.5283C23.679 43.2086 23.5142 42.8301 23.5142 42.3928C23.5142 41.9563 23.679 41.5783 24.0087 41.2586L33.6692 31.8919L23.9758 22.4932C23.668 22.1948 23.5142 21.8218 23.5142 21.3743C23.5142 20.9267 23.679 20.5431 24.0087 20.2234C24.3384 19.9037 24.7288 19.7439 25.1799 19.7439C25.63 19.7439 26.0199 19.9037 26.3497 20.2234L37.4279 30.9967C37.5598 31.1246 37.6534 31.2631 37.7088 31.4123C37.7633 31.5615 37.7906 31.7214 37.7906 31.8919C37.7906 32.0624 37.7633 32.2222 37.7088 32.3714C37.6534 32.5206 37.5598 32.6591 37.4279 32.787L26.3167 43.5603C26.009 43.8587 25.63 44.0079 25.1799 44.0079C24.7288 44.0079 24.3384 43.848 24.0087 43.5283Z" fill="black" fill-opacity="0.63"/>
</svg>

            </div>
            </div>
            <div className={styles.image3}>

            </div>
        </header>
    );
}

export default Header;