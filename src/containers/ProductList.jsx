import ProductCard from "@/Components/ProductCard";
import useGetValue from "@/hooks/useGetValue";
import styles from '../styles/ProductList.module.css'
import AppContext from '../Context/AppContext';
import { useContext, useState } from "react";
import LoadingSkeleton from "@/Components/LoadingSkeleton";


const ProductList = () => {
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [order, setOrder] = useState('ASC')
    const [toggleSort, setToggleSort]= useState(false);
 
    
    
    
    const items = useGetValue('colection_vem')
    const isLoading= items.isLoading

    const product = items.snapshot
    const data = Object.values(product) 
   
    
    const handleCategoryChange = (category) => {
        setSelectedCategory(category)
    }
    const handleSortAsc = () => {
        setOrder('ASC');
      };
      
      const handleSortDesc = () => {
        setOrder('DESC');
      };
      
      const sortData = (data) => {
        const sortedData = [...data].sort((a, b) => {
          if (order === 'ASC') {
            return a.price - b.price || a.id - b.id;
          } else {
            return b.price - a.price || b.id - a.id;
          }
        });
        return sortedData;
      };

    const removeCategory=()=> {
        setSelectedCategory(null)
    }
    
      const filteredData = selectedCategory ? data.filter(item => item.category === selectedCategory) : data;

    return (
        <>
        <nav  >
            <ul className={styles.filters}>
                <li onClick={removeCategory} >todo</li>
                <li onClick={() => handleCategoryChange('camisa')} >camisa</li>
                <li onClick={() => handleCategoryChange('camiseta')} >camiseta</li>
                <li onClick={() => handleCategoryChange('accesorio')} >accesorio</li>
                <li onClick={() => handleCategoryChange('jogger')} >jogger</li>
                <li onClick={() => handleCategoryChange('camisilla')} >camisilla</li>
                <li onClick={() => handleCategoryChange('polo')} >polo</li>
                <li onClick={() => handleCategoryChange('chaqueta')} >chaqueta</li>
                <li onClick={() => handleCategoryChange('pantalon')} >pantalón</li>
                <li onClick={() => handleCategoryChange('pantaloneta')} >pantaloneta</li>
                <li onClick={() => handleCategoryChange('sudadera')} >sudadera</li>
            </ul>
                <div  onClick={ () => setToggleSort(!toggleSort)} className={styles.botonSort} >ordenar por <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.291428 0.391244C0.453806 0.221072 0.646062 0.135986 0.868196 0.135986C1.0899 0.135986 1.28194 0.221072 1.44432 0.391244L6.20201 5.3773L10.9759 0.374228C11.1275 0.2154 11.3169 0.135986 11.5443 0.135986C11.7716 0.135986 11.9665 0.221073 12.1288 0.391245C12.2912 0.561417 12.3724 0.762902 12.3724 0.995697C12.3724 1.22804 12.2912 1.4293 12.1288 1.59947L6.65667 7.31726C6.59172 7.38533 6.52136 7.43366 6.44558 7.46225C6.3698 7.49038 6.28862 7.50445 6.20201 7.50445C6.11541 7.50445 6.03422 7.49038 5.95845 7.46225C5.88267 7.43366 5.8123 7.38533 5.74735 7.31726L0.275189 1.58245C0.123636 1.42362 0.0478591 1.22804 0.0478592 0.995697C0.0478592 0.762901 0.129049 0.561417 0.291428 0.391244Z" fill="black"/>
</svg>

</div>
            {toggleSort && 
                <div className={styles.sortedModal} >
                    <span onClick={handleSortDesc} >Precio: mayor a menor</span>
                    <span  onClick={handleSortAsc} >Precio: menor a mayor</span>
                </div>
            }
        </nav>
       
        <main className={styles.container}>
            {isLoading &&
            <section className={styles.container} >
                 <LoadingSkeleton></LoadingSkeleton>
                 <LoadingSkeleton></LoadingSkeleton>
                 <LoadingSkeleton></LoadingSkeleton>
                 <LoadingSkeleton></LoadingSkeleton>
            </section>
        }
            {sortData(filteredData).map((item) => {
                return (
                    <ProductCard item={item} key={item.id} />
                )
            })}
        </main>
        </>
    );
}

export default ProductList;