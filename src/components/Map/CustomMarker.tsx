import { useEffect } from 'react'
import mapboxgl, { MarkerOptions } from 'mapbox-gl'

interface CustomMarkerProps extends MarkerOptions {
    map: any
    place: any
    active: boolean
}

const CustomMarker = ({ map, place, active }: CustomMarkerProps) => {
    const { title, description, coordinates } = place

    // initial render always create the marker
    useEffect(() => {
        // create isntance of mapbox marker and add to map
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
                .setHTML(
                    `
                        <div>
                            <h4>${title}</h4>
                            <p>${description}</p>
                        </div>
                    `
                )
                .addTo(map)
        } else {
            popup.remove()
        }

        return () => {
            popup.remove()
        }
    }, [active, coordinates, description, map, title])

    return <></>
}

export default CustomMarker
