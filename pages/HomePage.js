import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import {
  mdiBookOpenVariant,
  mdiBrain,
  mdiBriefcaseVariant,
  mdiFlaskOutline,
  mdiHandHeart,
  mdiOpenSourceInitiative,
  mdiPhoneClassic,
  mdiSchool,
  mdiTranslate,
  mdiTrophy,
} from '@mdi/js'
import Icon from '@mdi/react'

import { Section } from '../components'
import photo from 'url:../public/photo.png'
import {
  AccomplishmentSection,
  EducationSection,
  LanguageSection,
  OpenSourceSection,
  PersonalSection,
  ProjectSection,
  SkillSection,
  TrainingSection,
  VolunteerSection,
  WorkSection,
} from '../sections'
import cv from '../cv.json'

const HomePage = () => {
  const {
    accomplishments,
    educations,
    languages,
    name,
    openSources,
    personal,
    projects,
    skills,
    short,
    theme,
    title,
    trainings,
    volunteers,
    works,
  } = cv

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Content>
          <Left>
            <Avatar src={photo} />
            <Section
              Icon={<Icon path={mdiPhoneClassic} size="14px" />}
              fullWidth
              showLine={false}>
              Contacts
            </Section>
            <PersonalSection data={personal} />
            <Section
              Icon={<Icon path={mdiTranslate} size="14px" />}
              fullWidth
              showLine={false}>
              Languages
            </Section>
            <LanguageSection data={languages} />
            <Section
              Icon={<Icon path={mdiBrain} size="14px" />}
              fullWidth
              showLine={false}>
              Skills
            </Section>
            <SkillSection data={skills} />
          </Left>
          <Right>
            <TitleContainer>
              <Title>{name}</Title>
              <SubTitle>{title}</SubTitle>
              <Short>{short}</Short>
            </TitleContainer>
            <Section Icon={<Icon path={mdiBriefcaseVariant} size="16px" />}>
              Work Experiences
            </Section>
            <WorkSection data={works} />
            <Section Icon={<Icon path={mdiFlaskOutline} size="16px" />}>
              Personal Projects
            </Section>
            <ProjectSection data={projects} />
            <EmptySpace />
            <Section Icon={<Icon path={mdiOpenSourceInitiative} size="16px" />}>
              Open Source
            </Section>
            <OpenSourceSection data={openSources} />
            <Section Icon={<Icon path={mdiSchool} size="16px" />}>
              Educations
            </Section>
            <EducationSection data={educations} />
            <Section Icon={<Icon path={mdiBookOpenVariant} size="16px" />}>
              Trainings
            </Section>
            <TrainingSection data={trainings} />
            <Section Icon={<Icon path={mdiTrophy} size="16px" />}>
              Accomplishments
            </Section>
            <AccomplishmentSection data={accomplishments} />
            <Section Icon={<Icon path={mdiHandHeart} size="16px" />}>
              Volunteers
            </Section>
            <VolunteerSection data={volunteers} />
          </Right>
        </Content>
      </Container>
    </ThemeProvider>
  )
}

const Container = styled.main`
  height: 100%;
  width: 100%;
`

const Content = styled.div`
  flex-direction: row;
`

const Left = styled.div`
  align-items: center;
  background-color: black;
  max-width: 224px;
`

const Avatar = styled.img`
  border-radius: 100px;
  height: 200px;
  margin: 32px 12px;
  width: 200px;
`

const Right = styled.div`
  flex: 1;
  padding: 0 12px;
`

const TitleContainer = styled.div`
  align-items: flex-start;
  height: 200px;
  justify-content: center;
  margin: 32px 16px;
`

const Title = styled.h1`
  font-size: 58px;
  margin-bottom: 8px;
  text-align: center;
`

const SubTitle = styled.h2`
  font-size: 28px;
  margin-bottom: 8px;
  text-align: center;
`

const Short = styled.p`
  white-space: normal;
`

const EmptySpace = styled.div`
  height: 60px;
`

export default HomePage
