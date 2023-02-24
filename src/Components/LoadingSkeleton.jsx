import styles from '../../src/styles/LoadingSkeleton.module.css'


const LoadingSkeleton = () => {
    return (
        <div className={styles.card} >
            <div className={styles.ImageProduct} >

            </div>
            <div className={styles.itemsCard} >
                <div className={styles.item1}></div>
                <div className={styles.item3}></div>
                <div className={styles.item2}></div>
                <div className={styles.item4} ></div>


            </div>

        </div>
    );
}

export default LoadingSkeleton;