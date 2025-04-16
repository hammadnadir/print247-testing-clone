import React from 'react'

function TextFieldIcon({type ,error, ...props}) {
  return (
    <div className='text_field_icon'>
        <input type={type} {...props} className={`${error && "error_border"}`} />
    </div>
  )
}

export default TextFieldIcon