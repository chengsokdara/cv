import React from 'react'
import styled from 'styled-components'

const PersonalSection = ({ data }) => {
  const { email, phone, repositories, socials, websites } = data

  return (
    <Container>
      <Content>
        <Label>Phone</Label>
        <Link href={`tel:${phone}`} spacing={12} target="_blank">
          {phone}
        </Link>
        <Label>E-mail</Label>
        <Link href={`mailto:${email}`} spacing={12} target="_blank">
          {email}
        </Link>
        <Label>Website</Label>
        {websites?.map((website, index) => (
          <Link
            href={website.value}
            key={index}
            spacing={index === websites?.length - 1 ? 12 : 4}
            target="_blank">
            {website.label}
          </Link>
        ))}
        <Label>Social</Label>
        {socials?.map((social, index) => (
          <Link
            href={social.value}
            key={index}
            spacing={index === socials?.length - 1 ? 12 : 4}
            target="_blank">
            {social.label}
          </Link>
        ))}
        <Label>Repository</Label>
        {repositories?.map((repository, index) => (
          <Link href={repository.value} key={index} spacing={4} target="_blank">
            {repository.label}
          </Link>
        ))}
      </Content>
    </Container>
  )
}

const Container = styled.section`
  flex-direction: row;
  margin: 12px 0;
`

const Label = styled.h4`
  color: lightgrey;
  margin: 0 0 4px 0;
`

const Link = styled.a`
  font-size: 14px;
  margin-bottom: ${(props) => `${props.spacing}px` ?? 0};
  &:link,
  &:active,
  &:visited {
    color: lightblue;
  }
  &:hover {
    color: blueviolet;
  }
`

const Content = styled.div`
  align-items: center;
  flex: 1;
  padding: 0 12px;
`

export default PersonalSection
