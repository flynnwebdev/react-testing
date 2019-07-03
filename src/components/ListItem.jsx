import React from 'react'
import PropTypes from 'prop-types'

export default function ListItem({ item }) {
    return <li className="item">{item}</li> 
}

ListItem.propTypes = {
    item: PropTypes.string
}

ListItem.defaultProps = {
    item: ''
}
