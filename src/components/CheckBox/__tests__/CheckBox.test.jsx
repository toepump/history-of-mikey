import { render, screen, fireEvent } from '@testing-library/react'
import CheckBox from '../CheckBox'

describe('CheckBox', () => {
    test('Should renders a CheckBox component without error.', () => {
        const onChange = jest.fn()
        const label = 'test'
        render(<CheckBox label={label} onChange={onChange} />)
        const labelElement = screen.getByText(label)
        expect(labelElement).toBeInTheDocument()
    })
    test('Should update the checked state of the checkbox and call the onChange callback when clicked.', () => {
        const onChange = jest.fn()
        const label = 'test'
        render(<CheckBox label={label} onChange={onChange} />)

        // assert checked by default
        expect(screen.getByLabelText(/test/i)).toBeChecked()

        // simulate click
        fireEvent.click(screen.getByText(label))

        // assert not after click
        expect(screen.getByLabelText(/test/i)).not.toBeChecked()

        // assert onChange callback prop was called
        expect(onChange).toHaveBeenCalledTimes(1)
    })
})
