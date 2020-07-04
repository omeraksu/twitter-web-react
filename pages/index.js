import React from 'react'

import Navigation from '../components/navigation'

function HomePage() {
  return (
    <div>
      <Navigation />
      <style global jsx>
        {`
          * {
            margin: 0;
            padding: 0;
          }
        `}
      </style>
    </div>
  )
}

export default HomePage
