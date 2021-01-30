import styled from 'styled-components'
import db from '../db.json'
import Widget from '../src/components/Widget'
import Footer from '../src/components/Footer'
import QuizBackground from '../src/components/QuizBackground'
import GitHubCorner from '../src/components/GitHubCorner'

const Title = styled.h1 ` 
  font-size: 50px;
  color: ${ ({ theme }) => theme.colors.primary };
`

const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  return (
      <QuizBackground backgroundImage={db.bg}>
        <QuizContainer>

            <Widget>
              <Widget.Header>
                <h1>The legend of Coffee</h1>
              </Widget.Header>
              <Widget.Content>
                <p>lorem ipsum lorem ipsum...</p>
              </Widget.Content>
            </Widget>

            <Widget>
              <Widget.Content>
                  <h1>The legend of Coffee</h1>
                  <p>lorem ipsum lorem ipsum...</p>
                </Widget.Content>
              </Widget>
            <Footer />
        </QuizContainer>
        <GitHubCorner projectUrl="https://github.com/omariosauto"/>
      </QuizBackground>
  )
}
