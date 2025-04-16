import React from 'react'

function TextField({type ,error, ...props}) {
  return (
    <div className='text_field_quote'>
        <input type={type} {...props} className={`${error && "error_border"}`} />
    </div>
  )
}

export default TextField