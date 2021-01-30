import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import GithubCorner from '../src/components/GithubCorner';
import Input from '../src/components/Input';
import Button from '../src/components/Button';
import QuizLogo from '../src/components/QuizLogo';

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <Head>
          <title>Alura Quiz - Modelo Base</title>
        </Head>
        <QuizLogo/>
        <Widget>
          <Widget.Header>
            <h1>The legend of Coffee</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={(e) => {
              e.preventDefault();
              router.push(`/quiz?name=${name}`);
            }}
            >
              <Input
                placeholder="Digite seu nome"
                name="nomeDoUsuario"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <Button
                type="submit"
                disabled={!name}
              >
                {`Jogar ${name}`}
              </Button>
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
