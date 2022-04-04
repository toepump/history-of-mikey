import { useEffect, useState, useCallback } from 'react'
import { Place } from '../../places'
import { createFilterStates, filter, FilterState } from './utils'

/* 
    Hook that manages states for a group of Place filters.
    Given a list of Places, extracts the unique values from the 'type' property
    and provides a function to let you filter the input list by those types.
*/
const usePlaceFilters = (list: Place[]) => {
    const [filterStates, setFilterStates] = useState<FilterState>({})

    // on initial render, create filter states to track
    useEffect(() => {
        const filtersList = [...new Set(list.map((place) => place.type))]
        const filtersState: FilterState = createFilterStates(filtersList)
        setFilterStates(filtersState)
    }, [list])

    // callback to apply filters and update state
    const applyFilter = useCallback(
        (label: string, active: boolean) => {
            // update filterStates
            const nextFilterStates = filterStates
            nextFilterStates[label] = active
            setFilterStates(nextFilterStates)

            return filter(list, nextFilterStates)
        },
        [filterStates, list]
    )

    return {
        filterStates,
        applyFilter,
    }
}

export default usePlaceFilters
