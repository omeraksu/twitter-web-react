import React from 'react'

import Layout from '../components/layout'
import Sidebar from '../components/col-sidebar'
import Main from '../components/col-main'
import Extra from '../components/col-extra'

import CONST from '../constant'
import useWindowSize from '../hooks/windowSize'

function HomePage() {
  const size = useWindowSize()

  return (
    <Layout>
      <Sidebar flat={size.width < CONST.DESKTOP_SIZE}>sidebar</Sidebar>
      <Main>main</Main>
      {size.width > CONST.TABLET_SIZE && <Extra>extra</Extra>}
    </Layout>
  )
}

export default HomePage
