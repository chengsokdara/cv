import React from 'react'
import styled from 'styled-components'
import { mdiApple, mdiGooglePlay, mdiLinkVariant } from '@mdi/js'
import Icon from '@mdi/react'

const ProjectSection = ({ data }) => {
  const render = (projects) => {
    return projects?.map((project, index) =>
      project ? (
        <Container key={`${index}`}>
          <TimeLine>
            {project.date ? <Dot /> : null}
            <Line />
          </TimeLine>
          <Content>
            {project.date ? <Date>{project.date}</Date> : null}
            <NameContainer>
              <Logo src={project.logo} />
              <Name>{`${project.name} • `}</Name>
              <Description>{project.description}</Description>
              {renderProjectLinks(project.links)}
            </NameContainer>
          </Content>
        </Container>
      ) : null
    )
  }

  const renderProjectLinks = (projectLinks) => {
    return projectLinks?.map((projectLink, index) =>
      projectLink ? (
        <Link key={`${index}`} href={projectLink.link} target="_blank">
          <LinkIcon
            path={
              projectLink.type === 'apple'
                ? mdiApple
                : projectLink.type === 'google'
                ? mdiGooglePlay
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
  align-items: center;
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

const Logo = styled.img`
  border-radius: 12px;
  height: 24px;
  padding-right: 8px;
  width: 24px;
`

export default ProjectSection
