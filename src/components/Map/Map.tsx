import { useRef, useEffect, useState } from 'react'
import mapboxgl from 'mapbox-gl'
import CustomMarker from './CustomMarker'
import { Place } from '../Map'

interface CustomMapProps {
    currentPlace: Place
    visiblePlaces: Place[]
}

const CustomMap = ({ currentPlace, visiblePlaces }: CustomMapProps) => {
    const mapContainerRef = useRef<any>(null)
    const [map, setMap] = useState<mapboxgl.Map | null>(null)

    // initialize mapbox map
    useEffect(() => {
        if (!map) {
            const map: mapboxgl.Map = new mapboxgl.Map({
                container: mapContainerRef.current,
                accessToken: process.env.REACT_APP_MAPBOX_TOKEN,
                style: 'mapbox://styles/mapbox/outdoors-v11',
                center: currentPlace.coordinates as mapboxgl.LngLatLike,
                zoom: 10,
                // pitch: 25,
                attributionControl: false,
            })
            setMap(map)
        }
        return () => map?.remove()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // fly to currentPlace whenever it changes
    useEffect(() => {
        if (map && currentPlace)
            map.flyTo({ center: currentPlace.coordinates, zoom: 10 })
    }, [map, currentPlace])

    // render markers for all visible places
    return (
        <div ref={mapContainerRef} className='map-container'>
            {map &&
                visiblePlaces.map((place: Place) => {
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
