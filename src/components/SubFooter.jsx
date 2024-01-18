import "../styles/subfooter.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMap,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";

const SubFooter = () => {
  return (
    <div className="subfooter flex">
      <div data-aos="fade-up" data-aos-duration="150" className="subfooter-container container flex">
        <div className="subfooter-container-box ">
          <h3 className="contact_title">Contact 💬</h3>
          <h2>
            Don<span>&#39;</span>t forget to Hit me up!{" "}
          </h2>

          <div className="subfooter-container-box_info flex">
            <div className="inner-box1 flex">
              <div className="circle flex"><FontAwesomeIcon icon={faMap} style={{ fontSize: 21, color: "var(--primary-color)" }} className="map" /></div>
              <div className="infos">
                <h3>Location</h3>
                <p>Kathmandu, Nepal</p>
              </div>
            </div>
            <div className="inner-box2 flex">
              <div className="circle flex"><FontAwesomeIcon icon={faEnvelope} style={{ fontSize: 22, color: "var(--primary-color)" }} className="mail" /></div>
              <div className="infos">
                <h3>Email</h3>
                <p>Yukeshdhakal42@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="footer-container flex">
            <h2>Copyright © 2023. All rights are reserved</h2>
        </div>
    </div>
    </div>
  );
};

export default SubFooter;
