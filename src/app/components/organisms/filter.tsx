import React from 'react'
import Input from '../molecules/input'
import Dropdown from '../molecules/dropdown'
import Button from '../atoms/button'
import Date from '../molecules/date'

function Filter() {
  return (
    <div className='flex w-full p-4 gap-4'>
      <Input/>
      <Dropdown/>
      <Date/>
      <Button/>
    </div>
  )
}

export default Filter
