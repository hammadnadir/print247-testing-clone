import React from 'react'

function TextField({type ,error, ...props}) {
  return (
    <div className='text_field'>
        <input type={type} {...props} className={`${error && "error_border"}`} />
    </div>
  )
}

export default TextField