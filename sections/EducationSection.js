import React from 'react'
import styled from 'styled-components'

const EducationSection = ({ data }) => {
  const render = (educations) => {
    return educations?.map((education, index) =>
      education ? (
        <Container key={`${index}`}>
          <TimeLine>
            <Dot />
            <Line />
          </TimeLine>
          <Content>
            <Degree>{education.degree}</Degree>
            <Name>{education.name}</Name>
            <Date>{`${education.date?.from} - ${education.date?.to}`}</Date>
          </Content>
        </Container>
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

const Degree = styled.h4`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 12px;
`

const Name = styled.h5`
  color: ${({ theme }) => theme.colors.projectName};
  font-size: 16px;
  margin-bottom: 2px;
`

const Date = styled.span`
  color: ${({ theme }) => theme.colors.workDate};
`

export default EducationSection
