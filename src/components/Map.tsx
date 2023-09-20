import React, {useEffect, useState} from 'react';
import OlMap from 'ol/Map';
import 'ol/ol.css'


export const MapContext = React.createContext<any>(undefined);

const Map = (props: { children?: React.ReactNode }) => {
    const [mapState, setMapState] = useState<any>(undefined);
    const {children} = props;

    useEffect(() => {
        const map = new OlMap({target: 'map'});
        setMapState(map)
        return () => map.dispose()
    }, []);

    return (
        <MapContext.Provider value={{mapState, setMapState}}>
            <div id={'map'} style={{width: '100vw', height: '100vh'}}/>
            {children}
        </MapContext.Provider>

    );
};

export default Map;
