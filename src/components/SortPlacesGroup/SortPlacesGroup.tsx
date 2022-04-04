import { useState, useCallback } from 'react'
import { SortableKeys } from '../../places'
import { RadioButton } from '../common'

interface SortGroupProps {
    onChange: (mode: SortableKeys) => void
}

/* 
    Component to toggle sort mode between alphabetical and chronological.
    NOTE: functionally this would be a generic RadioButtonsGroup, but since the modes are hardcoded
    I'm calling it SortPlacesGroup.
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
