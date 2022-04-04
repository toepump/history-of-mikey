import { render, screen, fireEvent } from '@testing-library/react'
import CheckBox from '../CheckBox'

describe('CheckBox', () => {
    test('Should renders a CheckBox component without error.', () => {
        const onChange = jest.fn()
        const label = 'test'
        render(<CheckBox label={label} onChange={onChange} />)

        // assert label was rendered
        const labelElement = screen.getByText(label)
        expect(labelElement).toBeInTheDocument()

        // assert check input checkbox was rendered
        const checkBoxElement = screen.getByLabelText(/test/i)
        expect(checkBoxElement).toBeInTheDocument()

        // assert the checkbox is checked by default
        expect(checkBoxElement).toBeChecked()
    })
    test('Should update the checked state of the checkbox and call the onChange callback when clicked.', () => {
        const onChange = jest.fn()
        const label = 'test'
        render(<CheckBox label={label} onChange={onChange} />)

        const checkBoxElement = screen.getByLabelText(/test/i)

        // assert checked by default
        expect(checkBoxElement).toBeChecked()

        // simulate click
        fireEvent.click(checkBoxElement)

        // assert not checked after click
        expect(checkBoxElement).not.toBeChecked()

        // assert onChange callback prop was called
        expect(onChange).toHaveBeenCalledTimes(1)
    })
})
