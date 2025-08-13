// src/components/Card.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faEnvelope,
  faDollarSign,
  faAddressBook,
  faPhoneFlip,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import CardWrapper from "./CardWrapper";

function Card({ data }) {
  return (
    <CardWrapper>
      <div className="img-container">
        <div className="img-wrapper">
          <img src={data.img} alt={`${data.title} ${data.lastName}`} />
          <span className="dot"></span>
        </div>
      </div>

      <div className="info-container">
        <h3>
          {data.title} {data.lastName}
        </h3>
        <p>{data.role}</p>

        <div className="hire">
          <div>
            Rate: <span className="price">${data.fee}/hr</span>
          </div>
          <button className="hire-btn">Hire Me</button>
        </div>

        <div className="rating">
          <div>5.0</div>
          <div>
            {[...Array(5)].map((_, i) => (
              <FontAwesomeIcon icon={faStar} key={i} />
            ))}
          </div>
          <div>({data.reviews} reviews)</div>
        </div>

        <div className="icons">
          <div className="verified">
            <FontAwesomeIcon icon={faCircleCheck} />
            <span>Verified</span>
          </div>
          <span className="circle available">
            <FontAwesomeIcon icon={faDollarSign} />
          </span>
          <span className="circle available">
            <FontAwesomeIcon icon={faEnvelope} />
          </span>
          <span className="circle not-available">
            <FontAwesomeIcon icon={faAddressBook} />
          </span>
          <span className="circle not-available">
            <FontAwesomeIcon icon={faPhoneFlip} />
          </span>
        </div>
      </div>
    </CardWrapper>
  );
}

export default Card;
