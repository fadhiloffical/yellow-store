import styles from './Footer.module.css';

function Footer() {
  return (
    <div className={styles.FooterWrapper}>
      © {(new Date().getFullYear())} Yellow Store. All Right Reserved
    </div>
  )
}

export default Footer
