import React, { useCallback } from 'react'
import { CheckBox } from '../common'
import { Place } from '../../places'
import usePlaceFilters from './usePlaceFilters'

interface FilterPlacesGroup {
    places: Place[]
    onChange: (updatedList: Place[]) => void
}

/* 
    Component that renders a filter group (of checkboxes) to filter place data by type
*/
const FilterPlacesGroup = ({ places, onChange }: FilterPlacesGroup) => {
    const { filterStates, applyFilter } = usePlaceFilters(places)

    const onFilterChange = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            const newList = applyFilter(
                event.target.value,
                event.target.checked
            )
            onChange(newList)
        },
        [applyFilter, onChange]
    )

    return (
        <>
            <h3>Filter</h3>
            <div className='filters-list'>
                {filterStates &&
                    Object.keys(filterStates).map((label: string) => (
                        <CheckBox
                            key={label}
                            label={label}
                            onChange={onFilterChange}
                        />
                    ))}
            </div>
        </>
    )
}

export default FilterPlacesGroup
