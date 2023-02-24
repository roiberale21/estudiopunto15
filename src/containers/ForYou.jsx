import React, { useState} from "react";
import ProductCard from "@/Components/ProductCard";
import useGetValue from "@/hooks/useGetValue";
import styles from '../styles/ForYou.module.css'
import Link from "next/link";
import LoadingSkeleton from "@/Components/LoadingSkeleton";

const ForYou = ({title}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const items = useGetValue("colection_vem");
    const isLoading= items.isLoading
  
    const product = items.snapshot;
    const data = Object.values(product);
    const productsPerPage = typeof window !== 'undefined' && window.innerWidth < 648 ? 1 : 4; 

  
    const handlePrev = () => {
      if (currentIndex === 0) {
        setCurrentIndex(data.length - 1);
      } else {
        setCurrentIndex(currentIndex - 1);
      }
    };
  
    const handleNext = () => {
      if (currentIndex + 1 >= data.length) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + productsPerPage);
      }
    };
  
    return (
        <> 
        <h1 className={styles.title} >{title}</h1>
        <section className={styles.container}>
      
        <div onClick={handlePrev} >
        <svg className={styles.arrow} width="23" height="40" viewBox="0 0 23 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.2032 0.790516C22.7344 1.31752 23 1.9415 23 2.66245C23 3.382 22.7344 4.00527 22.2032 4.53228L6.63972 19.9737L22.2564 35.4677C22.7521 35.9596 23 36.5744 23 37.3123C23 38.0501 22.7344 38.6825 22.2032 39.2095C21.6721 39.7365 21.0431 40 20.3165 40C19.5913 40 18.963 39.7365 18.4319 39.2095L0.584292 21.4493C0.371821 21.2385 0.220968 21.0101 0.13173 20.7642C0.0439084 20.5182 -2.90018e-06 20.2547 -2.92475e-06 19.9737C-2.94932e-06 19.6926 0.0439083 19.4291 0.13173 19.1831C0.220968 18.9372 0.371821 18.7088 0.584292 18.498L18.485 0.737816C18.9808 0.245941 19.5913 2.03897e-06 20.3165 1.97557e-06C21.0431 1.91204e-06 21.6721 0.263506 22.2032 0.790516Z" fill="black" fill-opacity="0.87"/>
</svg>

       </div>
       {isLoading && 
       <section className={styles.container} >
         <LoadingSkeleton></LoadingSkeleton>
         <LoadingSkeleton></LoadingSkeleton>
         <LoadingSkeleton></LoadingSkeleton>
         <LoadingSkeleton></LoadingSkeleton>
       </section>
         }

        {data
          .slice(currentIndex, currentIndex + productsPerPage)
          .map((item) => {

            return <>
           
  <ProductCard item={item} key={item.id} />

            </>
           
          })}
           <div onClick={handleNext} >
       <svg className={styles.arrow} width="23" height="40" viewBox="0 0 23 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.796767 39.2095C0.265589 38.6825 0 38.0585 0 37.3375C0 36.618 0.265589 35.9947 0.796767 35.4677L16.3603 20.0263L0.743649 4.53228C0.247883 4.0404 0 3.42556 0 2.68775C0 1.94993 0.265589 1.31752 0.796767 0.790514C1.32794 0.263505 1.95686 0 2.68351 0C3.40875 0 4.03695 0.263505 4.56813 0.790514L22.4157 18.5507C22.6282 18.7615 22.779 18.9899 22.8683 19.2358C22.9561 19.4818 23 19.7453 23 20.0263C23 20.3074 22.9561 20.5709 22.8683 20.8169C22.779 21.0628 22.6282 21.2912 22.4157 21.502L4.51501 39.2622C4.01924 39.7541 3.40875 40 2.68351 40C1.95686 40 1.32794 39.7365 0.796767 39.2095Z" fill="black" fill-opacity="0.87"/>
</svg>
       </div>
      </section>
      </>
    );
  };
  
  export default ForYou;