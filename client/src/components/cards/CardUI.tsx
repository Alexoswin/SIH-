import React from 'react';
import './cards.scss';
import { Link } from 'react-router-dom';

const Card = (props) => {
  // Use specific links for each card
  const patientsLink = '/patient_details'; // Update with your actual route
  const centersLink = '/center_details'; // Update with your actual route
  
  return (
    <div className='cards'>
      <div className="card text-center shadow">
        <div className="overflow">
          <img src={props.imgsrc} alt="Image1" className='card-img-top' />
        </div>
        <div className="card-body text-dark">
          <h4 className="card-title">{props.title}</h4>
          <p className="card-text text-secondary">
          
          </p>
          {/* Use specific links for each card */}
          
        </div>
      </div>
    </div>
  );
};

export default Card;
