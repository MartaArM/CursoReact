import { Google } from "@mui/icons-material"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { useState } from "react"
import { Link as RouterLink } from "react-router-dom"
import { useForm } from "../../hooks/useForm"
import { AuthLayout } from "../layout/AuthLayout"

// Comprobaciones de los campos del formulario
const formValidations = {
  email: [(value) => (value.includes('@')), "El email debe tener una @."], // Funcion a evaluar - mensaje de error
  password: [(value) => (value.length >= 6), "La clave debe tener más de 6 caracteres"],
  displayName: [(value) => (value.length>=1), "El nombre es obligatorio"]
}

export const RegisterPage = () => {

  const {formState, onInputChange, formValidation, isFormValid} = useForm( {
    email: '',
    password: '',
    displayName: ''
  }, formValidations)

  const {displayName, email, password} = formState;
  const {displayNameValid, emailValid, passwordValid } = formValidation;

  const [formSubmitted, setformSubmitted] = useState(false); // Para la primera vez, que no compruebe los campos porque están vacíos


  const onSubmit = (event) => {
    event.preventDefault();
    setformSubmitted(true);

    if (isFormValid) {
      
    }
    // dispatch(checkingUser({email, password}));

  }

  return (
    <AuthLayout title='Registro'>

        <form onSubmit={onSubmit}>

          <Grid container>

            <Grid item xs={12} sx={{mb:1}}>
              <TextField label="Nombre completo" type="text" placeholder="Nombre" name="displayName" value={displayName} onChange={onInputChange} 
              error={((displayNameValid && formSubmitted) ? true: false )} helperText={displayNameValid} // Confirmamos si los campos son correctos
              fullWidth />
            </Grid> {/* Grid item nombre */}

            {/* Para poner el correo */}
            <Grid item xs={12} sx={{mb:1}}>
              <TextField label="Correo" type="email" placeholder="ejemplo@ejemplo.com" name="email" value={email} onChange={onInputChange} 
              error={((emailValid && formSubmitted) ? true: false )} helperText={emailValid}
              fullWidth />
            </Grid> {/* Grid item correo */}

            <Grid item xs={12}>      
              <TextField label="Contraseña" type="password" placeholder="Contraseña..." name="password" value={password} onChange={onInputChange}
              error={((passwordValid && formSubmitted) ? true: false )} helperText={passwordValid}
              fullWidth />
            </Grid> {/* Grid item contraseña */}

            <Grid container spacing={2} sx={{mb: 2, mt:2}}>

              <Grid item xs={12}>
                <Button variant="contained" type="submit" fullWidth> 
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

