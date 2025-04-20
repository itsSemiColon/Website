import styles from "./styles/heroSection.module.scss";

const HeroSection = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.content}>
        {/* You can put actual hero text/buttons here */}
        <div>
            
            <h1 className="text-black">Grow Your Start <span style={{ color: '#FF6F61  ' }} className="U">U</span>p At An Early Stage or Scale Your Development Team With US </h1>
            <p className="text-black">We are a custom software development company that assists you in converting your ideas into wonderful software solutions. With our customer centeric approch we build products that matters to users.</p>
            <button type="button" className="text-white font-medium rounded-lg text-4xl " >Let's Talk</button>

        </div>
      </div>
    </div>
  );
};

export default HeroSection;
