import styled from '@emotion/styled'
import React from 'react'
import { BeatLoader } from 'react-spinners'

const Loader = styled(BeatLoader)`
    margin: auto 0;
`

function Loading() {
  return (
    <Loader color='#FC8CAE'/>
  )
}

export default Loading