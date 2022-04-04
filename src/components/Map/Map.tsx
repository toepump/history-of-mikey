import { useRef, useEffect, useState } from 'react'
import mapboxgl from 'mapbox-gl'
import CustomMarker from './CustomMarker'
import { Place } from '../../places'

// NOTE: Don't normally commit keys like this.
// Doing it for convenience now, will cancel/refresh token in the near future.
const mapboxApiToken = 'pk.eyJ1IjoidG9lcHVtcCIsImEiOiJjbDFiZjg1cnowNGMxM2NucWFneXdmYjcxIn0.y44OMV1bLgl8pQgeLvYvmQ'

interface CustomMapProps {
    currentPlace: Place
    visiblePlaces: Place[]
}

/* 
    Component to wrap mapboxgl Map.
    Given a list of places, shows custom markers for each.
    Given a currentPlace, flies map to the current place.
*/
const CustomMap = ({ currentPlace, visiblePlaces }: CustomMapProps) => {
    const mapContainerRef = useRef<HTMLDivElement>(null)
    const [map, setMap] = useState<mapboxgl.Map | null>(null)

    // initialize mapbox map
    useEffect(() => {
        if (!map) {
            const map: mapboxgl.Map = new mapboxgl.Map({
                container: mapContainerRef.current as HTMLDivElement,
                accessToken: mapboxApiToken,
                style: 'mapbox://styles/mapbox/outdoors-v11',
                center: [-121.91, 36.6177] as mapboxgl.LngLatLike,
                zoom: 5,
                pitch: 30,
                attributionControl: false,
            })
            setMap(map)
        }
        return () => map?.remove()
    }, [map])

    // fly to currentPlace whenever it changes
    useEffect(() => {
        if (map && currentPlace)
            map.flyTo({ center: currentPlace.coordinates, zoom: 10, offset: [0, 150] })
    }, [map, currentPlace])

    // render markers for all visible places
    return (
        <div ref={mapContainerRef} className='map-container'>
            {map &&
                visiblePlaces.map((place: Place) => {
                    const active = currentPlace.title === place.title
                    return (
                        <CustomMarker
                            map={map}
                            key={place.title}
                            place={place}
                            active={active}
                        />
                    )
                })}
        </div>
    )
}

export default CustomMap
