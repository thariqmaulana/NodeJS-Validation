import Joi from "joi";

describe("joi", () => {
  it("should return validation error with option", () => {
    const usernameSchema = Joi.string().min(5).email().required();

    const result = usernameSchema.validate("ups", {
      abortEarly: false
    });
    console.info(result);
    console.info(JSON.stringify(result));

    if (result.error) {
      result.error.details.forEach(detail => {
        console.info(`${detail.path} = ${detail.message}`);
      });
    }
  });
});
