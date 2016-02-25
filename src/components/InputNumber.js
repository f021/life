import React, { PropTypes } from 'react'

const InputNumber = ({
  name, value, onChange, children
}) => (
  <label>
    {children}{': '}
    <input type='number'
      onChange={({ target }) =>
        onChange(name, target.value)}
      value={value}
      min='0'
    />
  </label>
)

InputNumber.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired
}

export default InputNumber
