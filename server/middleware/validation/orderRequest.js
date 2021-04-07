const { object, string, number } = require('yup');

const { boomify } = require('../../utils');

const orderRequestValidation = async (req, res, next) => {
  try {
    const schema = object().shape({
      providerId: number().required().positive().integer(),
      description: string()
        .min(20, 'The description must be at least 20 characters!')
        .required(),
    });

    await schema.validate(req.body, {
      abortEarly: false,
    });

    next();
  } catch (error) {
    next(boomify(400, error.errors[0]));
  }
};

module.exports = orderRequestValidation;
