import { render, screen } from '@testing-library/react'
import PlacesList from '../PlacesList'

// NOTE: cannot test scrollIntoView as it is not implemented in js-dom
// eslint-disable-next-line no-undef
window.HTMLElement.prototype.scrollIntoView = jest.fn()

// test data sorted chronologically
const fakePlaces = [
    {
        title: 'Place B',
        description: 'test1',
        date: new Date('1994-04-17'),
        coordinates: [-121.91, 36.6177],
        type: 'life',
    },
    {
        title: 'Place C',
        description: 'test2',
        date: new Date('2010-08-10'),
        coordinates: [136.9674, 37.0429],
        type: 'work',
    },
    {
        title: 'Place A',
        description: 'test3',
        date: new Date('2022-08-10'),
        coordinates: [136.9674, 37.0429],
        type: 'education',
    },
]

const checkPlaceCardRendered = (place) => {
    const placeTitle = screen.getByText(place.title)
    const placeDescription = screen.getByText(place.description)
    const placeDate = screen.getByText(place.date.toDateString())
    expect(placeTitle).toBeInTheDocument()
    expect(placeDescription).toBeInTheDocument()
    expect(placeDate).toBeInTheDocument()
}

describe('PlacesList', () => {
    test('Should render a PlacesList component without error.', () => {
        const onChange = jest.fn()
        render(
            <PlacesList
                places={fakePlaces}
                currentPlace={fakePlaces[0]}
                onPlaceClick={onChange}
            />
        )

        // assert that each place was properly rendered into the list
        checkPlaceCardRendered(fakePlaces[0])
        checkPlaceCardRendered(fakePlaces[1])
        checkPlaceCardRendered(fakePlaces[2])
    })
})
