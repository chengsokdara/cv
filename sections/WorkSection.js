import React from 'react'
import styled from 'styled-components'
import { mdiApple, mdiGooglePlay, mdiLinkVariant } from '@mdi/js'
import Icon from '@mdi/react'

const WorkSection = ({ data }) => {
  const render = (works) => {
    return works?.map((work, index) =>
      work ? (
        <Container key={`${index}`}>
          <TimeLine>
            <Dot />
            <Line />
          </TimeLine>
          <Content>
            <Header>
              <Position>
                {work.position}
                {' @ '}
                <CompanyName href={work.company?.link} target="_blank">
                  {work.company?.name}
                </CompanyName>
              </Position>
              <Date>{`${work.date?.from} - ${work.date?.to}`}</Date>
            </Header>
            {renderProjects(work.projects)}
          </Content>
        </Container>
      ) : null
    )
  }

  const renderProjects = (projects) => {
    return projects?.map((project, index) =>
      typeof project === 'string' ? (
        <EmptySpace key={`${index}`} spacing={project} />
      ) : project ? (
        <ProjectContainer key={`${index}`}>
          <ProjectNameContainer>
            <ProjectName>{`${project.name}${
              project.description ? ' • ' : ''
            }`}</ProjectName>
            <ProjectDescription>{project.description}</ProjectDescription>
            {renderProjectLinks(project.links)}
          </ProjectNameContainer>
          {project.tasks ? (
            <ProjectTaskContainer>
              {renderProjectTasks(project.tasks)}
            </ProjectTaskContainer>
          ) : null}
        </ProjectContainer>
      ) : null
    )
  }

  const renderProjectLinks = (projectLinks) => {
    return projectLinks?.map((projectLink, index) =>
      projectLink ? (
        <ProjectLink key={`${index}`} href={projectLink.link} target="_blank">
          <ProjectLinkIcon
            path={
              projectLink.type === 'apple'
                ? mdiApple
                : projectLink.type === 'google'
                ? mdiGooglePlay
                : mdiLinkVariant
            }
            size="14px"
          />
        </ProjectLink>
      ) : null
    )
  }

  const renderProjectTasks = (projectTasks) => {
    return projectTasks?.map((projectTask, index) => {
      if (Array.isArray(projectTask)) return renderProjectSubTasks(projectTask)
      return projectTask ? (
        <ProjectTask key={`${index}`}>{projectTask}</ProjectTask>
      ) : null
    })
  }

  const renderProjectSubTasks = (projectSubTasks) => {
    return projectSubTasks?.map((projectSubTask, index) =>
      projectSubTask ? (
        <ProjectTaskContainer key={`${index}`}>
          <ProjectTask>{projectSubTask}</ProjectTask>
        </ProjectTaskContainer>
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
  border-radius: 8px;
  height: 16px;
  position: absolute;
  top: 12px;
  width: 16px;
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

const Header = styled.div`
  flex: 1;
`

const Position = styled.h4`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 2px;
`

const CompanyName = styled.a`
  font-size: 20px;
  font-weight: bold;
`

const Date = styled.span`
  color: ${({ theme }) => theme.colors.workDate};
`

const ProjectContainer = styled.div`
  flex-wrap: wrap;
  margin-top: 12px;
`

const ProjectNameContainer = styled.div`
  flex-direction: row;
`

const ProjectName = styled.h5`
  color: ${({ theme }) => theme.colors.projectName};
  font-size: 16px;
  padding-right: 8px;
`
const ProjectDescription = styled.p`
  color: ${({ theme }) => theme.colors.projectName};
  font-size: 16px;
  padding-right: 8px;
`

const ProjectLink = styled.a`
  color: ${({ theme }) => theme.colors.projectName};
  padding-right: 8px;
`

const ProjectLinkIcon = styled(Icon)`
  margin-top: 2px;
`

const ProjectTaskContainer = styled.ul`
  margin: 0;
  margin-top: 8px;
`

const ProjectTask = styled.li`
  font-size: 14px;
`

const EmptySpace = styled.div`
  height: ${({ spacing }) => spacing};
`

export default WorkSection
