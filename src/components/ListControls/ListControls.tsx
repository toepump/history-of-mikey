import React, { useCallback } from 'react'
import Filters from './Filters'
import Sorters from './Sorters'

interface ListControlsProps {
    filters?: string[]
    updateVisiblePlaces?: any
    sort?: any
    onNext: any
    onPrev: any
}

const ListControls = ({
    filters,
    updateVisiblePlaces,
    sort,
    onNext,
    onPrev,
}: ListControlsProps) => {
    const handleNextClick = () => {
        onNext()
    }

    const handlePrevClick = () => {
        onPrev()
    }

    return (
        <div className='list-controls-container'>
            <Filters
                filters={filters}
                updateVisiblePlaces={updateVisiblePlaces}
            />
            <Sorters sort={sort} />
            <div className='arrow-buttons'>
                <button onClick={handlePrevClick}>Prev</button>
                <button onClick={handleNextClick}>Next</button>
            </div>
        </div>
    )
}

export default ListControls
