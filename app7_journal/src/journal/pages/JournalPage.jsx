import { AddOutlined } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { startNewNote } from '../../store/journal/thunks';
import { JournalLayout } from '../layout/JournalLayout';
import { NoteView } from '../view/NoteView';
import { NothingSelectedView } from '../view/NothingSelectedView';

export const JournalPage = () => {
  const dispatch = useDispatch();
  const {isSaving, activeNote} = useSelector(state => state.journal);

  const onNewNote = () => {
    dispatch(startNewNote());
  }

  return (
    // <Typography </JournalLayout>variant='h1'>JournalPage</Typography> // variant te pone para poner el estilo del elemento
    <JournalLayout >
      {
        (activeNote == null) ? // Si no tenemos una nota activa, mostramos la pantalla de mostrar todas las notas
        <NothingSelectedView /> :
        <NoteView/>
        
      }
      
      {/* Botón de + (añadir nota) */}
      <IconButton 
      onClick = {onNewNote}
      disabled={isSaving}
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