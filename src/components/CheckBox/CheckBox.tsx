import { useCallback, useState } from 'react'

interface CheckBoxProps {
    label: string
    onChange: (value: string, checked: boolean) => void
}

const CheckBox = ({ label, onChange }: CheckBoxProps) => {
    const [active, setActive] = useState(true)

    const handleChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setActive(e.target.checked)
            onChange(e.target.value, e.target.checked)
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
