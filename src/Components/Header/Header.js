
import { useContext } from 'react';
import firebase from "firebase/app";
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Header.css';
const Header = () => {
    const[loggedInUser, setLoggedInUser]=useContext(UserContext);

    const handleSignOut = ()=>{
        firebase.auth().signOut()
        .then(res=>{
           setLoggedInUser({})
        })
        .catch((error) => {  
          });
       }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <h3 style={{marginTop:'20px',color:'#659DBD'}}>Freedom Riders</h3>
                </div>
                <div style={{backgroundColor:'white'}} className="col-md-9">
                     <nav>
                        <ul>
                            <li>
                                <Link to="/home">Home</Link>
                            </li>    
                            <li>
                                <Link to="/destination">Destination</Link>
                            </li>
                            <li>
                                <Link to="/users">Blog</Link>
                            </li>
                            <li>
                                <Link to="/users">Contact</Link>
                            </li>
                            <li>
                                <p>{loggedInUser.name}</p>
                            </li>
                            <li> 
                                {loggedInUser.login?
                                    <Link onClick={handleSignOut}><button>LogOut</button></Link>
                                    :<Link to="/login"><button>LogIn</button></Link>
                                }
                            </li>
                        </ul>
                    </nav>
                </div>

            </div>
           
        </div>
    );
};

export default Header;




