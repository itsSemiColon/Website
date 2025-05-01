import styles from './styles/contact.module.scss';

const ContactSection = () => {
  return (
    <div className={`${styles['contact-section']}`}>
      
    <section className={`${styles['quote-section']} flex flex-col md:flex-row justify-between items-start padding-global padding-global-top`}>
      {/* Left Side - Form */}
      <div className={`${styles['form-wrapper']} w-full md:w-2/3 bg-[var.$color-background] p-8 rounded-lg shadow-lg`}>
        <h2 className={`${styles['section-heading']} text-[var.$color-heading]`}>Get a free quote</h2>

        {/* I am looking to */}
        <div className={`${styles['form-group']} mt-6`}>
          <label className={`${styles['form-label']} text-[var.$color-heading-light]`}>I am looking to</label>
          <div className="flex flex-wrap gap-3 mt-2">
            <button className={`${styles['option-btn']} ${styles['active']}`}>Start a New Project</button>
            <button className={styles['option-btn']}>Product Revamp</button>
            <button className={styles['option-btn']}>Discovery Workshop</button>
            <button className={styles['option-btn']}>Extend my Team</button>
          </div>
        </div>

        {/* Expertise I need */}
        <div className={`${styles['form-group']} mt-6`}>
          <label className={`${styles['form-label']} text-[var.$color-heading-light]`}>Expertise I need</label>
          <div className="flex flex-wrap gap-3 mt-2">
            <button className={`${styles['option-btn']} ${styles['active']}`}>Custom Software Development</button>
            <button className={styles['option-btn']}>UI/UX Design</button>
            <button className={styles['option-btn']}>Frontend Development</button>
            <button className={styles['option-btn']}>Other</button>
          </div>
        </div>

        {/* Project Budget */}
        <div className={`${styles['form-group']} mt-6`}>
          <label className={`${styles['form-label']} text-[var.$color-heading-light]`}>Project Budget (USD)</label>
          <div className="flex flex-wrap gap-3 mt-2">
            <button className={styles['option-btn']}>&lt;5k</button>
            <button className={styles['option-btn']}>10-20k</button>
            <button className={styles['option-btn']}>20-30k</button>
            <button className={styles['option-btn']}>30-50k</button>
            <button className={styles['option-btn']}>Flexible Budget</button>
          </div>
        </div>

        {/* Contact Information */}
        <div className={`${styles['form-group']} mt-6`}>
          <label className={`${styles['form-label']} text-[var.$color-heading-light]`}>Contact Information</label>
          <div className="flex flex-col md:flex-row gap-4 mt-2">
            <input
              type="text"
              placeholder="Full Name"
              className={`${styles['form-input']} w-full md:w-1/2`}
            />
            <input
              type="email"
              placeholder="Your Email"
              className={`${styles['form-input']} w-full md:w-1/2`}
            />
          </div>
          <textarea
            placeholder="Tell us about your project. What problem can we help you solve?"
            className={`${styles['form-textarea']} mt-4 w-full`}
            rows={4}
          ></textarea>
        </div>

        {/* Submit Button */}
        <button className={`${styles['submit-btn']} mt-6`}>Send Request</button>
      </div>

      {/* Right Side - Benefits */}
      <div className="w-full md:w-1/3 mt-8 md:mt-0 md:ml-8">
        <h2 className={`${styles['section-heading']} text-[var.$color-heading]`}>Start your project today!</h2>
        <ul className="mt-6 space-y-4">
          <li className="flex items-start">
            <span className={`${styles['check-icon']} mr-2`}>✓</span>
            <span className="text-[var.$color-text]">Response in 24 hours</span>
          </li>
          <li className="flex items-start">
            <span className={`${styles['check-icon']} mr-2`}>✓</span>
            <span className="text-[var.$color-text]">Discovery call with tech experts</span>
          </li>
          <li className="flex items-start">
            <span className={`${styles['check-icon']} mr-2`}>✓</span>
            <span className="text-[var.$color-text]">Complete IP protection</span>
          </li>
          <li className="flex items-start">
            <span className={`${styles['check-icon']} mr-2`}>✓</span>
            <span className="text-[var.$color-text]">Ensuring full NDA adherence</span>
          </li>
        </ul>

      </div>
    </section>
    </div>
  );
};

export default ContactSection;