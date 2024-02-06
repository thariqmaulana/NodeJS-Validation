import Joi from "joi";

describe("joi", () => {
  it("should can create custom validation", () => {
    const registerSchema = Joi.object({
      username: Joi.string().required().email().max(100),
      password: Joi.string().required().min(6).max(100).custom((value, helpers) => {
        if (value.startsWith('thariq')) {
          return helpers.error('password.er');
        }
        return value;
      }).messages({
        'password.er': 'password cannot start with thariq'
      }),
      confirmPassword: Joi.string().required().min(6).max(100)
    }).custom((value, helpers) => {
      // value ini berarti isinya ya registerSchema ini
      if (value.password !== value.confirmPassword) {
        return helpers.error('register.password.different');
      }
      return value; // return kan objectnya 
    }).messages({
      'register.password.different': 'password and confirm password is berbeda'
    })

    const request = {};
    const request2 = {
      username: "thariq@gmail.com",
      password: "123thariq",
      confirmPassword: "123thariq"
    }
    const result = registerSchema.validate(request, {
      abortEarly: false
    })
    const result2 = registerSchema.validate(request2, {
      abortEarly: false
    })

    // console.info(result);
    console.info(result2);
  });
})