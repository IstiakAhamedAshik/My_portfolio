import React from 'react'
import { Link } from 'react-router-dom'
const ShowProject = ({ project }) => {
  const { name, picture, link } = project
  return (
    <div>
      <div className='all-project'>
        <Link to={link} target='_blank'>
          {' '}
          <div className='picture-project'>
            <img src={picture} alt='' />
            <div className='opacity'></div>
          </div>
        </Link>
        <h1 className='text-xl font-bold name-project'>{name}</h1>
      </div>
    </div>
  )
}

export default ShowProject
