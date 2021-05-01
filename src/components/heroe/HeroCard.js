import React from "react";
import { Link } from "react-router-dom";
export const HeroCard = ({ id, superhero, first_appearance }) => {
  return (
    <div className="col">
      <div className="card ms-3" style={{ maxWidth: 540 }}>
        <img
          src={`./assets/heroes/${id}.jpg`}
          className="card-img"
          alt={superhero}
        />
        <div className="card-body">
          <h5 className="card-title"> {superhero} </h5>
          <p className="card-text">
            <small className="text-muted">{first_appearance}</small>
          </p>
          <Link to={`/hero/${id}`}>Mas...</Link>
        </div>
      </div>
    </div>
  );
};
