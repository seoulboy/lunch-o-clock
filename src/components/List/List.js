import React from 'react'
import PropTypes from 'prop-types'
import './List.css'
import { DeleteIcon } from '../../utils/Icons'

const List = ({ items, handleDelete }) => {
  const renderedList = items.map(item => {
    return (
      <li key={item._id}>
        <span>{item.name}</span>
        {handleDelete && (
          <DeleteIcon
            className='remove-person-button'
            handleClick={handleDelete}
            item={item}
          />
        )}
      </li>
    )
  })

  return <ul>{renderedList}</ul>
}

List.propTypes = {
  items: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired
}

export default List
