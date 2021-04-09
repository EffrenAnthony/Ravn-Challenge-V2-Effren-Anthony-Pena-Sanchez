/* eslint-disable react/jsx-closing-tag-location */
import React from 'react'
import { InfoTitleContainer, InfoItem, PeopleInfoContainer } from './styles'
import { KeyTitle, Title } from '../../styles/CommonStyles'
import { useAllPeopleContext } from '../../context/peopleContext'

export const PeopleInfo = () => {
  const { person } = useAllPeopleContext()
  return (
    <>
      <PeopleInfoContainer>
        {
          person.id === undefined
            ? <></>
            : <>
              <InfoTitleContainer>
                <Title>General Information</Title>
              </InfoTitleContainer>
              <InfoItem>
                <KeyTitle>Eye Color</KeyTitle>
                <Title>{person.eyeColor.toString().toUpperCase()}</Title>
              </InfoItem>
              <InfoItem>
                <KeyTitle>Hair Color</KeyTitle>
                <Title>{person.hairColor.toString().toUpperCase()}</Title>
              </InfoItem>
              <InfoItem>
                <KeyTitle>Skin Color</KeyTitle>
                <Title>{person.skinColor.toString().toUpperCase()}</Title>
              </InfoItem>
              <InfoItem>
                <KeyTitle>Birth Year</KeyTitle>
                <Title>{person.birthYear.toString().toUpperCase()}</Title>
              </InfoItem>
              <InfoTitleContainer>
                <Title>Vehicles</Title>
              </InfoTitleContainer>
              {
                person.vehicleConnection.edges.map(({ node }) => (
                  <InfoItem key={node.name}>
                    <KeyTitle>{node.name}</KeyTitle>
                  </InfoItem>
                ))
              }
            </>
        }
      </PeopleInfoContainer>
    </>
  )
}
