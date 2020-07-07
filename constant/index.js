import * as Icon from '../components/icons'
import React from 'react'

export default {
  TABLET_SIZE: 980,
  DESKTOP_SIZE: 1270
}

export const MENU = [
  {
    key: 'twitter',
    path: '/',
    icon: <Icon.Twitter style={{ fontSize: 30, color: 'white' }} />,
    selected: <Icon.Twitter style={{ fontSize: 30, color: 'white' }} />,
    title: '',
    notify: 0
  },
  {
    key: 'home',
    path: '/',
    icon: <Icon.Home />,
    selected: <Icon.HomeFill />,
    title: 'Anasayfa',
    notify: 0
  },
  {
    key: 'explore',
    path: '/explore',
    icon: <Icon.Explore />,
    selected: <Icon.ExplorerFill />,
    title: 'Keşfet',
    notify: 0
  },
  {
    key: 'notification',
    path: '/notification',
    icon: <Icon.Notification />,
    selected: <Icon.NotificationFill />,
    title: 'Bildirimler',
    notify: 17
  },
  {
    key: 'messages',
    path: '/messages',
    icon: <Icon.Messages />,
    selected: <Icon.MessagesFill />,
    title: 'Mesajlar',
    notify: 0
  },
  {
    key: 'bookmarks',
    path: '/bookmarks',
    icon: <Icon.Bookmark />,
    selected: <Icon.BookmarkFill />,
    title: 'Yer İşaretleri',
    notify: 0
  },
  {
    key: 'List',
    path: '/list',
    icon: <Icon.Lists />,
    selected: <Icon.ListsFill />,
    title: 'Listeler',
    notify: 0
  },
  {
    key: 'profile',
    path: '/profile',
    icon: <Icon.Profile />,
    selected: <Icon.ProfileFill />,
    title: 'Profil',
    notify: 0
  },
  {
    key: 'more',
    path: '/more',
    icon: <Icon.More />,
    selected: <Icon.More />,
    title: 'Dafa Fazla',
    notify: 0
  }
]
