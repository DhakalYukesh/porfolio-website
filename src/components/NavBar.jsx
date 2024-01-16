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

function NavBar() {
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
              <a href="#home">
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
        <div className="nav-box2">test</div>
      </div>
    </div>
  );
}

export default NavBar;
