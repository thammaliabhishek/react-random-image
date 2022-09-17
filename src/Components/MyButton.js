import React from 'react'

export const MyButton = ({title,color}) => {//props
  return (
    <button style={{backgroundColor:color,margin:'10px',border:'3px dotted white'}}>{title}</button>
  )
}


//prop.color
//props.title