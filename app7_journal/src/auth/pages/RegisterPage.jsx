import { Google } from "@mui/icons-material"
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material"
import { useMemo, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link as RouterLink } from "react-router-dom"
import { useForm } from "../../hooks/useForm"
import { registerUser } from "../../store/auth/thunks"
import { AuthLayout } from "../layout/AuthLayout"

// Comprobaciones de los campos del formulario
const formValidations = {
  email: [(value) => (value.includes('@')), "El email debe tener una @."], // Funcion a evaluar - mensaje de error
  password: [(value) => (value.length >= 6), "La clave debe tener más de 6 caracteres"],
  displayName: [(value) => (value.length>=1), "El nombre es obligatorio"]
}

const initialState = {
  email: '',
  password: '',
  displayName: ''
}

export const RegisterPage = () => {

  const {formState, onInputChange, formValidation, isFormValid} = useForm( initialState, formValidations)

  const {displayName, email, password} = formState;
  const {displayNameValid, emailValid, passwordValid } = formValidation;

  const [formSubmitted, setformSubmitted] = useState(false); // Para la primera vez, que no compruebe los campos porque están vacíos

  const dispatch = useDispatch();

  // Cogemos el estado y el mensaje de error del store
  const {status, errorMessage} = useSelector(state => state.auth);
  // Vamos a comprobar si el estado es 'checking' para bloquear el botón de crear cuenta
  const isChecking = useMemo(() => ((status=='checking') ? true: false), [status]); // Solo cambia si cambia el estado 

  // Evento que se lanza cuando se manda la información al formulario
  const onSubmit = (event) => {
    event.preventDefault();
    setformSubmitted(true);

    // Si el formulario es válido, lanzamos el registro del usuario 
    if (isFormValid) {
      dispatch(registerUser(email, password, displayName));
    }

  }

  return (
    <AuthLayout title='Registro'>

        <form onSubmit={onSubmit}>

          <Grid container>

            <Grid item xs={12} sx={{mb:1}}>
              <TextField label="Nombre completo" type="text" placeholder="Nombre" name="displayName" value={displayName} onChange={onInputChange} 
              error={((displayNameValid && formSubmitted) ? true: false )} helperText={displayNameValid && formSubmitted} // Confirmamos si los campos son correctos
              fullWidth />
            </Grid> {/* Grid item nombre */}

            {/* Para poner el correo */}
            <Grid item xs={12} sx={{mb:1}}>
              <TextField label="Correo" type="email" placeholder="ejemplo@ejemplo.com" name="email" value={email} onChange={onInputChange} 
              error={((emailValid && formSubmitted) ? true: false )} helperText={emailValid && formSubmitted}
              fullWidth />
            </Grid> {/* Grid item correo */}

            <Grid item xs={12}>      
              <TextField label="Contraseña" type="password" placeholder="Contraseña..." name="password" value={password} onChange={onInputChange}
              error={((passwordValid && formSubmitted) ? true: false )} helperText={passwordValid && formSubmitted}
              fullWidth />
            </Grid> {/* Grid item contraseña */}

            <Grid container spacing={2} sx={{mb: 2, mt:2}}>

              <Grid item xs={12} 
              display={ (errorMessage != null) ? '' : 'none'}>
                <Alert severity='error'>
                  {errorMessage}
                </Alert>
              </Grid>

              {/* Botón de crear cuenta */}
              <Grid item xs={12}>
                <Button variant="contained" type="submit" 
                disabled={isChecking}  // Bloqueamos el botón si estamos haciendo comprobaciones
                fullWidth> 
                <Typography>
                  Crear cuenta
                </Typography>
                </Button>
              </Grid>

            </Grid>

            {/* Si tenemos cuenta, vamos al login */}
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

