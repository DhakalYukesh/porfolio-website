import "../styles/navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faEnvelope,
  faPaperclip,
  faArrowRight,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedinIn,
  faGithub,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import Main from "./Main";

function NavBar() {
  const recipientEmail = "yukeshdhakal42@gmail.com";

  const handleEmailButtonClick = () => {
    const emailUrl = `mailto:${recipientEmail}`;
    window.open(emailUrl, "_blank");
  };

  return (
    <div className="navbar">
      <div className="navbar-section1">
        <div className="circles">
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
        <div className="nav-box">
          <div className="nav-box_element">
            <h3>
              Navigate{" "}
              <FontAwesomeIcon icon={faArrowRight} style={{ fontSize: 12 }} />
            </h3>
            <li>
              <a href="#home">
                <FontAwesomeIcon icon={faHouse} /> Home
              </a>
            </li>
            <li>
              <a href="#home" onClick={handleEmailButtonClick}>
                <FontAwesomeIcon icon={faEnvelope} /> Email
              </a>
            </li>
            <li>
              <a href="#home">
                <FontAwesomeIcon icon={faPaperclip} /> Resume
              </a>
            </li>
          </div>
          <div className="nav-box_element">
            <h3>
              Socials{" "}
              <FontAwesomeIcon icon={faArrowRight} style={{ fontSize: 12 }} />
            </h3>
            <li>
              <a href="#home">
                <FontAwesomeIcon icon={faLinkedinIn} /> LinkedIn
              </a>
            </li>
            <li>
              <a href="#home">
                <FontAwesomeIcon icon={faGithub} /> GitHub
              </a>
            </li>
            <li>
              <a href="#home">
                <FontAwesomeIcon icon={faDiscord} /> Discord
              </a>
            </li>
          </div>
        </div>
      </div>
      <div className="navbar-section2">
        <div className="nav-box1">
          <a className="primary-btn" href="">
            My Resume <FontAwesomeIcon icon={faUser} />
          </a>
        </div>
        <div className="nav-box2">
          <div className="banner">
            <div className="banner-section1">
              <div className="img-container"></div>
              <div className="banner-section1_element">
                <h2>Yukesh Raj Dhakal</h2>
                <p>@_trxster_</p>
              </div>
            </div>
            <div className="banner-section2">
              <a href="#">Kathmandu, Nepal 📍</a>
            </div>
          </div>
          <Main />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
