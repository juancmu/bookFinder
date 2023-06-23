import React, { useRef, useState } from 'react';
import {MapContainer, Marker, Popup, TileLayer, useMap} from 'react-leaflet'
import '../leaflet.css';
import '../App.css'
// import useCounter from './useCounter';
// import useCustomHook from './useCustomHook.jsx';




const coords = [
                {lat: 4.724769857324674, lon: -74.03644203616295, bookStore: "Books & Books Bogota"},
                {lat: 4.718268861107518, lon: -74.029232258281015, bookStore: "Libreria Nacional"},
                {lat: 4.681143587124686, lon: -74.04313682991045, bookStore: "Safari Book Store"},
                {lat: 4.6902637303856665, lon: -74.06768390047162, bookStore: "Ediciones Gaviota"},

                
]
console.log(coords);


// const {geoLoc, increment, reset} = useCounter;




export const Maps = () => {


// const [geoLoc, increment, reset] = useCustomHook;

const [geoLoc, setGeoLoc] = useState(0)

const increment =()=>{

setGeoLoc(geoLoc+1)

}



function ChangeView({ center, zoom }) {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}


const mapRef = useRef()

const ZOOM_LEVEL  = 10;


  return (
<>

   <MapContainer className='maps'
   center= {{lat: coords[geoLoc].lat, lon: coords[geoLoc].lon }}
   zoom={ZOOM_LEVEL} 
   ref={mapRef}
   >
    <ChangeView center={{lat: coords[geoLoc].lat, lon: coords[geoLoc].lon }} zoom={ZOOM_LEVEL} /> 
    <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[coords[geoLoc].lat, coords[geoLoc].lon]}>
    <Popup>
    <p>{coords[geoLoc].bookStore }</p>
    </Popup>
  </Marker>

    </MapContainer>
<h1>{geoLoc}</h1>
   <button onClick={increment}>Buscar Otra Tienda</button>
   {/* <button onClick={reset}>Tienda Inicial</button> */}
   </>

  )
}
