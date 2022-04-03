import { useState, useCallback, useMemo } from 'react'
import {
    FilterPlacesGroup,
    Map,
    PlacesList,
    PrevNextPlaceButtons,
    sort,
    SortPlacesGroup,
} from './components'
import { default as data, Place } from './places'
import 'mapbox-gl/dist/mapbox-gl.css'
import './App.css'

const allPlaces = data.entries as Place[]

function App() {
    // app state
    const [visiblePlaces, setVisiblePlaces] = useState<Place[]>(allPlaces)
    const [currentPlace, setCurrentPlace] = useState<Place>(allPlaces[0])
    const [activeSortKey, setActiveSortKey] = useState<string>('date')

    // callback to update visiblePlaces and currentPlace when an updated list is provided
    const updateVisiblePlaces = useCallback(
        (updatedList: Place[]) => {
            setVisiblePlaces([...updatedList])
            if (!updatedList.includes(currentPlace))
                setCurrentPlace(updatedList[0])
        },
        [currentPlace]
    )

    // filtered and sorted list can always be derived from filters and sort mode
    const sortedAndFilteredPlaces = useMemo(() => {
        return sort(visiblePlaces, activeSortKey)
    }, [visiblePlaces, activeSortKey])

    return (
        <div className='app-container'>
            <Map visiblePlaces={visiblePlaces} currentPlace={currentPlace} />
            <div className='list-area-container'>
                <div className='list-controls-container'>
                    <FilterPlacesGroup
                        places={allPlaces}
                        onChange={updateVisiblePlaces}
                    />
                    <SortPlacesGroup onChange={setActiveSortKey} />
                </div>
                <div className='prev-next-cards-container'>
                    <h3>Places</h3>
                    <PrevNextPlaceButtons
                        places={sortedAndFilteredPlaces}
                        currentPlace={currentPlace}
                        updateCurrentPlace={setCurrentPlace}
                    />
                    <PlacesList
                        places={sortedAndFilteredPlaces}
                        currentPlace={currentPlace}
                        onPlaceClick={setCurrentPlace}
                    />
                </div>
            </div>
        </div>
    )
}

export default App
