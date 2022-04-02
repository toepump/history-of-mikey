import React, { useCallback, useEffect } from 'react'
import CheckBox from '../CheckBox'
import { Place } from '../Map'
import useFilters from './useFilters'

interface FilterPlacesGroup {
    places: Place[]
    onChange: any
}

const FilterPlacesGroup = ({ places, onChange }: FilterPlacesGroup) => {
    const { filterStates, applyFilter, filteredResult } = useFilters(places)

    const onFilterChange = useCallback(
        (label: string, active: boolean) => {
            applyFilter(label, active)
        },
        [applyFilter]
    )

    useEffect(() => {
        onChange(filteredResult)
    }, [filteredResult, onChange])

    return (
        <>
            <h3>Filter</h3>
            {filterStates &&
                Object.keys(filterStates).map((label: string) => (
                    <CheckBox
                        key={label}
                        label={label}
                        onChange={onFilterChange}
                    />
                ))}
        </>
    )
}

export default FilterPlacesGroup
