import React, { useState } from 'react'
import { useQuery } from '@apollo/client'
import { ALL_PEOPLE } from '../../graphQL/Queries'
import { ErrorRes } from '../../common/ErrorRes'
import { LoadingRes } from '../../common/LoadingRes'
import { MdNavigateNext } from 'react-icons/md'
import { SidebarContainer, ListTile, ListTileItem, ItemInfoContainer, ItemSubTitle } from './styles'
import { Title } from '../../styles/CommonStyles'
import { useAllPeopleContext } from '../../context/peopleContext'

export const Sidebar = () => {
  const [fetching, setFetching] = useState(true)
  const { handlePerson } = useAllPeopleContext()
  const { loading, error, data, fetchMore } = useQuery(ALL_PEOPLE, {
    variables: {
      allPeopleFirst: 5,
      allPeopleAfter: null
    }
  })
  const useFetchMore = () => {
    const { endCursor } = data.allPeople.pageInfo
    fetchMore({
      variables: {
        allPeopleAfter: endCursor,
        allPeopleFirst: null
      },
      updateQuery: (prevResult, { fetchMoreResult }) => {
        fetchMoreResult.allPeople.edges = [
          ...prevResult.allPeople.edges, ...fetchMoreResult.allPeople.edges
        ]
        if (!fetchMoreResult) return prevResult
        setFetching(false)
        return fetchMoreResult
      }
    })
  }

  if (data && fetching === true) {
    useFetchMore()
  }

  if (loading) return <LoadingRes />
  if (error) return <ErrorRes />

  return (
    <>
      <SidebarContainer>
        <ListTile>
          {
            data.allPeople.edges.map(({ node }) => (
              <ListTileItem onClick={() => handlePerson(node)} key={node.name}>
                <ItemInfoContainer>
                  <Title>{node.name}</Title>
                  <ItemSubTitle>
                    {node.species != null ? node.species.name : 'Human'} from {node.homeworld != null ? node.homeworld.name : 'Human'}
                  </ItemSubTitle>
                </ItemInfoContainer>
                <MdNavigateNext size={17} />
              </ListTileItem>
            ))
          }
          {
            fetching &&
              <LoadingRes />
          }
        </ListTile>
      </SidebarContainer>
    </>
  )
}
