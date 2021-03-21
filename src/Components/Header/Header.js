
import { useContext } from 'react';
import firebase from "firebase/app";
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Header.css';
const Header = (props) => {
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
        
        <div style={{backgroundColor:'#FAF0DC'}}>
           
        <div className="container">
            <nav style={{backgroundColor:'#FAF0DC'}} class="navbar navbar-expand-lg navbar-light">
                <div class="container-fluid">
                    <Link style={{marginTop:'20px',color:'#659DBD',fontWeight:'bold'}} class="navbar-brand" to="/"><h2>Freedom Riders</h2></Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <ul style={{fontSize: '20px',fontWeight: 'bold'}} class="navbar-nav ml-auto">
                        <Link style={{color:'blue'}} class="nav-link" aria-current="page" to="/home">Home</Link>
                        <Link style={{color:'blue'}} class="nav-link" to="/destination">Destination</Link>
                        <Link style={{color:'blue'}} class="nav-link" to="/users">Blog</Link>
                        <Link style={{color:'blue'}} class="nav-link " to="/users">Contact</Link>
                        <Link style={{color:'black'}} class="nav-link " to="/users">{loggedInUser.email}</Link>
                        {loggedInUser.email?
                                <Link to="/login" onClick={handleSignOut}><button>LogOut</button></Link>
                                :<Link to="/login"><button>LogIn</button></Link>
                        }
                    </ul>
                    </div>
                </div>
            </nav> 
        </div>
        </div>
    );
};

export default Header;




