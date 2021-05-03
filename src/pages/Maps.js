import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import '../App.css'

const mapStyles = {
    maxWidth: '60%',
    maxHeight: '60%',
    margin: 'auto'


};

export class Maps extends Component {
    render() {
        return (
            <div className="maps">
                <Map
                    google={this.props.google}
                    zoom={14}
                    style={mapStyles}
                    initialCenter={
                        {
                            lat: 12.295810,
                            lng: 76.639381
                        }
                    }
                />
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDFDUIPPgmTEJC5MCYIOARvZnhJ1xCsPtw'
})(Maps);
