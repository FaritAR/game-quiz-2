import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Navigation from './ui/Navigation';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
type Data = [Question[]];

type Question = {
  id: number;
  question: string;
  answer: string;
  id_theme: number;
  price: number;
  name_theme: string;
};

function App(): JSX.Element {
  const [questions, setQuestions] = React.useState<Data>([[]]);
  const [open, setOpen] = React.useState(false);
  const [input, setInput] = React.useState('');
  const [win, setWin] = React.useState('');
  const [current, setCurrent] = React.useState<Question | null>(null);

  useEffect(() => {
    async function questionsData(): Promise<void> {
      const url = `/api/themeAndQuestions`;
      const response = await fetch(url);
      const data: Data = await response.json();

      setQuestions(data);
    }

    questionsData();
  }, []);

  const handleOpen = (question: any): void => {
    setCurrent(question);

    setOpen(true);
  };

  const handleSubmit = (event: React.FormEvent, q: Question): void => {
    event.preventDefault();
    if (q.answer.toLowerCase() === input.toLowerCase()) {
      console.log('win');
      setWin('Win');
    } else {
      setWin('Lose');
      console.log('lose');
    }
    // console.log(q.answer, input);
  };

  const handleClose = (): void => {
    setOpen(false);
    setWin('');
    setInput('');
  };

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
              return (
                <>
                  <div
                    className="btn-score"
                    onClick={(): void => handleOpen(question)}
                  >
                    {question.price}
                  </div>
                  {current && (
                    <Modal
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box sx={style} className="aaa">
                        <Typography
                          id="modal-modal-title"
                          variant="h6"
                          component="h2"
                        >
                          {current.name_theme} за {current.price}
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                          {current.question}
                          <form
                            onSubmit={(event: React.FormEvent): void =>
                              handleSubmit(event, current)
                            }
                          >
                            <input
                              type="text"
                              value={input}
                              onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                              ): void => setInput(event.target.value)}
                            ></input>
                            <button type="submit"> ответить</button> {win}
                          </form>
                        </Typography>
                      </Box>
                    </Modal>
                  )}
                </>
              );
            });
          })}
        </div>
      </div>
    </>
  );
}

export default App;
