import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Feedback submitted!');
  };

  return (
    <>
    <div className={styles.main_cont}>
      {/* <section className={styles.location}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3107.1754647932676!2d77.11202237815834!3d28.73213218749075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d013761946a2b%3A0x64b03b9154d81343!2sPocket%208%2C%20Sector%2011B%2C%20Rohini%2C%20Delhi%2C%20110085!5e0!3m2!1sen!2sin!4v1680676703789!5m2!1sen!2sin" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </section> */}

      <section className={`${styles.contactUs} ${styles.cart}`}>
        <div className={styles.row}>
            <div className={`${styles.contactcol} ${styles.infoo}`}>
                <div>
                    <i className={`${styles.fa} ${styles.fahome}`}></i>
                    <span>
                        <h5 className={styles.headd}>BPIT</h5>
                        <p>Rohini, Delhi, India</p>
                    </span>
                </div>
                <div>
                    <i className={`${styles.fa} ${styles.faphone}`}></i>
                    <span>
                        <h5 className={styles.headd}>+91 9810257737</h5>
                        <p>Monday to Saturday, 10AM to 6PM</p>
                    </span>
                </div>
                <div>
                    <i className={`${styles.fa} ${styles.faenvelope}`}></i>
                    <span>
                        <h5>gensync@gmail.com</h5>
                        <p>Email us your query</p>
                    </span>
                </div>
            </div>
            <div className={`${styles.contactcol} ${styles.formm}`}>

            <form onSubmit={()=>{handleSubmit()}}>
              <input type="text" name="name" placeholder="Enter your name" required />
              <input type="email" name="email" placeholder="Enter email address" required />
              <input type="text" name="subject" placeholder="Enter your subject" required />
              <textarea rows="8" name="message" placeholder="Message" required></textarea>
              <button type="submit" className={`${styles.herobtn} ${styles.redbtn}`}>
                Send Message
              </button>
            </form>

            </div>
        </div>
      </section>

      <section className={styles.footer}>
        <h4>About Us</h4>
        <p>Empowering young talents to shine, our platform is tailored to meet the needs of juniors, lighting the path to a brighter future.</p>
        <div className={styles.icons}>
            <i className={styles.fasfafacebook}></i>
            <i className={styles.fafatwitter}></i>
            <i className={styles.fafainstagram}></i>
            <i className={styles.fafalinkedin}></i>
        </div>
            <p>Made <i className={styles.fafahearto}></i>by team GenSync.</p>
      </section>
      </div>
    </>
  );
};

export default Footer;
