import React from "react"

interface RadioButtonProps {
    label: string
    onChange: (event: React.ChangeEvent) => void
    checked: boolean
}

const RadioButton = ({ label, onChange, checked }: RadioButtonProps) => {
    return (
        <label htmlFor={label}>
            <input
                id={label}
                type='radio'
                value={label}
                name={label}
                onChange={onChange}
                checked={checked}
            />
            {label}
        </label>
    )
}

export default RadioButton
