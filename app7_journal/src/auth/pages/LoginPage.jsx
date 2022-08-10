import { Google } from "@mui/icons-material"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { useMemo } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link as RouterLink } from "react-router-dom"
import { useForm } from "../../hooks/useForm"
import { checkingUser, startGoogleLogin } from "../../store/auth/thunks"
import { AuthLayout } from "../layout/AuthLayout"

const formValidations = {
  email: [(value) => (value.includes('@')), "El email debe tener una @."], // Funcion a evaluar - mensaje de error
  password: [(value) => (value.length >= 6), "La clave debe tener más de 6 caracteres"]
}

export const LoginPage = () => {

  const {status} = useSelector(state => state.auth);
  
  // const isAuthenticating =  useMemo( () => {((status == 'checking') ? true : false)}, [status]); 
  const isAuthenticating = useMemo ( () => ((status == 'checking') ? true : false), [status]); // Memorizamos el status si no cambia
 

  const {formState, onInputChange} = useForm( {
    email: '',
    password: ''
  }, formValidations)

  const {email, password} = formState;

  const dispatch = useDispatch();

  // Botón de login
  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(checkingUser({email, password}));

  }

  //Botón de login con google
  const onGoogleLogin = (event) => {
    dispatch(startGoogleLogin());
  }

  return (
    <AuthLayout title='Login'>

        <form onSubmit={onSubmit}>

          <Grid container>
            {/* Para poner el correo */}
            <Grid item xs={12} sx={{mb:1}}>
              <TextField label="Correo" type="email" placeholder="ejemplo@ejemplo.com" name="email" value={email} onChange={onInputChange} fullWidth />
            </Grid> {/* Grid item correo */}

            <Grid item xs={12}>      
              <TextField label="Contraseña" type="password" placeholder="Contraseña..." name="password" value={password} onChange={onInputChange} fullWidth />
            </Grid> {/* Grid item contraseña */}

            <Grid container spacing={2} sx={{mb: 2, mt:2}}>

              {/* Boton de login */}
              <Grid item xs={12} sm={6}>
                <Button type="submit" variant="contained" disabled={isAuthenticating} fullWidth > 
                <Typography>
                  Login
                </Typography>
                </Button>
              </Grid>

              {/* Boton de login con google */}

              <Grid item xs={12} sm={6}>
                {/* disabled={isAuthenticating} : Si estamos autenticando, bloqueamos el boton */}
                <Button onClick={onGoogleLogin} variant="contained" disabled={isAuthenticating} fullWidth> 
                  <Google/> 
                  <Typography sx={{ml: 1}}>Google</Typography> 
                </Button>
              </Grid>

            </Grid>

            {/* Link para crear una cuenta nueva */}
            <Grid container direction='row' justifyContent='end'>

              <Link component={RouterLink} to="/auth/register" color="inherit">
                Crear una cuenta
              </Link>
            </Grid>
            
          </Grid>
        </form>
      </AuthLayout>
  )
}
