import { Wysiwyg } from "@mui/icons-material"
import { Grid, Typography } from "@mui/material"

export const NothingSelectedView = () => {
  return (
    <Grid
      container
      spacing={0}
      direction = "column"
      alignItems="center"
      justifyContent="center"
      sx = {{minHeight: '100vh', backgroundColor: 'gray.main', borderRadius:3}}
    >
        <Grid item xs={12}>
            <Wysiwyg sx={{ fontSize:100}} />
        </Grid>

        <Grid item xs={12}>
            <Typography  variant='h5'>
                Selecciona o crea una entrada
            </Typography>
        </Grid>

    </Grid>
  )
}
