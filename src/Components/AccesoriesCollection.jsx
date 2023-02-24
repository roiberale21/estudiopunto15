import Image from "next/image";


const AccesoriesCollection = ({ images, imageStyle, containerStyle}) => {
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
    </section>
    );
}

export default AccesoriesCollection;