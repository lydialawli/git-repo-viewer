import React from 'react'
import PropTypes from 'prop-types'


const Tab = ({ activeTab, label, onClick }) => {

  let className = 'tab-list-item'

  if (activeTab === label) {
    className += ' tab-list-active'
  }

  return (
    <li
      className={className}
      onClick={() => onClick(label)}
    >
      {label}
    </li>
  )
}

Tab.propTypes = {
  label: PropTypes.string.isRequired,
  activeTab: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Tab
