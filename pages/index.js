import styled from 'styled-components';
import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import QuizBackground from '../src/components/QuizBackground';
import GithubCorner from '../src/components/GithubCorner';

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
  const router = useRouter();
  const [name, setName ] = React.useState('');
  console.log(name, setName);

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <Head>
          <title>Alura Quiz - Modelo Base</title>
        </Head>

        <Widget>
          <Widget.Header>
            <h1>The legend of Coffee</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={function (e) {
              e.preventDefault();
              router.push(`/quiz?name=${name}`);
              // console.log('fazendo uma submissao');
            }}
            >
              <input
                placeholder="Digite seu nome"
                // eslint-disable-next-line func-names
                onChange={function (e) {
                  // eslint-disable-next-line no-unused-expressions
                  setName(e.target.value);
                }}
              />
              <button type="submit" disabled={name.length === 0}> Jogar</button>
            </form>
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
      <GithubCorner projectUrl="https://github.com/omariosauto" />
    </QuizBackground>
  );
}
