import React from 'react'
import * as Icon from '../components/icons'

export default {
  TABLET_SIZE: 980,
  DESKTOP_SIZE: 1270
}

export const MENU = [
  {
    key: 'twitter',
    path: '/',
    icon: <Icon.Twitter style={{ fontSize: 30 }} />,
    selected: <Icon.Twitter style={{ fontSize: 30 }} />,
    title: '',
    notify: 0
  },
  {
    key: 'home',
    path: '/',
    icon: <Icon.Home />,
    selected: <Icon.HomeFill />,
    title: 'Home',
    notify: 0
  },
  {
    key: 'explore',
    path: '/explore',
    icon: <Icon.Explore />,
    selected: <Icon.ExplorerFill />,
    title: 'Explore',
    notify: 0
  },
  {
    key: 'notification',
    path: '/notification',
    icon: <Icon.Notification />,
    selected: <Icon.NotificationFill />,
    title: 'Notifications',
    notify: 17
  },
  {
    key: 'messages',
    path: '/messages',
    icon: <Icon.Messages />,
    selected: <Icon.MessagesFill />,
    title: 'Messages',
    notify: 0
  },
  {
    key: 'bookmarks',
    path: '/bookmarks',
    icon: <Icon.Bookmark />,
    selected: <Icon.BookmarkFill />,
    title: 'Bookmarks',
    notify: 0
  },
  {
    key: 'List',
    path: '/list',
    icon: <Icon.Lists />,
    selected: <Icon.ListsFill />,
    title: 'List',
    notify: 0
  },
  {
    key: 'profile',
    path: '/profile',
    icon: <Icon.Profile />,
    selected: <Icon.ProfileFill />,
    title: 'Profile',
    notify: 0
  },
  {
    key: 'more',
    path: '/more',
    icon: <Icon.More />,
    selected: <Icon.More />,
    title: 'More',
    notify: 0
  }
]
