import React from 'react'
import { PeopleInfo } from './components/PeopleInfo'
import { Layout } from './containers/Layout'
import { GlobalStyles } from './styles/GlobalStyles'

const App = () => {
  return (
    <div>
      <GlobalStyles />
      <Layout>
        <PeopleInfo />
      </Layout>
    </div>
  )
}

export default App
