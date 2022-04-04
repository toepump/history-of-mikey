import React, { useCallback, useState } from 'react'

interface CheckBoxProps {
    label: string
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

/* 
    Generic checkbox component
*/
const CheckBox = ({ label, onChange }: CheckBoxProps) => {
    const [active, setActive] = useState(true)

    const handleChange = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            setActive(event.target.checked)
            onChange(event)
        },
        [onChange]
    )

    return (
        <div>
            <label htmlFor={label}>
                <input
                    id={label}
                    type={'checkbox'}
                    value={label}
                    name={label}
                    onChange={handleChange}
                    checked={active}
                />
                {label}
            </label>
        </div>
    )
}

export default CheckBox
