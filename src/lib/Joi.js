import Joi from "joi";

export const schema = Joi.object({
  firstName: Joi.string().min(2).max(255).required().label("First Name"),
  lastName: Joi.string().min(2).max(255).required().label("Last Name"),
  userId: Joi.string().regex(/^\d+$/).min(9).max(9).required().label("User's ID"),
});