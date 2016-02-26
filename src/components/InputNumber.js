import React, { PropTypes } from 'react'

const InputNumber = ({
  name, value, onChange, children, min, max
}) => (
  <label>
    {children}{': '}
    <input type='number'
      onChange={({ target }) =>
        onChange(name, target.value)}
      value={value}
      min={min}
      max={max}
      step='2'
    />
  </label>
)

InputNumber.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired
}

export default InputNumber
