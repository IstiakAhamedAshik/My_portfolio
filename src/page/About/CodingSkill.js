import React from 'react'

const CodingSkill = ({ skill }) => {
  const { name, pic } = skill
  return (
    <div className='skill-1'>
      <img src={pic} alt='' srcset='' />
      <h1 className='font-semibold text-3xl text-white mt-2'>{name}</h1>
    </div>
  )
}

export default CodingSkill
