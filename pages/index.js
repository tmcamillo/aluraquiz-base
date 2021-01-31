import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import GithubCorner from '../src/components/GithubCorner';
import Input from '../src/components/Input';
import Button from '../src/components/Button';
import QuizLogo from '../src/components/QuizLogo';
import Link from '../src/components/Link';


export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <Head>
          <title>Alura Quiz - Modelo Base</title>
        </Head>
        <QuizLogo />
        <Widget
          as={motion.section}
          transition={{ delay: 0, duration: 0.5 }}
          variants={{
            show: { opacity: 1, y: '0' },
            hidden: { opacity: 0, y: '100'},
          }}
          initial="hidden"
          animate="show"
        >
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

        <Widget
          as={motion.section}
          transition={{ delay: 0.5, duration: 0.5 }}
          variants={{
            show: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          initial="hidden"
          animate="show"
          >
          <Widget.Content>
            <h1>Quizes da Galera</h1>

            {db.external.map((linkExterno) => {
              const [projectName, githubUser] = linkExterno
                .replace(/\//g, '')
                .replace('https:', '')
                .replace('.vercel.app', '')
                .split('.');
              return (
                <ul key={linkExterno}>
                  <li >
                    <Widget.Topic
                      as={Link}
                      href={`/quiz/${projectName}___${githubUser}`}
                    >
                      {`${githubUser}/${projectName}`}
                    </Widget.Topic>
                  </li>
                </ul>
              );
            })}

          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GithubCorner projectUrl="https://github.com/omariosauto" />
    </QuizBackground>
  );
}
