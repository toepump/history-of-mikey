import { useState, useCallback, useMemo } from 'react'
import {
    FilterPlacesGroup,
    Map,
    PlacesList,
    PrevNextPlaceButtons,
    SortPlacesGroup,
} from './components'
import { sortPlaces } from './components/SortPlacesGroup/utils'
import { default as data, Place, SortableKeys } from './places'
import 'mapbox-gl/dist/mapbox-gl.css'
import './App.css'

const allPlaces = data.entries

function App() {
    // app state
    const [visiblePlaces, setVisiblePlaces] = useState<Place[]>(allPlaces)
    const [currentPlace, setCurrentPlace] = useState<Place>(allPlaces[0])
    const [activeSortMode, setActiveSortMode] = useState<SortableKeys>('date')

    const sortedAndFilteredPlaces = useMemo(() => {
        return sortPlaces(visiblePlaces, activeSortMode)
    }, [visiblePlaces, activeSortMode])

    const updateVisiblePlaces = useCallback(
        (updatedList: Place[]) => {
            setVisiblePlaces(updatedList)
            if (updatedList.length && !updatedList.includes(currentPlace))
                setCurrentPlace(updatedList[0])
        },
        [currentPlace]
    )

    return (
        <div className='app-container'>
            <Map visiblePlaces={visiblePlaces} currentPlace={currentPlace} />
            <div className='list-area-container'>
                <div className='list-controls-container'>
                    <FilterPlacesGroup
                        places={allPlaces}
                        onChange={updateVisiblePlaces}
                    />
                    <SortPlacesGroup onChange={setActiveSortMode} />
                </div>
                <div className='prev-next-cards-container'>
                    <h3>Places</h3>
                    <PrevNextPlaceButtons
                        places={sortedAndFilteredPlaces}
                        currentPlace={currentPlace}
                        onChange={setCurrentPlace}
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
