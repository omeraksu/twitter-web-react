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
  Bookmark,
  HomeFill,
  ExplorerFill,
  NotificationFill,
  MessagesFill,
  BookmarkFill,
  ListsFill,
  ProfileFill
} from './icons'

import styles from './navigation.module.css'

const MENU = [
  {
    key: 'twitter',
    icon: <Twitter />,
    selected: <Twitter />,
    title: '',
    notify: 0
  },
  {
    key: 'home',
    icon: <Home />,
    selected: <HomeFill />,
    title: 'Home',
    notify: 0
  },
  {
    key: 'explore',
    icon: <Explore />,
    selected: <ExplorerFill />,
    title: 'Explore',
    notify: 0
  },
  {
    key: 'notification',
    icon: <Notification />,
    selected: <NotificationFill />,
    title: 'Notification',
    notify: 17
  },
  {
    key: 'messages',
    icon: <Messages />,
    selected: <MessagesFill />,
    title: 'Messages',
    notify: 0
  },
  {
    key: 'bookmarks',
    icon: <Bookmark />,
    selected: <BookmarkFill />,
    title: 'Bookmarks',
    notify: 0
  },
  {
    key: 'List',
    icon: <Lists />,
    selected: <ListsFill />,
    title: 'List',
    notify: 0
  },
  {
    key: 'profile',
    icon: <Profile />,
    selected: <ProfileFill />,
    title: 'Profile',
    notify: 0
  },
  {
    key: 'more',
    icon: <More />,
    selected: <More />,
    title: 'More',
    notify: 0
  }
]

function Navigation({ flat = false, selectedKey = 'home' }) {
  return (
    <nav className={styles.nav}>
      {MENU.map((menu) => {
        const showTitle = !flat && menu.title.length > 0
        const selected = selectedKey === menu.key
        return (
          <NavButton key={menu.key} notify={menu.notify} selected={selected}>
            {selected ? menu.selected : menu.icon}
            {showTitle && <TextTitle>{menu.title}</TextTitle>}
          </NavButton>
        )
      })}
    </nav>
  )
}

export default Navigation
