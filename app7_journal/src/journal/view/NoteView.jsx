import { DeleteOutline, SaveOutlined, UploadOutlined } from "@mui/icons-material"
import { Button, Grid, IconButton, TextField, Typography, useFormControl } from "@mui/material"
import { useEffect, useRef } from "react"
import { useMemo } from "react"
import { useDispatch, useSelector } from "react-redux"
import Swal from "sweetalert2"
import { month_string } from "../../helpers/getMonthString"
import { useForm } from "../../hooks/useForm"
import { setActiveNote } from "../../store/journal/journalSlice"
import { startDeletingNote, startLoadingImages, startSavingNote } from "../../store/journal/thunks"
import { ImageGallery } from "../components/ImageGallery"

export const NoteView = () => {

    const dispatch = useDispatch();

    const {activeNote, messageSaved, isSaving} = useSelector(state => state.journal);
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
       dispatch(setActiveNote(formState)); // Cambiamos la nota activa cuando seleccioanmos una
    }, [formState]) // Cuando escribimos en la nota

    useEffect(() => {
        if (messageSaved.length > 0)
            Swal.fire({ // Nueva herramienta para lanzar un mensaje
                icon: 'success',
                title: messageSaved
            })
     }, [messageSaved]) // Cuando cambia el mensaje (cuando guardamos una nota)

    const fileInputRef = useRef();

    // Funciones
    
    const onSaveNote = () => {
        dispatch(startSavingNote());
    }

    const onFileChange = ({target}) => {
        if (target.files.length != 0) {
            dispatch(startLoadingImages(target.files));
            // dispatch(startSavingNote());
        }
    }

    const onDeleteNote = () => {
        dispatch(startDeletingNote());
        Swal.fire({ // Nueva herramienta para lanzar un mensaje
            icon: 'success',
            title: "Nota eliminada correctamente."
        })
    }

    return (
        <Grid container direction='row' justifyContent='space-between' alignItems='center' sx={{mb:1}}>
            <Grid item>
                <Typography fontSize={39} fontWeight='light'>
                    {dateString}
                </Typography>
            </Grid>

            <Grid item>
                {/* Selector de imágenes */}
                {/* Hacemos una simulacion de click cuando pulsamos en el iconbutton de abajo */}
                <input
                    type="file"
                    multiple
                    onChange={ onFileChange }
                    ref={fileInputRef} 
                    style= {{display: 'none'}}
                />

                {/* Como si hicieramos click en el input de carga de imágenes */}
                <IconButton 
                    color="primary" 
                    disabled={isSaving}
                    onClick={ () => fileInputRef.current.click()} 
                >
                    <UploadOutlined/>
                </IconButton>
            
                <Button onClick= {onSaveNote} disabled= {isSaving}>
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

            <Grid container justifyContent='end'>
                <Button
                    sx={{color: 'black'}}
                    onClick={onDeleteNote}
                >
                    <DeleteOutline />
                    Borrar
                </Button>
            </Grid>


            <ImageGallery />

        </Grid>
    )
}
