import styles from './styles/servicesWeProvide.module.scss';
import CustomSoftwareIcon from '../assets/images/icons/custom software-1.svg';

const servicesWeProvide = () => {
  return (
    <div className={`${styles.servicesWeProvide} padding-global`}>
      <div className={styles.servicesWeProvideContainer}>
        <h1 className={`${styles.heading} text-4xl font-bold text-center mb-4`}>
          Let's Craft Your Digital Success Story
        </h1>
        <p className="text-center text-2xl mx-auto mb-12">
              What are you looking to get done ? 
        </p>

        <div className={styles.servicesGrid}>
          <div className={`${styles.serviceCard}  ${styles.serviceCardEven}`} >
            <div className={styles.iconWrapper}>
                <img src="https://cdn.prod.website-files.com/6238664ae1f64b97aac71e1d/6239fc2a0d121a7d12d010ce_Icon_3.svg" loading="eager" alt="" className="icon-feature"/>           
            </div>
            <h2 className="text-3xl  mb-3">Custom Software Development</h2>
            <p>Building seamless mobile applications to elevate your business growth and reach wider audiences.</p>
            <a href="" className="mt-3 text-lg font-semibold">Learn more
                <svg className={styles.arrowIcon} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
            </a>
          </div>

          <div className={`${styles.serviceCard}  ${styles.serviceCardEven}`}>
          <div className={styles.iconWrapper}>
            <img src="https://cdn.prod.website-files.com/6238664ae1f64b97aac71e1d/6239fc2a2d1b5f25eba5f479_Icon_1.svg" loading="eager" alt="" className="icon-feature"/>            
          </div>
            <h2 className={`text-3xl  mb-3 `}>Web App Development</h2>
            <p>Creating responsive and user-friendly websites tailored to your business needs and branding.</p>
            <a href="" className="LearnMore mt-3 text-lg font-semibold">Learn more
            <svg className={styles.arrowIcon} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>

          <div className={`${styles.serviceCard}  ${styles.serviceCardEven}`}>
          <div className={styles.iconWrapper}>
            <img src="https://cdn.prod.website-files.com/6238664ae1f64b97aac71e1d/6239fc2b07a76983eeedb744_Icon_2.svg" loading="eager" alt="" className="icon-feature"/>            
          </div>
            <h2 className="text-3xl f mb-3">Mobile App Development</h2>
            <p>Designing beautiful, intuitive interfaces that enhance user experience and drive engagement.</p>
            <a href="" className="mt-3 text-lg font-semibold">Learn more
                            <svg className={styles.arrowIcon} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>

          <div className={`${styles.serviceCard}  ${styles.serviceCardEven}`}>
          <div className={styles.iconWrapper}>
                <img src="https://cdn.prod.website-files.com/6238664ae1f64b97aac71e1d/6239fc2a0d121a7d12d010ce_Icon_3.svg" loading="eager" alt="" className="icon-feature"/>           
            </div>
            <h2 className="text-3xl  mb-3">UI/UX Design</h2>
            <p>Boost your online presence through targeted digital strategies and impactful marketing campaigns.</p>
            <a href="" className="mt-3 text-lg font-semibold">Learn more
                            <svg className={styles.arrowIcon} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>

          <div className={`${styles.serviceCard}  ${styles.serviceCardEven}`}>
          <div className={styles.iconWrapper}>
            <img src="https://cdn.prod.website-files.com/6238664ae1f64b97aac71e1d/6239fc2b07a76983eeedb744_Icon_2.svg" loading="eager" alt="" className="icon-feature"/>            
          </div>
            <h2 className="text-3xl mb-3">AI/ML Development</h2>
            <p>Seamless cloud integration, migration, and support to empower your digital transformation journey.</p>
            <a href="" className="mt-3 text-lg font-semibold">Learn more
                            <svg className={styles.arrowIcon} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>

          <div className={`${styles.serviceCard}  ${styles.serviceCardEven}`}>
            <div className={styles.iconWrapper}>
            <img src={CustomSoftwareIcon} alt='mySvgImage' width={50} />
            </div>
            <h2 className="text-3xl  mb-3">User Experience and Design</h2>
            <p>End-to-end e-commerce development services to scale your online business to new heights.</p>
            <a href="" className="mt-3 text-lg font-semibold">Learn more
                            <svg className={styles.arrowIcon} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default servicesWeProvide;
