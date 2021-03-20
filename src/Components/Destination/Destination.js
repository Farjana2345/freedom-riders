import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import './Destination.css';
import SingleTransport from '../SingleTransport/SingleTransport';
export class Destination extends Component {
    render() {
      return (
    <div className="container">
        <div className="row">
            <div className="col-md-6">
                
                <SingleTransport></SingleTransport>
            </div>
            <div className="col-md-6">
                <Map style={{width:'520px',height:'500px'}} google={this.props.google} zoom={14}>
    
                    <Marker onClick={this.onMarkerClick}
                            name={'Current location'} />

                    <InfoWindow onClose={this.onInfoWindowClose}>
                        
                    </InfoWindow>
                </Map>
            </div>
            </div>
       
         </div>
      );
      }
  }

export default GoogleApiWrapper({
    apiKey: ("AIzaSyA_5t6p5bKVFraslt4ylhiMrTnSDPwtPVk")
  })(Destination)