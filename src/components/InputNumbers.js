import React, { PropTypes } from 'react'
import InputNumber from './InputNumber'

const InputNumbers = ({
  fields,
  onChange,
  min,
  max
}) => (
  <div>
    {fields.map(field => {
      // console.log('input', fields)
      return(
      <InputNumber
        name={field.label}
        onChange={onChange}
        value={field.value}
        key={field.label}
        min={min}
        step='2'
      >
      {field.label}
      </InputNumber>
    )})}
  </div>
)

InputNumbers.PropTypes = {
  fields: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired
}

export default InputNumbers
