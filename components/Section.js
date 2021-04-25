import React from 'react'
import styled from 'styled-components'
import { mdiBagSuitcase } from '@mdi/js'
import MdiIcon from '@mdi/react'

const Section = ({
  Icon = <MdiIcon path={mdiBagSuitcase} size="16px" />,
  showLine = true,
  fullWidth,
  children,
}) => {
  return (
    <Container fullWidth={fullWidth}>
      <Timeline fullWidth={fullWidth}>
        <Fill />
        <Dot>{Icon}</Dot>
        {showLine ? <Line /> : <Fill />}
      </Timeline>
      <Content>
        <Label>{children}</Label>
      </Content>
    </Container>
  )
}

const Container = styled.div`
  align-self: ${({ fullWidth }) => (fullWidth ? 'stretch' : 'auto')};
  flex-direction: row;
  justify-content: ${({ fullWidth }) => (fullWidth ? 'center' : 'auto')};
`

const Content = styled.div`
  padding: 8px;
`

const Dot = styled.div`
  align-items: center;
  background-color: blueviolet;
  border-radius: 12px;
  color: white;
  height: 24px;
  justify-content: center;
  width: 24px;
`

const Fill = styled.div`
  flex: 1;
`

const Label = styled.h2`
  color: blueviolet;
  margin: 0;
`

const Line = styled.div`
  background-color: black;
  flex: 1;
  width: 1px;
`

const Timeline = styled.div`
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-left: 16px;
  margin-right: ${({ fullWidth }) => (fullWidth ? '0' : '16px')};
  width: 24px;
`

export default Section
