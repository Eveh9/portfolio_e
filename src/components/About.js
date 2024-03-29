import "./About.css";
import natureImg from "../assets/434020149_251964671338688_6917177263862751269_n.jpg";
import sunImg from "../assets/434120970_1138198357199107_5650272781308125059_n.jpg";

const About = () => {
  return (
    <section id="aboutSection" className="about-section">
      <h2>About</h2>
      <div className="about-content">
        <div className="about-img-list ">
          <div className="about-img-container">
            <img src={sunImg} className="about-image" />
          </div>
          <div className="about-img-container">
            <img src={natureImg} className="about-image" />
          </div>
        </div>

        <div className="about-text">
          <div className="name-container">
            <h3>Hello! I'm EVELYN RESENDIZ</h3>
          </div>
          <div className="self-description">
            <p>
              I'm on my way to become a full stack web developper. I find
              fascinating how coding can give live to useful tools for people
              online. Some of my other interests are meditacion, dance and
              traveling. I love to immerse inside myself and be attentive to my
              inner voice, listen to the music while I dance and discover new
              horizons, culture and food whenever I travel.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
