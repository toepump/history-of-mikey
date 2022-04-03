import { useEffect, useState, useCallback } from 'react'
import { Place } from '../../places'
import { createFilterStates, filter, FilterState } from './utils'

const useFilterGroup = (list: Place[]) => {
    const [filterStates, setFilterStates] = useState<FilterState>(
        {}
    )

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

export default useFilterGroup
