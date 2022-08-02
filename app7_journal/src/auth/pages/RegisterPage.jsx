import { Google } from "@mui/icons-material"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"
import { AuthLayout } from "../layout/AuthLayout"

export const RegisterPage = () => {
  return (
    <AuthLayout title='Registro'>

        <form>

          <Grid container>

            <Grid item xs={12} sx={{mb:1}}>
              <TextField label="Nombre completo" type="text" placeholder="Nombre" fullWidth />
            </Grid> {/* Grid item nombre */}

            {/* Para poner el correo */}
            <Grid item xs={12} sx={{mb:1}}>
              <TextField label="Correo" type="email" placeholder="ejemplo@ejemplo.com" fullWidth />
            </Grid> {/* Grid item correo */}

            <Grid item xs={12}>      
              <TextField label="Contraseña" type="password" placeholder="Contraseña..." fullWidth />
            </Grid> {/* Grid item contraseña */}

            <Grid container spacing={2} sx={{mb: 2, mt:2}}>

              <Grid item xs={12}>
                <Button variant="contained" fullWidth> 
                <Typography>
                  Crear cuenta
                </Typography>
                </Button>
              </Grid>

            </Grid>

            <Grid container direction='row' justifyContent='end'>
              <Typography>
                ¿Ya tienes cuenta? 
              </Typography>
              <Link component={RouterLink} to="/auth/login" color="inherit">
                Ingresar
              </Link>
            </Grid>
            
          </Grid>
        </form>
      </AuthLayout>
  )
}

