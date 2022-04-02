import React from 'react'
import { Place } from '../Map'
import PlaceCard from './PlaceCard'

interface PlacesListProps {
    places: Place[]
    currentPlace: Place
    onPlaceClick: (place: Place) => void
}

const PlacesList = ({ places, currentPlace, onPlaceClick }: PlacesListProps) => {
    return (
        <>
            <h3>Places</h3>
            <div className='card-list'>
                {places.map((place: Place) => {
                    return (
                        <PlaceCard
                            key={place.title}
                            place={place}
                            onClick={onPlaceClick}
                            active={currentPlace.title === place.title}
                        />
                    )
                })}
            </div>
        </>
    )
}

export default PlacesList
