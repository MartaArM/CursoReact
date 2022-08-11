import { Grid, Typography } from "@mui/material"


export const AuthLayout = ({children, title}) => {
  return (
    <Grid
      container
      spacing={0}
      direction = "column"
      alignItems="center"
      justifyContent="center"
      sx = {{minHeight: '100vh', backgroundColor: 'primary.main'}}
    >

      <Grid item
        className = 'box-shadow animate__animated animate__zoomIn animate__faster'
        xs={3}
        sx={{
            width: {sm: 450},
            backgroundColor: 'white', 
            padding: 3, 
            borderRadius: 2}}
      >
        <Typography  variant='h5' sx={{mb: 1}}> {title} </Typography>

         {children}  {/* Aqui ponemos lo que no es igual en el layout*/}
    </Grid>
    </Grid>
  )
}
