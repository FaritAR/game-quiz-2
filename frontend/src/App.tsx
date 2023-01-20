import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Navigation from './ui/Navigation';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Quest from './Question';

export type Data = [Question[]];

export type Question = {
  id: number;
  question: string;
  answer: string;
  id_theme: number;
  price: number;
  name_theme: string;
};

function App(): JSX.Element {
  const [questions, setQuestions] = React.useState<Data>([[]]);

  useEffect(() => {
    async function questionsData(): Promise<void> {
      const url = `/api/themeAndQuestions`;
      const response = await fetch(url);
      const data: Data = await response.json();

      setQuestions(data);
    }

    questionsData();
  }, []);

  return (
    <>
      {' '}
      <div className="game_container">
        <div className="titles">
          <div> Кино по смайликам</div>
          <div> Да/Нет</div>
          <div> Школьная программа</div>
          <div> Литературный -ЛОХ-</div>
          <div>Одна буква</div>
        </div>

        <div className="questions">
          {questions.map((el) => {
            return el.map((question) => {
              return <Quest question={question} key={question.id} />;
            });
          })}
        </div>
      </div>
    </>
  );
}

export default App;
