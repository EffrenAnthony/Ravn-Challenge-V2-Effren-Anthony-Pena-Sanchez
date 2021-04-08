import React from 'react'
import { LoadingLine, LoadingContainer } from './styles'

export const LoadingRes = () => {
  return (
    <>
      <LoadingContainer>
        <img src='http://www.gifde.com/gif/otros/decoracion/cargando-loading/cargando-loading-026.gif' alt='loadingGif' width='24' height='24' />
        <LoadingLine>Loading</LoadingLine>
      </LoadingContainer>
    </>
  )
}
