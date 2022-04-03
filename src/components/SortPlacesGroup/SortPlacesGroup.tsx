import { useState, useCallback } from 'react'
import RadioButton from '../RadioButton'

interface SortGroupProps {
    onChange: (mode: string) => void
}

const SortGroup = ({ onChange }: SortGroupProps) => {
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

export default SortGroup
