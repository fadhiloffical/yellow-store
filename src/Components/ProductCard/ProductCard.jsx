import styles from './ProductCard.module.css';

function ProductCard({allProductsData}) {
  return (
      <>
        {allProductsData.map((products, index) =>
        <li className={styles.ProductCard} key={index}>      
            <div className={styles.SingleProductBanner} style={{backgroundImage: 'url("http://yellowstore.hexeam.org' + products.product_base_image + '")'}}></div>
            <h5 className={styles.SingleProductTitle    }>{products.product_name}</h5>
            <div className={styles.PriceDeatilsWrapper}>
                <p className={styles.SingleProductPrice}>₹ {products.product_varient_offer_price}</p>
                <div>
                    <input type="number"  className={styles.AmountBox} min="1"/>
                    <input type="button" value="ADD" className={styles.AddButton} />  
                </div>
            </div>
        </li>
        )}
    </>
  )
}

export default ProductCard
