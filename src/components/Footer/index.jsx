import styles from "./index.module.css";
import logo from "../../assets/images/Logo footer.png";
import { FaTwitter } from "react-icons/fa";
import { GrFacebookOption } from "react-icons/gr";
import { IoLogoTiktok } from "react-icons/io5";
import { AiFillInstagram } from "react-icons/ai";

export default function Footer() {
  return (
    <footer>
      <div className={styles.container}>
        <div className={styles.contentLogo}>
          <img src={logo} />
          <p>
            We are a residential interior design firm located in Portland. Our
            boutique-studio offers more than
          </p>
        </div>

        <div className={styles.services}>
          <h4>Services</h4>
          <p>Bonus program</p>
          <p>Gift cards</p>
          <p>Credit and payment</p>
          <p>Service contracts</p>
          <p>Non-cash account</p>
          <p>Payment</p>
        </div>

        <div className={styles.services}>
          <h4>Assistance to the buyer</h4>
          <p>Find an order</p>
          <p>Terms of delivery</p>
          <p>Exchange and return of goods</p>
          <p>Guarantee</p>
          <p>Frequently asked questions</p>
          <p>Terms of use of the site</p>
        </div>
      </div>

      <div className={styles.icons}>
        <FaTwitter className={styles.icon} />
        <GrFacebookOption className={styles.icon} />
        <IoLogoTiktok className={styles.icon} />
        <AiFillInstagram className={styles.icon} />
      </div>
    </footer>
  );
}
