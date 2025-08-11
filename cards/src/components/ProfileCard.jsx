import React from "react";
import "./ProfileCard.css";
import profilePic from "../assets/upload.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faDollarSign,
  faEnvelope,
  faFileAlt,
  faPhone
} from "@fortawesome/free-solid-svg-icons";

export default function ProfileCard() {
  return (
    <div className="card">
      {/* Imagen de perfil */}
      <div className="avatar-wrap">
        <img src={profilePic} alt="NAT" className="avatar" />
        <span className="status"></span>
      </div>

      {/* Nombre y rol */}
      <h2 className="name">MRS. NAT</h2>
      <p className="role">UI/UX Designer</p>

      {/* Tarifa y botón */}
      <div className="rate-row">
        <p className="rate">
          Rate: <span className="price">$85/hr</span>
        </p>
        <button className="hire">Hire Me</button>
      </div>

      {/* Reseñas */}
      <div className="reviews">
        <span className="badge">5.0</span>
        <div className="stars">{"★".repeat(5)}</div>
        <span className="rev-count">(105 Reviews)</span>

      
      </div>

      {/* Iconos */}
      <div className="icons">
        <div className="verified">
          <FontAwesomeIcon icon={faCircleCheck} />
          <span>Verified</span>
        </div>
        <div className="icon green">
          <FontAwesomeIcon icon={faDollarSign} />
        </div>
        <div className="icon cyan">
          <FontAwesomeIcon icon={faEnvelope} />
        </div>
        <div className="icon gray">
          <FontAwesomeIcon icon={faFileAlt} />
        </div>
        <div className="icon gray">
          <FontAwesomeIcon icon={faPhone} />
        </div>
      </div>
    </div>
  );
}


