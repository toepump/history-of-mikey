import { useEffect, useState, useCallback } from 'react'
import { Place } from '../Map'

// TODO: make thie type more generic and update according logic
const useFilters = (list: Place[]) => {
    const [filterStates, setFilterStates] = useState<Record<string, boolean>>(
        {}
    )
    const [filteredResult, setFilteredResult] = useState(list)

    useEffect(() => {
        const filtersList = [...new Set(list.map((place) => place.type))]
        const filterObject: Record<string, boolean> = {}
        filtersList.forEach((filter) => {
            if (!filterObject[filter]) {
                filterObject[filter] = true
            }
        })
        setFilterStates(filterObject)
    }, [list])

    const applyFilter = useCallback(
        (label: string, active: boolean) => {
            // update filterStates
            const nextFilterStates = filterStates
            nextFilterStates[label] = active
            setFilterStates(nextFilterStates)

            const activeFilters: string[] = []
            Object.entries(nextFilterStates).forEach(([key, val]) => {
                if (val) activeFilters.push(key)
            })

            const nextFilteredResult = list.filter((place) =>
                activeFilters.includes(place.type)
            )
            setFilteredResult(nextFilteredResult)
        },
        [filterStates, list]
    )

    return {
        filteredResult,
        filterStates,
        applyFilter,
    }
}

export default useFilters
