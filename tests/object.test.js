import Joi from "joi";

describe("joi", () => {
  it("should can validate object", () => {
    const loginSchema = Joi.object({
      username: Joi.string().required().min(4).max(30).email(),
      password: Joi.string().required().min(6).max(20)
    });

    const request = {
      username: "thariq@gmail.com",
      password: "123456"
    };

    const result = loginSchema.validate(request, {
      abortEarly: false
    });

    console.info(result);
  });

  it("should can validate nested object", () => {
    const createUserSchema = Joi.object({
      id: Joi.string().min(6).max(20).required(),
      name: Joi.string().required().min(4).max(30),
      address: Joi.object({
        street: Joi.string().required().max(200),
        city: Joi.string().required().max(100),
        country: Joi.string().required().max(100),
        zipCode: Joi.string().required().max(10)
      }).required()
    });

    const request = {}

    const result = createUserSchema.validate(request, {
      abortEarly: false
    });

    console.info(result);

    if (result.error) {
      result.error.details.forEach(value => {
        console.info(`${value.path} : ${value.message}`);
      })
    }
  });
});
