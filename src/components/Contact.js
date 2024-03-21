import { PiLinkedinLogoLight } from "react-icons/pi";
import "./Contact.style.css";
import { GrMail } from "react-icons/gr";

const Contact = () => {
  return (
    <section id="contactSection">
      <h2>Contact Me</h2>
      <div className="links-container">
        <div className="contact-link">
          <p>email</p>
          <a href="mailto:chevelynda2@gmail.com">
            <GrMail size={24} />
          </a>
        </div>

        <div className="contact-link">
          <p>linkedin</p>
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
