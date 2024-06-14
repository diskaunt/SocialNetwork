export const required = (value) => {
  return value ? undefined : "Field is requred";
};

export const maxLength = (max) => (value) => {
  return value.length > max ? `Max length is ${max} symbols` : undefined;
};

export const composeValidators =
  (...validators) =>
  (value) =>
    validators.reduce(
      (error, validator) => error || validator(value),
      undefined
    );
