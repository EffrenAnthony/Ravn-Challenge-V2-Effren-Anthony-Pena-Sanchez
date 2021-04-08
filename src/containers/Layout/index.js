import React from 'react'
import { Header } from '../../components/Header'
import { Sidebar } from '../../components/Sidebar'
import { GridContainer } from './styles'

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <GridContainer>
        <div>
          <Sidebar />
        </div>
        <div>
          {children}
        </div>
      </GridContainer>
    </>
  )
}
