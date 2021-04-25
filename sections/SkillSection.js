import React from 'react'
import styled from 'styled-components'

const SkillSection = ({ data }) => {
  return (
    <Container>
      {data
        .sort((a, b) => b.rate - a.rate)
        .map((skill, index) =>
          typeof skill.space === 'string' ? (
            <React.Fragment key={`${index}`}>
              <Skill href={skill.link} target="_blank">
                {skill.name}
                <Badge>{skill.rate}</Badge>
              </Skill>
              <EmptySpace spacing={skill.space} />
            </React.Fragment>
          ) : (
            <Skill key={`${index}`} href={skill.link} target="_blank">
              {skill.name}
              <Badge>{skill.rate}</Badge>
            </Skill>
          )
        )}
    </Container>
  )
}

const Container = styled.section`
  flex-direction: row;
  flex-wrap: wrap;
  margin: 12px 0;
  margin-left: 8px;
  padding: 0 8px;
`

const Skill = styled.a`
  background-color: white;
  border-radius: 12px;
  font-size: 14px;
  margin-bottom: ${({ space }) => (space === true ? '120px' : '8px')};
  margin-right: 8px;
  padding: 2px 8px;
  position: relative;
  text-align: center;
  width: fit-content;
`

const Badge = styled.span`
  background-color: red;
  border-radius: 6px;
  color: white;
  font-size: 9px;
  height: 12px;
  position: absolute;
  right: -8;
  top: 0;
  width: 12px;
`

const EmptySpace = styled.div`
  height: ${({ spacing }) => spacing};
  width: 224px;
`

export default SkillSection
