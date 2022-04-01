import React, { useState, useCallback } from 'react'

interface SortersProps {
    sort: any
}

const Sorters = ({ sort }: SortersProps) => {
    const [checkedValue, setCheckedValue] = useState('time')

    const onChangeValue = useCallback((event) => {
        setCheckedValue(event.target.value)
        sort(event.target.value)
    }, [])

    // TODO: try implementing a sort by distance feature
    // use simple distance formula for latlng in compare function
    return (
        <>
            <h3>Sort</h3>
            <label htmlFor='alphabetical'>
                <input
                    id='alphabetical'
                    type='radio'
                    value='alphabetical'
                    name='alphabetical'
                    onChange={onChangeValue}
                    checked={checkedValue === 'alphabetical'}
                />
                Alphabetical
            </label>
            <label htmlFor='time'>
                <input
                    id='time'
                    type='radio'
                    value='time'
                    name='time'
                    onChange={onChangeValue}
                    checked={checkedValue === 'time'}
                />
                Time
            </label>
        </>
    )
}

export default Sorters
