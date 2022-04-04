import { render, screen, fireEvent } from '@testing-library/react'
import FilterPlacesGroup from '../FilterPlacesGroup'

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

const workPlaces = [fakePlaces[1]]

const educationPlaces = [fakePlaces[2]]

describe('FilterPlacesGroup', () => {
    test('Should render a FilterPlacesGroup component without error.', () => {
        const onChange = jest.fn()
        render(<FilterPlacesGroup places={fakePlaces} onChange={onChange} />)

        // assert group title is displayed
        const filterTitle = screen.getByText('Filter')
        expect(filterTitle).toBeInTheDocument()

        // assert all check buttons were generated from the unique "types" found in the input list of places
        const lifeBtn = screen.getByText(/life/i)
        expect(lifeBtn).toBeInTheDocument()

        const workBtn = screen.getByText(/work/i)
        expect(workBtn).toBeInTheDocument()

        const educationBtn = screen.getByText(/education/i)
        expect(educationBtn).toBeInTheDocument()
    })
    test('Should sort input list and call onChange with correctly sorted lists.', () => {
        const onChange = jest.fn()
        render(<FilterPlacesGroup places={fakePlaces} onChange={onChange} />)

        const lifeBtn = screen.getByText(/life/i)
        const workBtn = screen.getByText(/work/i)
        const eduBtn = screen.getByText(/education/i)

        // simulate click to filter out life places
        fireEvent.click(lifeBtn)
        expect(onChange).toHaveBeenCalledWith([
            ...workPlaces,
            ...educationPlaces,
        ])
        expect(onChange).toHaveBeenCalledTimes(1)

        // simulate click to filter out work places
        fireEvent.click(workBtn)
        expect(onChange).toHaveBeenCalledWith([...educationPlaces])
        expect(onChange).toHaveBeenCalledTimes(2)

        // simulate click to filter out education places
        fireEvent.click(eduBtn)
        expect(onChange).toHaveBeenCalledWith([])
        expect(onChange).toHaveBeenCalledTimes(3)

        // filter back in life places
        fireEvent.click(lifeBtn)
        // filter back in work places
        fireEvent.click(workBtn)
        // filter back in education places
        fireEvent.click(eduBtn)

        // by this point, the onChange should have been called with all places filtered back in
        expect(onChange).toHaveBeenCalledWith(fakePlaces)
        expect(onChange).toHaveBeenCalledTimes(6)
    })
})
