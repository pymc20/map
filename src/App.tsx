import React from 'react';
import Map from "./components/Map";
import TileLayers from "./components/TileLayers";
import View from "./components/View";

function App() {
    return (
        <Map>
            <TileLayers/>
            <View/>
        </Map>
    );
}

export default App;
