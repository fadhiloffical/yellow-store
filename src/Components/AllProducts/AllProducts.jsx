import { useEffect, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import styles from './AllProducts.module.css';

function AllProducts() {
    const [allProductsData, setAllProductsData] = useState([]);
    useEffect(() => {
        const url = "http://yellowstore.hexeam.org/api/customer/store-products/external";
    
        const fetchData = async () => {
          try {
            const response = await fetch(url);
            const data = await response.json();
            setAllProductsData(data.storeProducts.slice(0, 7));
          } catch (error) {
            console.log("error", error);
          }
        };
    
        fetchData();
    }, []);
  return (
    <div className={styles.AllProductsWrapper}>
      <h2>All Products</h2>
      <ul className={styles.AllProductsList}>
          <ProductCard allProductsData={allProductsData}/>
      </ul>
    </div>
  )
}

export default AllProducts
