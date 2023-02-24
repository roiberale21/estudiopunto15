import AccesoriesCollection from '@/Components/AccesoriesCollection';
import HeaderCollection from '@/Components/HeaderCollection';
import Navbar from '@/Components/Navbar';
import ProductList from '@/containers/ProductList';
import React from 'react';

const colectionPage = () => {
    const logoHome='https://i.imgur.com/Ctp3QVd.png'
    

    const containerStyle = {
        width: '100%',
        height: '600px',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        overflow: 'hidden'
      };

      const imageStyle = {
        objectFit:'cover',
        height: '600px',
        width: '100%'
      };
 
    const containerStyle2 = {
        width: '50%',
        placeItems:'center',
        margin:'auto',
        height: '700px',
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        overflow: 'hidden'
      };

      const imageStyle2 = {
        objectFit:'cover',
        height: '600px',
        width: '100%'
      };
 
  const images = [
    {
      src: 'https://i.imgur.com/kMZKnpX.jpg',
      alt: 'image1'
    },
    {
      src: 'https://i.imgur.com/iwdQrTg.jpg',
      alt: 'image2'
    },
    {
      src: 'https://i.imgur.com/1shWTOr.jpg',
      alt: 'image3'
    }]

  const images2 = [
    {
      src: 'https://i.imgur.com/TP3InPQ.jpg',
      alt: 'image1'
    },
    {
      src: 'https://i.imgur.com/KXlfWAm.jpg',
      alt: 'image2'
    },
  ];
    return (
        <>
          <main>
            <HeaderCollection 
            images={images}
              imageStyle={imageStyle}
      containerStyle={containerStyle}
            logoHome={logoHome}
            > 
            </HeaderCollection>
            <AccesoriesCollection
             images={images2}
             imageStyle={imageStyle2}
     containerStyle={containerStyle2}
            >

            </AccesoriesCollection>
            <ProductList></ProductList>

          </main>
        </>
     
    );
}

export default colectionPage;