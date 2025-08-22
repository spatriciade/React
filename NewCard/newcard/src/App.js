import "./App.css";
import CardsContainer from "./components/CardsContainer";
import CardWrapper from "./components/CardWrapper";
import CardImg from "./components/CardImg";
import CardInfo from "./components/CardInfo";
import { freelancers } from "./db/freelancer";
//  import freelancer1 from "./assets/img/freelancer1.jpg"
function App() {
  //  const freelancer = [
  //    {
  //      id: 0,
  //      title: "MRS",
  //      lastName: "ROBERT",
  //      role: "UI/UX Designer",
  //      fee: 85,
  //      reviews: 105,
  //      img: freelancer1,
  //    },
  //  ]
  return (

      <CardsContainer>
        {freelancers.map((freelancer)=>{
            return(
                   <CardWrapper key={freelancer.id}>
        <CardImg freelancer={freelancer} />
        <CardInfo freelancer={freelancer}/>
      </CardWrapper>
     

            )
          })  }
    
   </CardsContainer>
  );
}

export default App;

// import "./App.css";
// import Card from "./components/Card";
// import freelancer1 from "./assets/img/freelancer1.jpg";

// function App() {
//   const freelancers = [
//     {
//       id: 0,
//       title: "MRS",
//       lastName: "ROBERT",
//       role: "UI/UX Designer",
//       fee: 85,
//       reviews: 105,
//       img: freelancer1,
//     },
//       {
//       id: 1,
//       title: "MRS",
//       lastName: "DURAN",
//       role: "Web Designer",
//       fee: 60,
//       reviews: 125,
//       img: freelancer1,
//     },
//   {
//       id: 2,
//       title: "MRS",
//       lastName: "SILVIA",
//       role: "Web Developer",
//       fee: 95,
//       reviews: 135,
//       img: freelancer1,
//     },

//     // Aquí puedes añadir más freelancers
//   ];

//   return (
//     <div className="card-container">
//       {freelancers.map((f) => (
//         <Card key={f.id} data={f} />
//       ))}
//     </div>
//   );
// }

// export default App;
