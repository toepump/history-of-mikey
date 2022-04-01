import React from 'react'
import ListCard from './ListCard'

interface ListProps {
    map: any
    places: any
    currentPlace: any
    onCardClick: any
}

const List = ({ map, places, currentPlace, onCardClick}: ListProps) => {
    return (
        <>
            <div className='card-list-container'>
                {places.map((place: any) => {
                    return (
                        <ListCard
                            map={map}
                            key={place.title}
                            place={place}
                            onClick={onCardClick}
                            active={currentPlace.title === place.title}
                        />
                    )
                })}
            </div>
        </>
    )
}

export default List
