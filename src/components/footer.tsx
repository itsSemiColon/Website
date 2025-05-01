import styles from './styles/footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles['footer-wrapper']}>
      <div className={styles['footer-container']}>
        <div className={styles['footer-top']}>
          <h2 >Semicolon.<span>io</span></h2>
          {/* <a href="#" className={styles['footer-brand']}>
          <img
            decoding="async"
            width="100"
            height="286"
            sizes="105px"
            srcSet="https://framerusercontent.com/images/LtJOacjpCfrAdQJhzULOxsNXP8.png?scale-down-to=512 512w,https://framerusercontent.com/images/LtJOacjpCfrAdQJhzULOxsNXP8.png 768w"
            src="https://framerusercontent.com/images/LtJOacjpCfrAdQJhzULOxsNXP8.png?scale-down-to=512"
            alt=""
          />
          </a> */}

          <ul className={styles['footer-links']}>
            <li><a href="#">Services</a></li>
            <li><a href="#">Industries</a></li>
            <li><a href="#">Company</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <hr className={styles['footer-divider']} />

        <p className={styles['footer-bottom-text']}>
          © 2025 <a href="#" className={styles['footer-bottom-link']}>Semicolon™</a>. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
