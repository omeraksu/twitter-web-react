import React from 'react'

import TextTitle from '../components/text-title'
import TextBody from '../components/text-body'
import Stack from '../components/stack'

export default {
  title: 'Typo'
}

export const Typography = () => (
  <Stack column={20} gap={20}>
    <TextTitle>Title Bold</TextTitle>
    <TextTitle normal={true}>Title Regular</TextTitle>

    <TextBody bold>Text Body Bold</TextBody>
    <TextBody>Text Body Regular</TextBody>
  </Stack>
)
