import { useEffect, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import styles from './RecentProducts.module.css';

function RecentProducts() {
    const [recentProductsData, setRecentsProductsData] = useState([]);
    useEffect(() => {
        const url = "http://yellowstore.hexeam.org/api/customer/store-products-by-categories/external";
    
        const fetchData = async () => {
          try {
            const response = await fetch(url);
            const data = await response.json();
            setRecentsProductsData(data.storeProducts.slice(0, 3));
          } catch (error) {
            console.log("error", error);
          }
        };
    
        fetchData();
    }, []);
  return (
    <div className={styles.RecentProductsWrapper}>
      <h2>Recent Products</h2>
      <ul className={styles.AllProductsList}>
          <ProductCard allProductsData={recentProductsData}/>
      </ul>
    </div>
  )
}

export default RecentProducts
