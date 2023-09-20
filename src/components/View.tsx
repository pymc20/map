import React, {useContext} from 'react';
import {MapContext} from "./Map";
import OlView from "ol/View"

const View = () => {
    const mapContext = useContext(MapContext);
    if (mapContext.mapState) {
        mapContext.mapState.setView(new OlView({center: [0, 0], zoom: 2}))
    }

    return (
        <></>
    );
};

export default View;
