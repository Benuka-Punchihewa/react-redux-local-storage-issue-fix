import Joi from "joi";

const validate = (carArr) => {
  const schema = Joi.object({
    cars: Joi.array().items(
      Joi.object({
        name: Joi.string().required(),
        engineCapacity: Joi.number().required(),
        topSpeed: Joi.number().required(),
      })
    ),
  });

  const { error } = schema.validate(carArr);
  if (error) throw new Error(error.message);
};

export default validate;
