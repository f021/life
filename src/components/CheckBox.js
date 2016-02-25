import React, { PropTypes } from 'react'

const CheckBox = ({
  name, check, onClick, children
}) => (
  <div>
    <label>
      {children}{' '}
      <input type='checkbox'
        onClick={onClick}
        {check ? 'checked' : null}
      />
    </label>
  </div>
)

CheckBox.PropTypes = {
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  check: PropTypes.bool.isRequired
}

export default CheckBox
