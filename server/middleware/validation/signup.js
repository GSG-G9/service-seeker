const { object, string, ref } = require('yup');

const { boomify } = require('../../utils');

const signupValidation = async (req, res, next) => {
  try {
    const {
      username,
      email,
      password,
      confirmPassword,
      mobile,
      location,
      role,
    } = req.body;

    const signupSchema = object().shape({
      username: string()
        .matches(/^[a-z]([-']?[a-z]+)*( [a-z]([-']?[a-z]+)*)+$/, {
          message:
            'The name must contained from two parts first name and last name.',
        })
        .required(),
      email: string().email().required(),
      password: string()
        .min(8, 'Password must be at least 8 char')
        .required('Password is required'),
      confirmPassword: string().oneOf(
        [ref('password'), null],
        'Passwords must match'
      ),
      mobile: string().min(9).required(),
      location: string().required('Loocation'),
      role: string().oneOf(['customer', 'provider']).required(),
    });

    await signupSchema.validate(
      {
        username,
        email,
        password,
        confirmPassword,
        mobile,
        location,
        role,
      },
      {
        abortEarly: false,
      }
    );
    next();
  } catch (error) {
    next(boomify(400, error.errors[0]));
  }
};

module.exports = signupValidation;
