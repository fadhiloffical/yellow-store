import styles from './Header.module.css'; 
import logo from '../../img/logo.png';
import search from '../../img/icon-search.png';
import cart from '../../img/icon-cart.png';
import cartactive from '../../img/icon-cart-active.png';
import menu from '../../img/icon-menu.png';

function Header() {
  return (
    <div className={styles.HeaderWrapper}>
      <div className="container">
        <div className={styles.HeaderContentWrapper}>
            <div className={styles.logoWrapper}><img src={logo} alt="Yellow Store" /></div>
            <div className={styles.hotelTitleWrapper}>
                <h1>Zam Zam Restaurant</h1>
                <p>Red Cross Rd, Kozhikode</p>
            </div>
            <div className={styles.MenuWrapper}>
                <div className={styles.SearchIconWrapper}>
                    <img src={search} alt="search" />
                </div>
                <div className={styles.CartIconWrapper}>
                    <img src={cart} alt="cart" />
                </div>
                <div className={styles.MenuIconWrapper}>
                    <img src={menu} alt="menu" />
                </div>
            </div>
        </div>
        <div className={styles.MobileHeadingWrapper}>
              <h1>Zam Zam Restaurant</h1>
              <p>Red Cross Rd, Kozhikode</p>
        </div>
      </div>
    </div>
  )
}

export default Header
