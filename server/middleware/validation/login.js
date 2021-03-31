const { object, string } = require('yup');

const { boomify } = require('../../utils');

const loginValidation = async (req, res, next) => {
  try {
    const schema = object().shape({
      email: string().email().required(),
      password: string().min(8).required(),
    });
    await schema.validate(req.body, {
      abortEarly: false,
    });
    next();
  } catch (error) {
    next(boomify(400, error.errors[0]));
  }
};

module.exports = loginValidation;
