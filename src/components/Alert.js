import React from 'react'

export default function Alert(props) {
  return (
    <div>
        <div className='w-full h-9 bg-blue-200'>
            <div className='setWidth font-sem text-lg text-black flex items-center'>
                {props.msg}
            </div>
        </div>
    </div>
  )
}
