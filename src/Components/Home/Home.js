import React, { useEffect, useState } from 'react';
import Transport from '../Transport/Transport';
import fakeData from '../../fakeData/data.json';
const Home = () => {
    const[transports,setTransport]=useState([]);
    useEffect(()=>{
        setTransport(fakeData)
    }, [])
    return (
        <div className="background">
            <div className="container">
                <div className="row">
                    {
                        transports.map(transport=><Transport transport={transport}></Transport>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;