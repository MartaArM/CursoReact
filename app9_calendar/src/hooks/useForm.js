import { useEffect, useMemo, useState } from "react";

export const useForm = (initialForm = {}, formValidations = {}) => {

   const [formState, setFormState] = useState( initialForm );
   const [ formValidation, setFormValidation ] = useState({});

   useEffect(() => {
      createValidators();
  }, [ formState ])

  useEffect(() => {
      setFormState( initialForm );
  }, [ initialForm ])

   const isFormValid = useMemo( () => {

      for (const formValue of Object.keys( formValidation )) {
         if ( formValidation[formValue] !== null ) return false;
      }

      return true;
   }, [ formValidation ])

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

   const onChangeValues = (activeEvent) => {
      setFormState( {
         ...activeEvent
      })
   }

   const createValidators = () => {
        
      const formCheckedValues = {};
      
      for (const formField of Object.keys( formValidations )) {
          const [ fn, errorMessage ] = formValidations[formField];

          formCheckedValues[`${ formField }Valid`] = fn( formState[formField] ) ? null : errorMessage;
      }

      setFormValidation( formCheckedValues );
   }

   return {
      formState,
      onInputChange,
      onResetForm,
      onDateChanged,
      onChangeValues,

      formValidation,
      isFormValid
   }
}