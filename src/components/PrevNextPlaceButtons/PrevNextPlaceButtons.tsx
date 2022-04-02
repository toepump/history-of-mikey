import { useCallback } from 'react'
import { Place } from '../Map'

interface PrevNextPlaceButtonsProps {
    places: Place[]
    currentPlace: Place
    updateCurrentPlace: any
}

const PrevNextPlaceButtons = ({ places, currentPlace, updateCurrentPlace }: PrevNextPlaceButtonsProps) => {
    const goToNext = useCallback(() => {
        const currentIndex = places.findIndex(
            (place) => place.title === currentPlace.title
        )

        const nextIndex =
            currentIndex + 1 >= places.length
                ? currentIndex
                : currentIndex + 1

        updateCurrentPlace(places[nextIndex])
    }, [currentPlace, updateCurrentPlace, places])

    const goToPrev = useCallback(() => {
        const currentIndex = places.findIndex(
            (place) => place.title === currentPlace.title
        )

        const prevIndex = currentIndex - 1 < 0 ? currentIndex : currentIndex - 1

        updateCurrentPlace(places[prevIndex])
    }, [currentPlace, updateCurrentPlace, places])

    return (
        <div className='arrow-buttons'>
            <button onClick={goToPrev}>Prev</button>
            <button onClick={goToNext}>Next</button>
        </div>
    )
}

export default PrevNextPlaceButtons
