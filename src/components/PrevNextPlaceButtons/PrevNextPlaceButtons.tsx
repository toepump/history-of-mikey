import { useCallback } from 'react'
import { Place } from '../../places'

interface PrevNextPlaceButtonsProps {
    places: Place[]
    currentPlace: Place
    onChange: React.Dispatch<React.SetStateAction<Place>>
}

/* 
    Component that renders prev and next buttons to iterate through a provided
    list of places. 
*/
const PrevNextPlaceButtons = ({
    places,
    currentPlace,
    onChange,
}: PrevNextPlaceButtonsProps) => {
    // figure out which card is next relative to current
    const goToNext = useCallback(() => {
        const currentIndex = places.findIndex(
            (place) => place.title === currentPlace.title
        )

        const nextIndex =
            currentIndex + 1 >= places.length ? currentIndex : currentIndex + 1

        onChange(places[nextIndex])
    }, [places, onChange, currentPlace.title])

    // figure out which card is previous relative to current
    const goToPrev = useCallback(() => {
        const currentIndex = places.findIndex(
            (place) => place.title === currentPlace.title
        )

        const prevIndex = currentIndex - 1 < 0 ? currentIndex : currentIndex - 1

        onChange(places[prevIndex])
    }, [places, onChange, currentPlace.title])

    return (
        <div className='arrow-buttons'>
            <button className='prev-button' onClick={goToPrev}>
                Prev
            </button>
            <button className='next-button' onClick={goToNext}>
                Next
            </button>
        </div>
    )
}

export default PrevNextPlaceButtons
