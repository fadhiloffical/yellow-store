import { useEffect, useState } from 'react';
import styles from './Category.module.css';

function Category() {
    const [categoryData, setCategoryData] = useState([]);
    useEffect(() => {
        const url = "http://yellowstore.hexeam.org/api/customer/store-categories/external";
    
        const fetchData = async () => {
          try {
            const response = await fetch(url);
            const data = await response.json();
            setCategoryData(data.CategoryDetails.slice(0, 6));
          } catch (error) {
            console.log("error", error);
          }
        };
    
        fetchData();
    }, []);
  return (
    <div className={styles.CategoryWrapper}>
        <div className="container">
          <div className={styles.CategoryContentWrapper}>
            <div className={styles.CategoryBannerWrapper}> </div>
            <div className={styles.CategoryListWrapper}>
            <ul>
              {categoryData.map((categories) =>
                <li key={categories.category_id}>      
                    <img src={"http://yellowstore.hexeam.org" + categories.category_icon} alt={categories.category_name} />
                </li>
              )}
            </ul>
          </div>
          </div>
        </div>
    </div>
  )
}

export default Category
