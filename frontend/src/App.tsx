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
  const [current, setCurrent] = React.useState('');

  useEffect(() => {
    async function questionsData(): Promise<void> {
      const url = `/api/themeAndQuestions`;
      const response = await fetch(url);
      const data: Data = await response.json();

      setQuestions(data);
    }

    questionsData();
  }, []);

  function check(answer) {}
  const handleOpen = (question: any): void => {
    setCurrent(question);
    setOpen(true);
  };
  const handleClose = (): void => setOpen(false);

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
                        <div>
                          <input></input>
                          <Button onClick={(): void => check(current.answer)}>
                            {' '}
                            ответить
                          </Button>
                        </div>
                      </Typography>
                    </Box>
                  </Modal>
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
