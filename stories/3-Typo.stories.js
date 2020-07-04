import React from 'react'

import TextTitle from '../components/text-title'

export default {
  title: 'Typo'
}

export const Typography = () => (
  <div>
    <TextTitle>Title Bold</TextTitle>
    <TextTitle bold={false}>Title Regular</TextTitle>
  </div>
)
