import React, { useRef, useEffect, useState } from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import CustomMarker from './CustomMarker'

interface CustomMapProps {
    places: any
    currentPlace: any
}

const CustomMap = ({ places, currentPlace }: CustomMapProps) => {
    const mapContainerRef = useRef<any>(null)
    const [map, setMap] = useState<any>(null)

    useEffect(() => {
        const map: mapboxgl.Map = new mapboxgl.Map({
            container: mapContainerRef.current,
            accessToken: process.env.REACT_APP_MAPBOX_TOKEN,
            style: 'mapbox://styles/mapbox/outdoors-v11',
            center: currentPlace.coordinates,
            zoom: 10,
            pitch: 25,
            attributionControl: false,
        })
        setMap(map)
        return () => map.remove()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div ref={mapContainerRef} className='map-container'>
            {places &&
                map &&
                places.map((place: any) => {
                    return (
                        <CustomMarker
                            map={map}
                            key={place.title}
                            place={place}
                            active={currentPlace.title === place.title}
                        />
                    )
                })}
        </div>
    )
}

export default CustomMap
