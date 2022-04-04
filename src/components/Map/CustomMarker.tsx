import { useEffect, useRef } from 'react'
import mapboxgl, { MarkerOptions } from 'mapbox-gl'
import { Place } from '../../places'

interface CustomMarkerProps extends MarkerOptions {
    map: mapboxgl.Map
    place: Place
    active: boolean
}

/* 
    Component that renders a marker on a provided mapbox Map instance.
    Will also render a popup if the marker is "active".
*/
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
        <>
            {active && (
                <div className='hidden'>
                    <div className='popup' ref={popupRef}>
                        <h4 className='popup-title'>{title}</h4>
                        <p className='popup-description'>{description}</p>
                        <img className='popup-img' src={img} />
                        <span className='popup-date'>
                            {date.toDateString()}
                        </span>
                    </div>
                </div>
            )}
        </>
    )
}

export default CustomMarker
