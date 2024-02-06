import Joi from "joi"

describe("Joi", () => {
  it("should can create schema", () => {
    const schema = Joi.string().min(3).max(100).required();

    const result = schema.validate("thariq");
    // const result = schema.validate("    "); sukses
    if (result.error) {
      console.info(result.error);
    };
  });

  it("should can validate basic data type", () => {
    const usernameSchema = Joi.string().email().required();
    const isAdminSchema = Joi.boolean().required();
    const priceSchema = Joi.number().min(1000).max(1000000);

    const resultUsername = usernameSchema.validate("thariq@gmail.com");
    console.info(resultUsername);

    const resultIsAdmin = isAdminSchema.validate("true");//otomatis bisa konversi
    console.info(resultIsAdmin);

    const resultPrice = priceSchema.validate("10000");//auto konversi juga
    console.info(resultPrice);
  });
});