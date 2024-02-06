import Joi from "joi";

describe("joi", () => {
  it("should validate date", () => {
    const dateSchema = Joi.date().max("12-12-2010");

    const result = dateSchema.validate("11-12-2010");
    // const result = dateSchema.validate("12-12-2010");error
    console.info(result);
  })
});