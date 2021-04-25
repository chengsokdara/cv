import React from 'react'
import styled from 'styled-components'
import { mdiGithub, mdiNpm, mdiLinkVariant } from '@mdi/js'
import Icon from '@mdi/react'

const OpenSourceSection = ({ data }) => {
  const render = (openSources) => {
    return openSources?.map((openSource, index) =>
      openSource ? (
        <Container key={`${index}`}>
          <TimeLine>
            {openSource.date ? <Dot /> : null}
            <Line />
          </TimeLine>
          <Content>
            {openSource.date ? <Date>{openSource.date}</Date> : null}
            <NameContainer>
              <Name>{`${openSource.name} • `}</Name>
              <Description>{openSource.description}</Description>
              {renderProjectLinks(openSource.links)}
            </NameContainer>
          </Content>
        </Container>
      ) : null
    )
  }

  const renderProjectLinks = (openSourceLinks) => {
    return openSourceLinks?.map((openSourceLink, index) =>
      openSourceLink ? (
        <Link key={`${index}`} href={openSourceLink.link} target="_blank">
          <LinkIcon
            path={
              openSourceLink.type === 'github'
                ? mdiGithub
                : openSourceLink.type === 'npm'
                ? mdiNpm
                : mdiLinkVariant
            }
            size="14px"
          />
        </Link>
      ) : null
    )
  }

  return render(data)
}

const Container = styled.div`
  flex-direction: row;
`

const TimeLine = styled.div`
  align-items: center;
  flex-direction: column;
  margin: 0 16px;
  position: relative;
  width: 24px;
`

const Dot = styled.div`
  background-color: black;
  border-radius: 6px;
  height: 12px;
  position: absolute;
  top: 12px;
  width: 12px;
`

const Line = styled.div`
  background-color: black;
  flex: 1;
  width: 1px;
`

const Content = styled.div`
  flex: 2;
  flex-direction: column;
  padding: 8px;
`

const Date = styled.span`
  color: ${({ theme }) => theme.colors.workDate};
  margin-bottom: 12px;
`

const NameContainer = styled.div`
  flex-direction: row;
`

const Name = styled.h5`
  color: ${({ theme }) => theme.colors.projectName};
  font-size: 16px;
  padding-right: 8px;
`

const Description = styled.span`
  color: ${({ theme }) => theme.colors.projectName};
  font-size: 16px;
  font-weight: normal;
  padding-right: 8px;
`

const Link = styled.a`
  color: ${({ theme }) => theme.colors.projectName};
  padding-right: 8px;
`

const LinkIcon = styled(Icon)`
  margin-top: 3px;
`

export default OpenSourceSection
