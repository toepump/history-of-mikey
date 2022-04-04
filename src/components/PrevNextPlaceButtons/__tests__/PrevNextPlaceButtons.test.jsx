import { render, screen, fireEvent } from '@testing-library/react'
import PrevNextPlaceButtons from '../PrevNextPlaceButtons'

// test data
const fakePlaces = [
    {
        title: 'B',
        description: 'test1',
        date: new Date('1994-04-17'),
        coordinates: [-121.91, 36.6177],
        type: 'life',
    },
    {
        title: 'C',
        description: 'test2',
        date: new Date('2010-08-10'),
        coordinates: [136.9674, 37.0429],
        type: 'work',
    },
    {
        title: 'A',
        description: 'test3',
        date: new Date('2022-08-10'),
        coordinates: [136.9674, 37.0429],
        type: 'education',
    },
]

describe('PrevNextPlaceButtons', () => {
    const updateCurrentPlace = jest.fn()
    test('Should render a PrevNextPlacesButtons component without error.', () => {
        render(
            <PrevNextPlaceButtons
                places={fakePlaces}
                currentPlace={fakePlaces[0]}
                updateCurrentPlace={updateCurrentPlace}
            />
        )
    })
    test('Should call onChange with next place in list', () => {
        render(
            <PrevNextPlaceButtons
                places={fakePlaces}
                currentPlace={fakePlaces[0]}
                updateCurrentPlace={updateCurrentPlace}
            />
        )

        fireEvent.click(screen.getByText(/next/i))
        expect(updateCurrentPlace).toHaveBeenCalledWith(fakePlaces[1])
        expect(updateCurrentPlace).toHaveBeenCalledTimes(1)
    })
    test('Should call onChange with prev place in list', () => {
        render(
            <PrevNextPlaceButtons
                places={fakePlaces}
                currentPlace={fakePlaces[2]}
                updateCurrentPlace={updateCurrentPlace}
            />
        )

        fireEvent.click(screen.getByText(/prev/i))
        expect(updateCurrentPlace).toHaveBeenCalledWith(fakePlaces[1])
        expect(updateCurrentPlace).toHaveBeenCalledTimes(1)
    })
})
