import { useState } from "react";

export const useForm = (initialState = {}) => {
  const [formState, setFormState] = useState(initialState);
  const [validationInput, setValidationInput] = useState({
    equalPassword: true
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
      setFormState({
        ...formState,
        [target.name]: target.value,
      });
    }
  };

  return [formState, handleInputChange, validationInput]
};
