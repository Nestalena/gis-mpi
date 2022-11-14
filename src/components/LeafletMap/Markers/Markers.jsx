import React from 'react';
import {

    TileLayer,
    LayersControl,
    FeatureGroup,

} from "react-leaflet";

const {BaseLayer: Base} = LayersControl;

const Base = (props) => {
    return (
        <FeatureGroup>
            <Base checked name='Outdoor'>
                <TileLayer url="https://api.maptiler.com/maps/outdoor/{z}/{x}/{y}.png?key=sQeLeSNqs9j2EWiP0p6C"/>
            </Base>
            <Base name='OpenStreetMap'>
                <TileLayer url="https://api.maptiler.com/maps/openstreetmap/{z}/{x}/{y}.jpg?key=sQeLeSNqs9j2EWiP0p6C"/>
            </Base>
            <Base name='Streets'>
                <TileLayer url="https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=sQeLeSNqs9j2EWiP0p6C"/>
            </Base>
            <Base name='Satellite Hybrid'>
                <TileLayer url="https://api.maptiler.com/maps/hybrid/{z}/{x}/{y}.jpg?key=sQeLeSNqs9j2EWiP0p6C"/>
            </Base>
        </FeatureGroup>
    )
}

export default Base;