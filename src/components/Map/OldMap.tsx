import React, { useState } from 'react'
// import Map, { MapProps } from 'react-map-gl'
// import 'mapbox-gl/dist/mapbox-gl.css'
// import CustomMarker from './CustomMarker'

// interface CustomMapProps extends MapProps {
//     places: any
//     currentPlace: any
// }

// const CustomMap = ({ places, currentPlace, ...props }: CustomMapProps) => {
//     const [viewState, setViewState] = useState<any>({
//         latitude: currentPlace.coordinates[1],
//         longitude: currentPlace.coordinates[0],
//         zoom: 10,
//     })

//     return (
//         <div className='map-container'>
//             <Map
//                 {...viewState}
//                 {...props}
//                 attributionControl={false}
//                 pitch={25}
//                 reuseMaps
//                 id='myMap'
//                 mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
//                 onMove={(e) => setViewState(e.viewState)}
//                 mapStyle='mapbox://styles/mapbox/outdoors-v11'
//             >
//                 {places.entries.map((place: any) => {
//                     return (
//                         <CustomMarker
//                             key={place.title}
//                             title={place.title}
//                             longitude={place.coordinates[0]}
//                             latitude={place.coordinates[1]}
//                             anchor='top'
//                             active={currentPlace.title === place.title}
//                         />
//                     )
//                 })}
//             </Map>
//         </div>
//     )
// }
const CustomMap = () => <div>hi</div>
export default CustomMap
