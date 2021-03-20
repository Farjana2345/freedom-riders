import React from 'react';
import { Link,} from 'react-router-dom';
import './Transport.css';
const Transport = (props) => {
    const{name,img}=props.transport;
    return (
        <div className="col-md-3">
           <div className="transport-area">
                <img src={img} alt=""/>
                <h4>{name}</h4>
                <Link to={`/destination/${name}`}><button style={{marginTop:"20px",float:'right',color:'white',fontWeight:'700px'}}>Buy Now</button></Link>
                 
           </div>
        </div>
    );
};

export default Transport;