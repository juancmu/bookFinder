import React, { useRef, useState } from 'react';
import {MapContainer, Marker, Popup, TileLayer, useMap} from 'react-leaflet'
import './leaflet.css';
import './styles.css'
import '../bootstrap.min.css'
// import useCounter from './useCounter';
// import useCustomHook from './useCustomHook.jsx';




const geoStoreBooks = [
                {lat: 4.724769857324674, lon: -74.03644203616295, bookStore: "Books & Books Bogota"},
                {lat: 4.718268861107518, lon: -74.029232258281015, bookStore: "Libreria Nacional"},
                {lat: 4.681143587124686, lon: -74.04313682991045, bookStore: "Safari Book Store"},
                {lat: 4.6902637303856665, lon: -74.06768390047162, bookStore: "Ediciones Gaviota"},
                {lat: 4.6802637303856665, lon: -74.07768390047162, bookStore: "Libreria Condor"},
                {lat: 4.7002637303856665, lon: -74.08768390047162, bookStore: "Ediciones Salvat"},
                {lat: 4.7102637303856665, lon: -74.09768390047162, bookStore: "Circulo de Lectores"},
                {lat: 4.7202637303856665, lon: -74.09568390047162, bookStore: "Libreria Palatino"},
                {lat: 4.7302637303856665, lon: -74.09868390047162, bookStore: "Ediciones Tommas and Tommas"},
                {lat: 4.7302637303856665, lon: -74.09868390047162, bookStore: "Ediciones Andino"},

                
]
console.log(geoStoreBooks);


// const {geoLoc, increment, reset} = useCounter;




export const Maps = () => {


// const [geoLoc, increment, reset] = useCustomHook;

const [geoLoc, setGeoLoc] = useState(0)

const increment =()=>{

geoLoc<9 ? setGeoLoc(geoLoc+1) : setGeoLoc(0)

}



function ChangeView({ center, zoom }) {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}


const mapRef = useRef()

const ZOOM_LEVEL  = 12;


  return (
<>
    <div className='findStore'> 
    <div className='titleStore'>{geoStoreBooks[geoLoc].bookStore} </div>
    <div className='btnStore'><button className='btn-danger' onClick={increment}>Buscar Otra Tienda</button></div>
    </div> 
   <MapContainer className='maps'
   center= {{lat: geoStoreBooks[geoLoc].lat, lon: geoStoreBooks[geoLoc].lon }}
   zoom={ZOOM_LEVEL} 
   ref={mapRef}
   >
    <ChangeView center={{lat: geoStoreBooks[geoLoc].lat, lon: geoStoreBooks[geoLoc].lon }} zoom={ZOOM_LEVEL} /> 
    <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[geoStoreBooks[geoLoc].lat, geoStoreBooks[geoLoc].lon]}>
    <Popup>
    <p>{geoStoreBooks[geoLoc].bookStore }</p>
    </Popup>
  </Marker>

    </MapContainer>
  {/* <h1>{geoLoc}</h1> */}
   {/* <button onClick={reset}>Tienda Inicial</button> */}
   </>

  )
}
