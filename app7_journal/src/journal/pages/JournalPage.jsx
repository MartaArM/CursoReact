import { AddOutlined } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { JournalLayout } from '../layout/JournalLayout';
import { NoteView } from '../view/NoteView';
import { NothingSelectedView } from '../view/NothingSelectedView';

export const JournalPage = () => {
  return (
    // <Typography </JournalLayout>variant='h1'>JournalPage</Typography> // variant te pone para poner el estilo del elemento
    <JournalLayout className="animate__animated animate__bounce">
      {/* <NothingSelectedView /> */}
      <NoteView/>

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