import { useState, useCallback, useEffect } from 'react'
import RadioButton from '../RadioButton'
import { Place } from '../Map'

interface SortGroupProps {
    places: Place[]
    onChange: any
}

const SortGroup = ({ places, onChange }: SortGroupProps) => {
    const [checkedValue, setCheckedValue] = useState('chronological')

    // callback to sort the list of filtered places
    const sortVisiblePlaces = useCallback(
        (mode: string) => {
            let newList: Place[] = []
            switch (mode) {
                case 'alphabetical': {
                    newList = places.sort((a, b) =>
                        a.title > b.title ? 1 : -1
                    )
                    break
                }
                case 'chronological': {
                    newList = places.sort((a, b) => (a.date > b.date ? 1 : -1))
                    break
                }
                default: {
                    break
                }
            }
            onChange(newList)
        },
        [onChange, places]
    )

    const onChangeValue = useCallback(
        (event) => {
            setCheckedValue(event.target.value)
            sortVisiblePlaces(event.target.value)
        },
        [sortVisiblePlaces]
    )

    return (
        <>
            <h3>Sort</h3>
            <RadioButton
                label='alphabetical'
                onChange={onChangeValue}
                checked={checkedValue === 'alphabetical'}
            />
            <RadioButton
                label='chronological'
                onChange={onChangeValue}
                checked={checkedValue === 'chronological'}
            />
        </>
    )
}

export default SortGroup
