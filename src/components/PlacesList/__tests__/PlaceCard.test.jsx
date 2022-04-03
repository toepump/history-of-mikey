import { render, screen, fireEvent } from '@testing-library/react'
import PlaceCard from '../PlaceCard'

const fakePlace = {
    title: 'Monterey, California, USA',
    description: 'I was born in California in 1994!',
    date: new Date('1994-04-17'),
    coordinates: [-121.91, 36.6177],
    type: 'life',
}

// NOTE: cannot test scrollIntoView as it is not implemented in js-dom
// eslint-disable-next-line no-undef
window.HTMLElement.prototype.scrollIntoView = jest.fn()

describe('PlaceCard', () => {
    test('Should render a PlaceCard component without error.', () => {
        const onChange = jest.fn()
        render(
            <PlaceCard
                data-test-id='test'
                onClick={onChange}
                place={fakePlace}
                active={true}
            />
        )

        // assert title is displayed
        const cardTitle = screen.getByText(/Monterey, California, USA/i)
        expect(cardTitle).toBeInTheDocument()

        // assert description is displayed
        const cardDescription = screen.getByText(
            /I was born in California in 1994!/i
        )
        expect(cardDescription).toBeInTheDocument()
    })
    test('Should update the checked state of the checkbox and call the onChange callback when clicked.', () => {
        const onChange = jest.fn()
        render(
            <PlaceCard
                data-test-id='test'
                onClick={onChange}
                place={fakePlace}
                active={true}
            />
        )

        // simulate click
        fireEvent.click(screen.getByText(/Monterey, California, USA/i))

        // assert onChange called once with correct args
        expect(onChange).toHaveBeenCalledWith(fakePlace)
        expect(onChange).toHaveBeenCalledTimes(1)
    })
})
