import React from 'react';
import './CarDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAlt } from '@fortawesome/free-solid-svg-icons'

const CarDetails = ({singleCar}) => {
    const{name,img,amount,ticket}=singleCar;
    return (
        <div className="carDetails-area">
            <div className="details-area">
                <div className="row background-image">
                    <div className="col-md-12">
                        <div className="image">
                            <img src={img} alt=""/>
                            <h4>{name}</h4>
                            <h4 style={{display:'flex'}}><FontAwesomeIcon icon={faUserAlt} /> {ticket}</h4>
                            <h4>$ {amount}</h4>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
    );
};

export default CarDetails;