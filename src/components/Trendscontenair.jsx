import React from 'react'
import Button from './Button'
export default function Trends(props) {
  return (
    <div className={`widget ${props.wd} + ${props.pd}`}>
        {props.children}

        
    </div>
  )
}
