import React from 'react'

export default function Titres(props) {
  const {Name, Icon} = props
  return (
    <div className={` ${props.tips}  ${props.title} + ${props.sb}`}>
      <span>{Name}</span>
      <img className='' src={Icon}  alt="" />
      {props.children}
      </div>
  )
}
