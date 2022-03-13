//Validate User inputs by joi schema structure
import { schema } from './Joi';

/**
* VALIDATE FORM 
*/
export const validateForm = (data) => {

  //VALIDAE FORM BY THE SCHEMA
  const { error } = schema.validate(data, {
    abortEarly: false,
  });

  if (!error) {
    return null;
  }

  const errors = {};
  for (const detail of error.details) {
    errors[detail.path[0]] = detail.message;
  }

  console.log(errors)
  return errors;
};



/**
* VALIDATE FIELD INPUT
*/
export const validateInput = ({ name, value }) => {
  const data = {
    [name]: value,
  };

  const { errors } = schema.validate(data);
  return errors ? errors.details[0].message : null;
};