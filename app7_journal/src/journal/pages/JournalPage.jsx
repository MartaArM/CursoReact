import Typography from '@mui/material/Typography';
import { JournalLayout } from '../layout/JournalLayout';

export const JournalPage = () => {
  return (
    // <Typography </JournalLayout>variant='h1'>JournalPage</Typography> // variant te pone para poner el estilo del elemento
    <JournalLayout>
      <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur doloribus ut vero itaque hic laudantium perferendis, nemo nobis recusandae soluta iure dolor? Perspiciatis quasi nostrum culpa inventore deserunt. Provident, soluta!
      </Typography>
    </JournalLayout>
  )
}