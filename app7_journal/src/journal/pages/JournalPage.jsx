import { JournalLayout } from '../layout/JournalLayout';
import { NothingSelectedView } from '../view/NothingSelectedView';

export const JournalPage = () => {
  return (
    // <Typography </JournalLayout>variant='h1'>JournalPage</Typography> // variant te pone para poner el estilo del elemento
    <JournalLayout>
      <NothingSelectedView />
    </JournalLayout>
  )
}