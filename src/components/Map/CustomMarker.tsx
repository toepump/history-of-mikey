import { useEffect, useRef } from 'react'
import mapboxgl, { MarkerOptions } from 'mapbox-gl'
import { Place } from '../../places'

interface CustomMarkerProps extends MarkerOptions {
    map: mapboxgl.Map
    place: Place
    active: boolean
}

const CustomMarker = ({ map, place, active }: CustomMarkerProps) => {
    const { title, date, description, coordinates, img } = place
    const popupRef = useRef<HTMLDivElement>(null)

    // create the marker
    useEffect(() => {
        // create instance of marker and add to map
        const marker = new mapboxgl.Marker({
            color: '#ff685d',
        })
            .setLngLat(coordinates)
            .addTo(map)

        return () => {
            marker.remove()
        }
    }, [coordinates, map])

    // add popup when active
    useEffect(() => {
        const popup = new mapboxgl.Popup({
            offset: 25,
            closeOnClick: false,
            closeButton: false,
            closeOnMove: false,
            anchor: 'bottom',
        })

        // if this is marker is active, show the popup
        if (active) {
            popup
                .setLngLat(coordinates)
                .setDOMContent(popupRef.current as HTMLDivElement)
                .addTo(map)
        } else {
            popup.remove()
        }

        return () => {
            popup.remove()
        }
    }, [active, coordinates, date, description, img, map, title])

    return (
        <div className='hidden'>
            <div className='popup' ref={popupRef}>
                <h4>{title}</h4>
                <p>{description}</p>
                <img src={img} />
                <span>{date.toDateString()}</span>
            </div>
        </div>
    )
}

export default CustomMarker
