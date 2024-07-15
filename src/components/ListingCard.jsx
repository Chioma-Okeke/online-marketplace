import React from 'react'
import { Link } from 'react-router-dom'

function ListingCard({$id, title, feaaturedImage, price}) {
  return (
    <Link to={`/listing/${$id}`}>
        <div className='w-full bg-gray-100 rounded-xl p-4 '>

        </div>
    </Link>
  )
}

export default ListingCard