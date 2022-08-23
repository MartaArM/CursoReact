import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography, useFormControl } from "@mui/material"
import { useEffect } from "react"
import { useMemo } from "react"
import { useDispatch, useSelector } from "react-redux"
import { month_string } from "../../helpers/getMonthString"
import { useForm } from "../../hooks/useForm"
import { setActiveNote } from "../../store/journal/journalSlice"
import { startSavingNote } from "../../store/journal/thunks"
import { ImageGallery } from "../components/ImageGallery"

export const NoteView = () => {

    const dispatch = useDispatch();

    const {activeNote} = useSelector(state => state.journal);
    const {formState, onInputChange} = useForm(activeNote); // Cogemos los datos de la nota activa

    const {body, title, date} = formState;

    const dateString = useMemo( () => { // Fecha que va en el título de la nota
        const date_format = new Date(date);
        const day = date_format.getDate();
        const month = month_string(date_format.getMonth());
        const year = date_format.getFullYear();
        
        return day + " de " + month + ", " + year;
    }, [date]);

    useEffect(() => {
       dispatch(setActiveNote(formState));
    }, [formState]) // Cuando escribimos en la nota
    
    const onSaveNote = () => {
        dispatch(startSavingNote());
    }


  return (
    <Grid container direction='row' justifyContent='space-between' alignItems='center' sx={{mb:1}}>
        <Grid item>
            <Typography fontSize={39} fontWeight='light'>
                {dateString}
            </Typography>
        </Grid>

        <Grid item>
            <Button onClick= {onSaveNote}>
                <SaveOutlined sx={{ fontSize: 30, mr: 1}} />
                Guardar
            </Button>
        </Grid>

        <Grid container>
            <TextField 
            type='text'
            variant='filled'
            fullWidth
            placeholder="Título..."
            label="Titulo"
            name="title"
            value={title}
            onChange={onInputChange}
            sx= {{border: 'none', mb: 1}} />

            <TextField 
            type='text'
            variant='filled'
            fullWidth
            multiline
            placeholder="¿Qué ha pasado hoy?"
            name="body"
            value={body}
            onChange={onInputChange}
            minRows={8}/>
        </Grid>

        <ImageGallery />

    </Grid>
  )
}
