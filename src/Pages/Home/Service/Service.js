import React from "react";
import { useNavigate } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const { id, name, img, description, price } = service;
  const navigate = useNavigate();

  const handleBooking = (id) => {
    navigate(`/service/${id}`);
  };
  return (
    <div className="service-container">
      <img src={img} alt="" />
      <div className="service-details">
        <h2>{name}</h2>
        <p>Price:{price}</p>
        <p>
          <small>{description}</small>
        </p>
      </div>
      <button onClick={() => handleBooking(id)}>Book Now</button>
    </div>
  );
};

export default Service;
