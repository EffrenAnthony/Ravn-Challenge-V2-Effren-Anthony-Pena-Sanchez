import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ApolloClient, InMemoryCache } from '@apollo/client'
import { ApolloProvider } from '@apollo/client/react'
import { PeopleProvider } from './context/peopleContext'

const client = new ApolloClient({
  uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
  cache: new InMemoryCache()
})

ReactDOM.render(
  <PeopleProvider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </PeopleProvider>,
  document.getElementById('app')
)
