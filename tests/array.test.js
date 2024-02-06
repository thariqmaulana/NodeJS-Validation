import Joi from "joi";

describe("joi", () => {
  // it("should validate array", () => {
  //   const arraySchema = Joi.array().items(
  //     Joi.string().required().min(3).max(100)
  //   ).min(1).unique();

  //   const animals = ["A","ayam", "sapi", "kambing", "ayam"];

  //   const result = arraySchema.validate(animals, {
  //     abortEarly: false
  //   });

  //   console.info(result);
  // });

  //validasi array yang isinya object
  it("should validate array", () => {
    const arraySchema2 = Joi.array().min(1).items(
      Joi.object({
        street: Joi.string().required().max(200),
        city: Joi.string().required().max(100),
        country: Joi.string().required().max(100),
        zipCode: Joi.string().required().max(10)
      })
    );

    const address = [{}];

    const result = arraySchema2.validate(address, {
      abortEarly: false
    }); 

    console.info(result);
  });

});