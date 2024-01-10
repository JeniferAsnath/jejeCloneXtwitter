import React from 'react'
import Buttons from './Buttons'

export default function TweetEditor(props) {
  return (
    <div >
        <img className='profil' src="src/image/book.png" alt="" />
        <textarea className='editor' name="" id="" cols="30" rows="3" placeholder=" What's happening?" ></textarea>
        <div>
            <span></span>
            <Buttons name={"Tweet"} ></Buttons>
        </div>
    </div>
  )
}
