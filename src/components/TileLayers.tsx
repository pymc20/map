import React, {useContext} from 'react';
import {MapContext} from "./Map";
import TileLayer from "ol/layer/Tile";
import {OSM} from "ol/source";

const TileLayers = () => {
    const mapContext = useContext(MapContext);
    if (mapContext.mapState) {
        mapContext.mapState.setLayers([new TileLayer({source: new OSM()})])
    }

    return (
        <></>
    );
};

export default TileLayers;
