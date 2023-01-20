import { Button, Typography } from '@mui/material';
import React from 'react';
import { Modal } from 'react-bootstrap';
import { Question } from './App';
import Box from '@mui/material/Box';

type Props = { question: Question };

const Quest = ({ question }: Props): JSX.Element => {
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
  const [open, setOpen] = React.useState(false);
  //   const [current, setCurrent] = React.useState<Question>(null);

  function check(): void {}

  const handleOpen = (question: any): void => {
    //  setCurrent(question);
    setOpen(true);
  };
  const handleClose = (): void => setOpen(false);

  return (
    <>
      <div className="btn-score" onClick={(): void => handleOpen(question)}>
        {question.price}
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="aaa">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {question.name_theme} за {question.price}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {question.question}
            <div>
              <input></input>
              <Button onClick={(): void => check()}> ответить</Button>
            </div>
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default Quest;
