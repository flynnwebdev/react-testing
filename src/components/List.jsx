import React from 'react'
import PropTypes from 'prop-types'
import ListItem from './ListItem'

export default function List(props) {
    if (!props.items.length) {
        return <h4>No items in list</h4>
    }

    return (
        <div>
            <ul className="list-items">
                {props.items.map(item =>
                    <ListItem key={item} item={item} />    
                )}
            </ul>            
        </div>
    )
}

List.propTypes = {
    items: PropTypes.array
}

List.defaultProps = {
    items: []
}
