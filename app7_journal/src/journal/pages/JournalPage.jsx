import { AddOutlined } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { useDispatch } from 'react-redux';
import { startNewNote } from '../../store/journal/thunks';
import { JournalLayout } from '../layout/JournalLayout';
import { NoteView } from '../view/NoteView';
import { NothingSelectedView } from '../view/NothingSelectedView';

export const JournalPage = () => {
  const dispatch = useDispatch();

  const onNewNote = () => {
    dispatch(startNewNote());
  }

  return (
    // <Typography </JournalLayout>variant='h1'>JournalPage</Typography> // variant te pone para poner el estilo del elemento
    <JournalLayout >
      {/* <NothingSelectedView /> */}
      <NoteView/>
      {/* Botón de + (añadir nota) */}
      <IconButton 
      size='large'
      sx={{
        color: 'white',
        backgroundColor: 'secondary.main',
        ':hover': {backgroundColor: 'secondary.main', opacity: 0.8},
        position: 'fixed',
        right: 50,
        bottom: 50
      }}
      >
        <AddOutlined />
      </IconButton>
    </JournalLayout>
  )
}