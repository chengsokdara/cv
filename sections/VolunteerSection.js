import React from 'react'
import styled from 'styled-components'

const VolunteerSection = ({ data }) => {
  const render = (volunteers) => {
    return volunteers?.map((volunteer, index) =>
      volunteer ? (
        <Container key={`${index}`}>
          <TimeLine>
            <Dot />
            <Line />
          </TimeLine>
          <Content>
            <Date>{volunteer.date}</Date>
            <Description>{volunteer.description}</Description>
            <Note>{volunteer.note}</Note>
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
  margin-bottom: 16px;
`

const Note = styled.li`
  font-size: 14px;
`

const Description = styled.span`
  font-size: 14px;
  margin-bottom: 4px;
`

const Date = styled.span`
  color: ${({ theme }) => theme.colors.workDate};
  margin-bottom: 12px;
`

export default VolunteerSection
