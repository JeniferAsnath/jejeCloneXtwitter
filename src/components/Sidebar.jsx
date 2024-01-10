import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import Menutweet from './Menutweet';
import Buttons from './Buttons';
import BirdHouse from '../assets/Home-Fill.svg'
import Hash from '../assets/Explore.svg'
import Cloche from '../assets/Notifications.svg'
import Courier from '../assets/Messages.svg'
import Signet from '../assets/Bookmarks.svg'
import List from '../assets/Lists.svg'
import Profile from '../assets/Profile.svg'
import More from '../assets/More.svg'

export default function Sidebar() {

  return (
    <div className={`sidebar `}>
        <TwitterIcon/>
        <Menutweet Icons={BirdHouse} text='Home'/> 
        <Menutweet Icons={Hash} text='Explore' />
        <Menutweet Icons={Cloche} text='Notifications' />
        <Menutweet Icons={Courier} text='Messages' />
        <Menutweet Icons={Signet} text='Bookmarks' />
        <Menutweet Icons={List} text='Lists' />
        <Menutweet Icons={Profile} text='Profile' />
        <Menutweet Icons={More} text='More' />
        <Buttons fff='btn-large' name={"Tweet"}></Buttons>
    </div>
  )
}
