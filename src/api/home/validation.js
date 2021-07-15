import { Joi } from "celebrate";
export default {
  validName_v1: Joi.object({
    name: Joi.string().required()
  }),
  validName_v2: Joi.object({
    name: Joi.string().required(),
    fatherName: Joi.string().required()
  }),
};
