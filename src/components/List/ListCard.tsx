import React, { useCallback, useRef } from 'react'
import { useEffect } from 'react'

interface ListCardProps {
    map: any
    onClick: any
    place: any
    active: boolean
}

const ListCard = ({ map, onClick, place, active }: ListCardProps) => {
    const { title, description, date, coordinates } = place
    const cardRef = useRef<any>(null)

    const executeScroll = () => {
        if (cardRef.current)
            cardRef.current.scrollIntoView({ behavior: `smooth` })
    }

    useEffect(() => {
        executeScroll()
    }, [active])

    const handleClick = useCallback(() => {
        if (map) {
            onClick(place)
        }
    }, [map, onClick, place])

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

export default ListCard
