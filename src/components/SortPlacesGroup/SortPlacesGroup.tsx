import { useState, useCallback } from 'react'
import { SortableKeys } from '../../places'
import RadioButton from '../RadioButton'

interface SortGroupProps {
    onChange: (mode: SortableKeys) => void
}

/* 
    Component to toggle sort mode between alphabetical and chronological.
    TODO: make all this sorting stuff more generic...too many hard coded values.
*/
const SortPlacesGroup = ({ onChange }: SortGroupProps) => {
    const [checkedValue, setCheckedValue] = useState('date')

    const onChangeValue = useCallback(
        (event) => {
            setCheckedValue(event.target.value)
            onChange(event.target.value)
        },
        [onChange]
    )

    return (
        <>
            <h3>Sort</h3>
            <div className='sort-container'>
                <RadioButton
                    label='title'
                    onChange={onChangeValue}
                    checked={checkedValue === 'title'}
                />
                <RadioButton
                    label='date'
                    onChange={onChangeValue}
                    checked={checkedValue === 'date'}
                />
            </div>
        </>
    )
}

export default SortPlacesGroup
