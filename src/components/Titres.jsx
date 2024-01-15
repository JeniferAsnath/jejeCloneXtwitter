import React from 'react'

export default function Titres(props) {
  const {Name, Icon} = props
  return (
    <div className={`title ${props.tips}`}>
      <span>{Name}</span>
      <img className='' src={Icon}  alt="" />
      {props.children}
      </div>
  )
}
