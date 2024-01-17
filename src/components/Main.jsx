import "../styles/main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCookieBite
} from "@fortawesome/free-solid-svg-icons";

function Main() {
  return (
    <div className="project">
      <h2>My Projects 💡</h2>
      <div className="project-section1">
        <div className="box-container">
          <div href="#" className="box-container_img">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/DhakalYukesh/hpi-hotelmanagement"
            >
              <img src="/images/project1.png" alt="project img" />
            </a>
          </div>
          <div className="box-container_details">
            <h3>HPI - Hotel Management System</h3>
            <p>Tech used: Laravel, PHP, HTML, CSS, JS, MySQL, PayPal API </p>
          </div>
        </div>
        <div className="box-container">
          <div href="#" className="box-container_img">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/DhakalYukesh/hpi-hotelmanagement"
            >
              <img src="/images/project2.png" alt="project img" />
            </a>
          </div>
          <div className="box-container_details">
            <h3>StarBucks UI Clone</h3>
            <p>Tech used: HTML, Vanilla CSS, Javascript, Responsive Design</p>
          </div>
        </div>
        <div className="box-container">
          <div href="#" className="box-container_img">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/DhakalYukesh/hpi-hotelmanagement"
            >
              <img src="/images/project1.png" alt="project img" />
            </a>
          </div>
          <div className="box-container_details">
            <h3>HPI - Hotel Management System</h3>
            <p>Tech used: Laravel, PHP, HTML, CSS, JS, MySQL, PayPal API, </p>
          </div>
        </div>
        <div className="box-container">
          <div href="#" className="box-container_img">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/DhakalYukesh/hpi-hotelmanagement"
            >
              <img src="/images/project1.png" alt="project img" />
            </a>
          </div>
          <div className="box-container_details">
            <h3>HPI - Hotel Management System</h3>
            <p>Tech used: Laravel, PHP, HTML, CSS, JS, MySQL, PayPal API, </p>
          </div>
        </div>
      </div>
      <div className="project-section2">
        <div className="box-container1">
          <h2>My Skills 🎯</h2>
          <div className="skills-container">
            <div className="skills-container_wrapper">
              <h3>Frontend</h3>
              <ul>
                <li id="yellow">Javascript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Tailwind</li>
                <li id="blue">React Js</li>
                <li>Bootstrap</li>
              </ul>
            </div>
            <div className="skills-container_wrapper">
              <h3>Backend</h3>
              <ul>
                <li>Express Js</li>
                <li id="green">Node Js</li>
                <li id="orange">Laravel</li>
                <li>PHP</li>
              </ul>
            </div>
            <div className="skills-container_wrapper">
              <h3>Database</h3>
              <ul>
                <li>MySQL</li>
                <li id="orange">MongoDB</li>
              </ul>
            </div>
            <div className="skills-container_wrapper">
              <h3>Tools</h3>
              <ul>
                <li>VS Code</li>
                <li id="yellow">Postman</li>
                <li>Notion</li>
                <li>Excalidraw</li>
                <li id="blue">Git</li>
                <li id="red">PowerShell</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="box-container2">
          <h2>More Projects »</h2>
          <div className="moreproject">
            <div className="moreproject_items">
              <a href="">
                <FontAwesomeIcon icon={faCookieBite} />
                <div className="item_details">
                  <h3>Project Name</h3>
                  <p>HTML, CSS, PhP, JS</p>
                </div>
              </a>
            </div>
            <div className="moreproject_items">
              <a href="">
                <FontAwesomeIcon icon={faCookieBite} />
                <div className="item_details">
                  <h3>Project Name</h3>
                  <p>HTML, CSS, PhP, JS</p>
                </div>
              </a>
            </div>
            <div className="moreproject_items">
              <a href="">
                <FontAwesomeIcon icon={faCookieBite} />
                <div className="item_details">
                  <h3>Project Name</h3>
                  <p>HTML, CSS, PhP, JS</p>
                </div>
              </a>
            </div>
            <div className="moreproject_items">
              <a href="">
                <FontAwesomeIcon icon={faCookieBite} />
                <div className="item_details">
                  <h3>Project Name</h3>
                  <p>HTML, CSS, PhP, JS</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
