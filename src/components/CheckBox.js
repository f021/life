import React, { PropTypes } from 'react'

const CheckBox = ({
  check, onChange, children
}) => (
  <div>
    <label>
      {children}{' '}
      <input type='checkbox'
        onChange={onChange}
        checked={check}
      />
    </label>
  </div>
)

CheckBox.PropTypes = {
  onChange: PropTypes.func.isRequired,
  check: PropTypes.bool.isRequired
}

export default CheckBox
