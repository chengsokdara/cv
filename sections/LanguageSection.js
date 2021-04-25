import React from 'react'
import styled from 'styled-components'

const LanguageSection = ({ data }) => {
  const render = (languages) => {
    return (
      <Container>
        {languages.map((language, index) =>
          language ? (
            <Language key={`${index}`}>
              {language.name}
              <Rate>{language.rate}</Rate>
            </Language>
          ) : null
        )}
      </Container>
    )
  }

  return render(data)
}

const Container = styled.section`
  align-self: stretch;
  margin: 12px 0;
  padding: 0 12px;
`

const Language = styled.p`
  color: white;
  display: flex;
  flex-direction: 'row';
  font-size: 14px;
  font-weight: bold;
  justify-content: space-between;
`

const Rate = styled.span`
  font-size: 12px;
  font-weight: normal;
`

export default LanguageSection
