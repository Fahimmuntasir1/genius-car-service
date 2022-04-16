import React from "react";

import expert1 from "../../../images/experts/expert-1.jpg";
import expert2 from "../../../images/experts/expert-2.jpg";
import expert3 from "../../../images/experts/expert-3.jpg";
import expert4 from "../../../images/experts/expert-4.jpg";
import expert5 from "../../../images/experts/expert-5.jpg";
import expert6 from "../../../images/experts/expert-6.png";
import Expert from "../Expart/Expert";

const allExperts = [
  { id: 1, name: "Will Smith", img: expert1 },
  { id: 2, name: "Chris Rock", img: expert2 },
  { id: 3, name: "Dwayne Rock", img: expert3 },
  { id: 4, name: "Messi Bro", img: expert4 },
  { id: 5, name: "Ronaldo Bro", img: expert5 },
  { id: 6, name: "Alexa ", img: expert6 },
];

const experts = () => {
  return (
    <div id="experts" className="container">
      <h1 className="text-center m-5">Our Experts</h1>
      <div className="row g-5 ">
        {allExperts.map((expert) => (
          <Expert key={expert.id} expert={expert}></Expert>
        ))}
      </div>
    </div>
  );
};

export default experts;
