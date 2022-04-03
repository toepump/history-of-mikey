import { render, screen, fireEvent } from '@testing-library/react'
import SortPlacesGroup from '../SortPlacesGroup'

// test data sorted chronologically
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

// test data sorted alphabetically
const alphabeticalFakePlaces = [
    {
        title: 'A',
        description: 'test3',
        date: new Date('2022-08-10'),
        coordinates: [136.9674, 37.0429],
        type: 'education',
    },
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
]

describe('SortPlacesGroup', () => {
    test('Should render a SortPlacesGroup component without error.', () => {
        const onChange = jest.fn()
        render(<SortPlacesGroup places={fakePlaces} onChange={onChange} />)

        // assert group title is displayed
        const sortTitle = screen.getByText(/Sort/i)
        expect(sortTitle).toBeInTheDocument()

        // assert title button is displayed
        const alphabeticalBtn = screen.getByText(/title/i)
        expect(alphabeticalBtn).toBeInTheDocument()

        // assert date button is displayed
        const chronologicalBtn = screen.getByText(/date/i)
        expect(chronologicalBtn).toBeInTheDocument()
    })
    test('Should sort input list and call onChange with correctly sorted lists.', () => {
        const onChange = jest.fn()
        render(<SortPlacesGroup places={fakePlaces} onChange={onChange} />)

        // simulate title button click
        fireEvent.click(screen.getByText(/title/i))
        expect(onChange).toHaveBeenCalledTimes(1)
        expect(screen.getByLabelText(/title/i)).toBeChecked()
        expect(screen.getByLabelText(/date/i)).not.toBeChecked()

        // simulate date button click
        fireEvent.click(screen.getByText(/date/i))
        expect(onChange).toHaveBeenCalledTimes(2)
        expect(screen.getByLabelText(/date/i)).toBeChecked()
        expect(screen.getByLabelText(/title/i)).not.toBeChecked()
    })
})
