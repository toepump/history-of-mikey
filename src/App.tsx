import { useState, useCallback } from 'react'
import 'mapbox-gl/dist/mapbox-gl.css'
import './App.css'
import { places as data } from './places'
import Map, { Place } from './components/Map'
import PrevNextPlaceButtons from './components/PrevNextPlaceButtons'
import SortPlacesGroup from './components/SortPlacesGroup'
import FilterPlacesGroup from './components/FilterPlacesGroup/FilterPlacesGroup'
import PlacesList from './components/PlacesList'
import 'mapbox-gl/dist/mapbox-gl.css'

const allPlaces = data.entries as Place[]

function App() {
    // app state
    const [visiblePlaces, setVisiblePlaces] = useState<Place[]>(allPlaces)
    const [currentPlace, setCurrentPlace] = useState<Place>(allPlaces[0])

    // callback to update visiblePlaces and currentPlace whenever list is manipulated
    const onChange = useCallback((sortedList: Place[]) => {
        setVisiblePlaces([...sortedList])
        if (!sortedList.includes(currentPlace)) setCurrentPlace(sortedList[0])
    }, [currentPlace])

    return (
        <div className='app-container'>
            <Map visiblePlaces={visiblePlaces} currentPlace={currentPlace} />
            <div className='list-container'>
                <div className='list-controls-container'>
                    <FilterPlacesGroup places={allPlaces} onChange={onChange} />
                    <SortPlacesGroup
                        places={visiblePlaces}
                        onChange={onChange}
                    />
                    <PrevNextPlaceButtons
                        places={visiblePlaces}
                        currentPlace={currentPlace}
                        updateCurrentPlace={setCurrentPlace}
                    />
                </div>
                <PlacesList places={visiblePlaces} currentPlace={currentPlace} onPlaceClick={setCurrentPlace} />
            </div>
        </div>
    )
}

export default App
