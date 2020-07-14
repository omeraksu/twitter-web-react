import React from 'react'

import Stack from '../components/stack'
import TextBody from '../components/text-body'
import TextTitle from '../components/text-title'

export default {
  title: 'Typo'
}

export const Typography = () => (
  <Stack column={20} gap={20} flex={true}>
    <TextTitle>Title Bold</TextTitle>
    <TextTitle normal={true}>Title Regular</TextTitle>

    <TextBody bold>Text Body Bold</TextBody>
    <TextBody>Text Body Regular</TextBody>
  </Stack>
)
