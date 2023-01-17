const Select = ({ options = [], onSelect, defaultOption }) => {
    return (
        <select onChange={(e) => onSelect(e.target.value)}>
            {options.map(i => <option key={i.value} value={i.value}>{i.text}</option>)}
        </select>
    )
}

export default Select;