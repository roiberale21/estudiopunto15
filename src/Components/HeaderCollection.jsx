import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Accesories.module.css'


const HeaderCollection = ({ images, imageStyle, containerStyle, imageLogo, logoHome}) => {
    

  return (
    <section style={containerStyle}>
      {images.map((image, index) => (
        <div key={index}>
          <Image
            src={image.src}
            width={100}
            height={100}
            unoptimized
            loading="lazy"
            style={imageStyle}
            alt="logo estudio2.15"
          />
        </div>
      ))}
      <Link href={'/'}>
       <Image width={150} height={150}  unoptimized className={styles.logo} src={logoHome} alt='logo estudio2.15' ></Image>
      </Link>
    </section>
  );
};

export default HeaderCollection;