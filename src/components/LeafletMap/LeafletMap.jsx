import React from 'react';
import classes from './Test.module.css';

import {MapContainer, TileLayer} from "react-leaflet";


const Test = (props) => {
    return (
            <div className={classes.leafletContainer}>
                <MapContainer
                    style={{height: '100%', width: '100%'}}
                    center={[62.55612533440427, 114.1896948998516]}
                    zoom={10}
                >
                    <TileLayer attribution='  <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
                                url="https://api.maptiler.com/maps/outdoor/256/{z}/{x}/{y}.png?key=uKtQjiQQUPhaMa6kepv6"/>
                </MapContainer>


            </div>
    );
}


export default Test;



