import { useState } from "react";

export const useForm = (initialState = {}) => {
  let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const [formState, setFormState] = useState(initialState);
  const [validationInput, setValidationInput] = useState({
    equalPassword: true,
    isEmail: true
  })

  const handleInputChange = ({ target }) => {
    if(target.name === 'secondPassword'){
      setValidationInput({
        ...validationInput,
        equalPassword: target.value === formState.password
      })
    }
    if(target.type === 'checkbox' ){
      setFormState({
        ...formState,
        [target.name]: !formState[target.name],
      });
    }else{
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
