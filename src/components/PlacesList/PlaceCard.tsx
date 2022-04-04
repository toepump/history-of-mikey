import { useCallback, useRef } from 'react'
import { useEffect } from 'react'
import { Place } from '../../places'

interface PlaceCardProps {
    onClick: (place: Place) => void
    place: Place
    active: boolean
}

/* 
    Component to render display details for a Place on a card.
    When card is active, scrolls card into view (sometimes awkward...)
    When card is clicked, sends place data to callback.
*/
const PlaceCard = ({ onClick, place, active }: PlaceCardProps) => {
    const { title, description, date } = place
    const cardRef = useRef<HTMLDivElement>(null)

    // not needed but nice to make sure card is in view if active
    useEffect(() => {
        if (active) {
            if (cardRef.current)
                cardRef.current.scrollIntoView({ behavior: `smooth` })
        }
    }, [active])

    const handleClick = useCallback(() => {
        onClick(place)
    }, [onClick, place])

    return (
        <div
            ref={cardRef}
            className={`card ${active ? 'active-card' : ''}`}
            onClick={handleClick}
        >
            <h3>{title}</h3>
            <p>{description}</p>
            <p>{date.toDateString()}</p>
        </div>
    )
}

export default PlaceCard
