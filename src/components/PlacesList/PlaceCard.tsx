import React, { useCallback, useRef } from 'react'
import { useEffect } from 'react'
import { Place } from '../Map'

interface PlaceCardProps {
    onClick: (place: Place) => void
    place: Place
    active: boolean
}

const PlaceCard = ({ onClick, place, active }: PlaceCardProps) => {
    const { title, description, date } = place
    const cardRef = useRef<any>(null)

    const executeScroll = useCallback(() => {
        if (cardRef.current)
            cardRef.current.scrollIntoView({ behavior: `smooth` })
    }, [])

    useEffect(() => {
        if (active) {
            executeScroll()
        }
    }, [active, executeScroll])

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
            <p>{date.toString()}</p>
        </div>
    )
}

export default PlaceCard
