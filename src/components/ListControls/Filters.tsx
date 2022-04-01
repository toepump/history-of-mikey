import React, { useCallback } from 'react'

interface FiltersProps {
    filters?: string[]
    updateVisiblePlaces?: any
}

const Filters = ({ filters, updateVisiblePlaces }: FiltersProps) => {
    const handleFilterChange = useCallback(
        (event: any) => {
            // maybe send back both the filter name (value) and the boolean of it's checked or not (checked)
            updateVisiblePlaces(event.target.value)
        },
        [updateVisiblePlaces]
    )

    return (
        <>
            <h3>Filter</h3>
            {filters &&
                filters.map((filter) => (
                    <div key={filter}>
                        <label htmlFor={filter}>
                            <input
                                id={filter}
                                type={'checkbox'}
                                value={filter}
                                name={filter}
                                onClick={handleFilterChange}
                            />
                            {filter}
                        </label>
                    </div>
                ))}
        </>
    )
}

export default Filters
