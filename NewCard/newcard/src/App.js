// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faStar,
//   faEnvelope,
//   faDollarSign,
//   faAddressBook,
//   faPhoneFlip,
//   faCircleCheck,
// } from "@fortawesome/free-solid-svg-icons";
// // import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
// import "./App.css";
// import CardWrapper from "./components/CardWrapper";
// import freelancer1 from "./assets/img/freelancer1.jpg";

// function App() {
//   const freelancer = [
//     {
//       id: 0,
//       title: "MRS",
//       lastName: "ROBERT",
//       role: "UI/UX Designer",
//       fee: 85,
//       reviews: 105,
//       img: freelancer1,
//     },
//   ];

//   return (
//     <div className="card-container">
//       <CardWrapper>
//         <div className="img-container">
//           <div className="img-wrapper">
//             <img src={freelancer1} alt="freenlancer-one" />
//             <span className="dot"></span>
//           </div>
//         </div>
//         <div className="info-container">
//           <h3>MRS ROBERT</h3>
//           <p>UI/UX Designer</p>
//           <div className="hire">
//             <div>
//               Rate: <span className="price">$85/hr</span>
//             </div>
//             <button className="hire-btn">Hire Me</button>
//           </div>
//           <div className="rating">
//             <div>5.0</div>
//             <div>
//               <FontAwesomeIcon icon={faStar} />
//               <FontAwesomeIcon icon={faStar} />
//               <FontAwesomeIcon icon={faStar} />
//               <FontAwesomeIcon icon={faStar} />
//               <FontAwesomeIcon icon={faStar} />
//             </div>
//             <div>(105 reviews)</div>
//           </div>
//           <div className="icons">
//             <div className="verified">
//               <FontAwesomeIcon icon={faCircleCheck} />
//               <span>Verified</span>
//             </div>
//             <span className="circle available">
//               <FontAwesomeIcon icon={faDollarSign} />
//             </span>
//             <span className="circle available">
//               <FontAwesomeIcon icon={faEnvelope} />
//             </span>
//             <span className="circle not-available">
//               <FontAwesomeIcon icon={faAddressBook} />
//             </span>
//             <span className="circle not-available">
//               <FontAwesomeIcon icon={faPhoneFlip} />
//             </span>
//           </div>
//         </div>
//       </CardWrapper>
//     </div>
//   );
// }

// export default App;

import "./App.css";
import Card from "./components/Card";
import freelancer1 from "./assets/img/freelancer1.jpg";

function App() {
  const freelancers = [
    {
      id: 0,
      title: "MRS",
      lastName: "ROBERT",
      role: "UI/UX Designer",
      fee: 85,
      reviews: 105,
      img: freelancer1,
    },
      {
      id: 1,
      title: "MRS",
      lastName: "DURAN",
      role: "Web Designer",
      fee: 60,
      reviews: 125,
      img: freelancer1,
    },
  {
      id: 2,
      title: "MRS",
      lastName: "SILVIA",
      role: "Web Developer",
      fee: 95,
      reviews: 135,
      img: freelancer1,
    },

    // Aquí puedes añadir más freelancers
  ];

  return (
    <div className="card-container">
      {freelancers.map((f) => (
        <Card key={f.id} data={f} />
      ))}
    </div>
  );
}

export default App;

