import React from 'react'
interface ParentType{
    children:React.ReactNode
}
function Parent(props:ParentType) {
  return (
    <div>{props.children}</div>
  )
}

export default Parent