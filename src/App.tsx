import React, { useState, useMemo, useEffect, useRef, useCallback } from 'react'
import mapboxgl from 'mapbox-gl'
import './App.css'
import { List } from './components/List'
import { places as data } from './places'
import { ListControls } from './components/ListControls'
import CustomMarker from './components/Map/CustomMarker'

const places = data.entries

function App() {
    const mapContainerRef = useRef<any>(null)
    const [map, setMap] = useState<any>(null)
    const [visiblePlaces, setVisiblePlaces] = useState(places)
    const [currentPlace, setCurrentPlace] = useState(places[0] as any)

    // create the map and mount to mapContainerRef
    useEffect(() => {
        const map: mapboxgl.Map = new mapboxgl.Map({
            container: mapContainerRef.current,
            accessToken: process.env.REACT_APP_MAPBOX_TOKEN,
            style: 'mapbox://styles/mapbox/outdoors-v11',
            center: currentPlace.coordinates,
            zoom: 10,
            pitch: 35,
            attributionControl: false,
        })
        setMap(map)

        // clean up map on unmount
        return () => map.remove()
    }, [])

    useEffect(() => {
        if (map && currentPlace)
            map.flyTo({ center: currentPlace.coordinates, zoom: 10 })
    }, [map, currentPlace])

    // for filters: store the unique "types" from all of the entries
    const filters = useMemo(
        () => [...new Set(places.map((place) => place.type))],
        []
    )

    // callback to update filtered list of places
    const filter = useCallback((filterString: string) => {
        const filteredVisiblePlaces = places.filter((place) => place.type === filterString)
        setVisiblePlaces(filteredVisiblePlaces)
    }, [])

    // callback to sort the list of filtered places
    const sortVisiblePlacesList = useCallback(
        (mode: string) => {
            let newList = visiblePlaces
            switch (mode) {
                case 'alphabetical': {
                    newList = visiblePlaces.sort((a, b) =>
                        a.title > b.title ? 1 : -1
                    )
                    break
                }
                case 'time': {
                    newList = visiblePlaces.sort((a, b) =>
                        a.date > b.date ? 1 : -1
                    )
                    break
                }
                default: {
                    break
                }
            }
            setVisiblePlaces(newList)
            setCurrentPlace(newList[0])
        },
        [visiblePlaces]
    )

    const goToNext = useCallback(() => {
        const currentIndex = visiblePlaces.findIndex(
            (place) => place.title === currentPlace.title
        )
        const nextIndex =
            currentIndex + 1 >= visiblePlaces.length ? currentIndex : currentIndex + 1
        setCurrentPlace(visiblePlaces[nextIndex])
    }, [currentPlace, visiblePlaces])

    const goToPrev = useCallback(() => {
        const currentIndex = visiblePlaces.findIndex(
            (place) => place.title === currentPlace.title
        )
        const prevIndex =
            currentIndex - 1 < 0 ? currentIndex : currentIndex - 1
        setCurrentPlace(visiblePlaces[prevIndex])
    }, [currentPlace, visiblePlaces])

    return (
        <div className='app-container'>
            <div ref={mapContainerRef} className='map-container'>
                {visiblePlaces &&
                    map &&
                    visiblePlaces.map((place: any) => {
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
            <div className='list-container'>
                <ListControls
                    filters={filters}
                    updateVisiblePlaces={filter}
                    sort={sortVisiblePlacesList}
                    onNext={goToNext}
                    onPrev={goToPrev}
                />
                <List
                    map={map}
                    places={visiblePlaces}
                    currentPlace={currentPlace}
                    onCardClick={setCurrentPlace}
                />
            </div>
        </div>
    )
}

export default App
