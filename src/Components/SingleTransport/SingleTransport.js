import React, {  useState } from 'react';
import { useParams } from 'react-router';
import singleData from '../../fakeData/singleData.json';
import CarDetails from '../CarDetails/CarDetails';
import './SingleTransport.css';
const SingleTransport = () => {
    const {name} = useParams();
   
    const [search,setSearch]=useState(false);

    const[field, setField] = useState({
        pickFrom:'',
        pickTo:'',
        date:'',
        time:''
    })
    const searchData=singleData.filter(carData=>{return carData.name === name});
     console.log(searchData);

     const handleField =(e)=>{
         const newField = {...field};
         newField[e.target.name]=e.target.value;
         setField(newField);
         
     }
     console.log(field)
    return (
        <div>
            {search &&<div className="place">
            <h4>{field.pickFrom} <br/> <small>From</small>  </h4>
            <h4>{field.pickTo}</h4>
            <h4>Date : {field.date}</h4>
            <h4>Time : {field.time}</h4>
            </div>}
               { !search && <form submitOnForm={(e)=>e.preventDefault()} className="destination-form">
                    <label for="male">Pick From</label>
                    <br/>
                    <input onBlur={handleField} className="fild" type="text" name="pickFrom" />
                    <br/>
                    <label for="male">Pick to</label>
                   <br/>
                    <input onBlur={handleField} className="fild" type="text" name="pickTo" />
                   <br/>
                   <label for="male">Date</label>
                   <br/>
                    <input onBlur={handleField} className="fild" type="date" name="date" />
                    <br/>
                    <label for="male">Time</label>
                    <br/>
                    <input onBlur={handleField} className="fild" type="time" name="time" />
                    <br/>
                    <br/>
                    <input className="searchBtn" onClick={()=>setSearch(true)} style={{width:'350px'}} type="submit" value="Search"/>
                    
                </form>}
                

                {search &&
                searchData.map(singleCar=><CarDetails singleCar={singleCar}></CarDetails>)
            }
          
        </div>
    );
};

export default SingleTransport;