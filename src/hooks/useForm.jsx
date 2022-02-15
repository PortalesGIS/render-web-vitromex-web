import { useState } from "react";

export const useForm = (initialState = {}) => {
  let regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  const [formState, setFormState] = useState(initialState);
  const [validationInput, setValidationInput] = useState({
    equalPassword: true,
    isEmail: true
  })
  // console.log(initialState);
  const handleInputChange = ({ target }) => {
    if(target.name === 'secondPassword'){
      setValidationInput({
        ...validationInput,
        equalPassword: target.value === formState.password
      })
    }
    //* checkbox
    if(target.type === 'checkbox' ){
      setFormState({
        ...formState,
        [target.name]: !formState[target.name],
      });
    }else{
      //* validate email
      if(target.name === 'email'){
        const respose = regexEmail.test(target.value)
        setValidationInput({
          ...validationInput,
          isEmail: respose
        })
      }
      setFormState({
        ...formState,
        [target.name]: target.value,
      });
    }
  };

  return [formState, handleInputChange, validationInput]
};
