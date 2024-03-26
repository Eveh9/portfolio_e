import { PiLinkedinLogoLight } from "react-icons/pi";
import "./Contact.css";
import profilImg from "../assets/369640068_780095523870091_4856225720546761459_n.jpg";
import { GrMail } from "react-icons/gr";

const Contact = () => {
  return (
    <section id="contactSection" className="contact-section">
      <h2>Contact Me</h2>
      <img src={profilImg} alt="Victory wings statue" className="contact-img" />

      <div className="links-container">
        <div className="contact-link">
          <p>◢◤ Feel free to reach me out through email </p>
          <a href="mailto:chevelynda2@gmail.com">
            <GrMail size={24} />
          </a>
        </div>

        <div className="contact-link">
          <p>
            ◢◤ I invite you to review my profile to learn more about me, let's
            stay connected on Linkedin
          </p>
          <a
            href="https://www.linkedin.com/in/evelyn-r-9b2207223/"
            target="_blank"
          >
            <PiLinkedinLogoLight size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};
export default Contact;
