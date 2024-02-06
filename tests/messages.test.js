import Joi from "joi";

describe("joi", () => {
  it("should can use custom message", () => {
    const schema = Joi.string().min(3).required().max(100).messages({
      //'any.required': ' {{#label}} Jangan Kosong bro', tidak work di string. mungkin atribut lain
      'string.min': ' {{#label}} panjang harus minimal {{#limit}} karakters'
      // tanpa label  panjang harus minimal {{#limit}} karakter
      // dengan label:  "value" panjang harus minimal 3 karakter]
      // pathnya dia
    });

    const request = "a";
    const request2 = "";

    const result = schema.validate(request);
    console.info(result);

    const result2 = schema.validate(request2);
    console.info(result2);
  });

  it("should can use custom message in object", () => {
    const schema = Joi.object({
      username: Joi.string().required().email().messages({
        // label disini adalah username
        'any.required': '{{#label}} Harus diisi',
        'string.email': '{{#label}} Harus dalam format email'
      })
    })

    const request = {};
    const request2 = {
      username: "asasa"
    };

    const result = schema.validate(request);
    console.info(result);

    const result2 = schema.validate(request2);
    console.info(result2);
  });
});
