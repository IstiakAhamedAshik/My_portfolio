import React from 'react'

const OneSkill = ({ experince }) => {
  const { pacentange, des, name } = experince
  return (
    <div>
      <p>{pacentange}</p>
      <h1 className='text-2xl font-semibold'>{name}</h1>
      <p>{des}</p>
    </div>
  )
}

export default OneSkill
