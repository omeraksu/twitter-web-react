import React from 'react'

import NavButton from './nav-button'
import TextTitle from './text-title'

import {
  Twitter,
  Home,
  Explore,
  Notification,
  Messages,
  More,
  Profile,
  Lists,
  Bookmark
} from './icons'

import styles from './navigation.module.css'

function Navigation({ selectedKey }) {
  return (
    <nav className={styles.nav}>
      <NavButton>
        <Twitter />
      </NavButton>

      <NavButton selected={selectedKey === 'home'}>
        <Home />
        <TextTitle>Home</TextTitle>
      </NavButton>

      <NavButton selected={selectedKey === 'explore'}>
        <Explore />
        <TextTitle>Explore</TextTitle>
      </NavButton>

      <NavButton notify={24} selected={selectedKey === 'notification'}>
        <Notification />
        <TextTitle>Notifications</TextTitle>
      </NavButton>

      <NavButton selected={selectedKey === 'messages'}>
        <Messages />
        <TextTitle>Messages</TextTitle>
      </NavButton>

      <NavButton selected={selectedKey === 'bookmarks'}>
        <Bookmark />
        <TextTitle>Bookmarks</TextTitle>
      </NavButton>

      <NavButton selected={selectedKey === 'list'}>
        <Lists />
        <TextTitle>List</TextTitle>
      </NavButton>

      <NavButton selected={selectedKey === 'profile'}>
        <Profile />
        <TextTitle>Profile</TextTitle>
      </NavButton>

      <NavButton selected={selectedKey === 'more'}>
        <More />
        <TextTitle>More</TextTitle>
      </NavButton>
    </nav>
  )
}

export default Navigation
