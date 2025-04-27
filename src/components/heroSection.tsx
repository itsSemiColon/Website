import styles from './styles/hero.module.scss';

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroGrid}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
          We’re a software development company that helps bring imagination into reality.
          </h1>
          <p className={styles.heroSubtitle}>
          Let's Architect Your Future, Together. Reliable Tech, Delivered.          </p>
          <div className={styles.heroButtons}>
            <a href="#" className={styles.getStartedBtn}>
              Get started
              <svg className={styles.arrowIcon} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className={styles.speakToSalesBtn}>
              See Plans
            </a>
          </div>
        </div>
        <div className={styles.heroImageWrapper}>
          <div className={styles.circlesContainer}>
            <div className={styles.circle} id={styles.circle1}></div>
            <div className={styles.circle} id={styles.circle2}></div>
            <div className={styles.circle} id={styles.circle3}></div>
            <div className={styles.circle} id={styles.circle4}></div>
       
            <div  id={styles.blurOverlay}></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
