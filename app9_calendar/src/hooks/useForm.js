import { useState } from "react";

export const useForm = (initialForm = {}) => {

   const [formState, setFormState] = useState( initialForm );

   const onInputChange = ({target}) => {
      const {name, value} = target;
      setFormState( {
         ...formState,
         [name]: value
      });
   }
 
   const onDateChanged = (event, changing) => {
      setFormState( {
         ...formState,
         [changing]: event
      })
   }

   const onResetForm = () => {
      setFormState( {
         ...initialForm
      });
   }

   return {
      formState,
      onInputChange,
      onResetForm,
      onDateChanged,
   }
}