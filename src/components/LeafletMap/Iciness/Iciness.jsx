import React from 'react';
import {ImageOverlay} from "react-leaflet";

const IceContent = (props) => {
    return (
        <ImageOverlay
            url="https://i.ibb.co/nR80HMg/ice.png"
            bounds={[
                [76.43616, 105.39235],
                [55.32823, 163.13291]
            ]}/>
    )
}

export default IceContent;