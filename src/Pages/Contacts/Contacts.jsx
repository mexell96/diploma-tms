import Form from "../../components/Form"
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import React, { Component } from 'react'
import background from "../../images/background.jpg";

const containerStyleMap = {
  position: 'relative',  
  height: "490px",
  width: "635px", 
  margin: "20px"
};

class Contacts extends Component {
  state = {
    selectedPlace: "Minks"
  }

  onMarkerClick = (props, marker, e) => {
    console.log({ props, marker, e })
  }

  render() {
    return (
      <div style={{backgroundImage: `url(${background})`}}>
        <div style={{ display: "flex", width: 1110, background: "grey",  margin: "0 auto"}}>
          <div style={{width: "350px", height: 490, background: "white", margin: "20px"}}>
            <Form email="" />
          </div>
          <div>
            <Map containerStyle={containerStyleMap} google={this.props.google} zoom={14} initialCenter={{lat: 53.905180, lng: 27.553379}}>

              <Marker
                title={'The marker`s title will appear as a tooltip.'}
                name={'SOMA'}
                position={{ lat: 53.919111, lng: 27.502004 }} />

              <Marker onClick={this.onMarkerClick}
                name={'Current location'} draggable />

              <InfoWindow onClose={this.onInfoWindowClose}>
                <div>
                  <h1>{this.state.selectedPlace.name}</h1>
                </div>
              </InfoWindow>
            </Map>
          </div>
        </div>
      </div>
    )
  }
}


export default GoogleApiWrapper({
  apiKey: ("AIzaSyCP8PgFlGDWsq-p7UTV6qg2WxYv9VrPGWk")
})(Contacts)
