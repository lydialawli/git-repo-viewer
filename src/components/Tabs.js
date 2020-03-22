import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Tab from './Tab'
import { TabWrapper, TabList } from './Styles'

const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label)

  const onClickTabItem = (tab) => {
    setActiveTab(tab)
  }

  return (
    <TabWrapper>
      <TabList>
        {children.map((child) => {
          const { label } = child.props

          return (
            <Tab
              activeTab={activeTab}
              key={label}
              label={label}
              onClick={onClickTabItem}
            />
          )
        })}
      </TabList>
      <div className="tab-content">
        {children.map((child) => {
          if (child.props.label !== activeTab) return undefined
          return child.props.children
        })}
      </div>
    </TabWrapper>
  )
}


Tabs.propTypes = {
  children: PropTypes.any.isRequired,
}

export default Tabs
