import { gql } from '@apollo/client'

export const ALL_PEOPLE = gql`
  
  query Root($allPeopleFirst: Int, $allPeopleAfter: String) {
  allPeople(first: $allPeopleFirst, after: $allPeopleAfter) {
    edges {
      node {
        name
        birthYear
        eyeColor
        hairColor
        skinColor
        homeworld {
          name
        }
        species {
          name
        }
        vehicleConnection {
          edges {
            node {
              name
            }
          }
        }
        id
      }
    }
    pageInfo {
      endCursor
    }
  }
}
`
