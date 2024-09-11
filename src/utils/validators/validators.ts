export type FildValidator = (value: string) => string | undefined;

export const required: FildValidator = (value) => {
  return value ? undefined : "Field is requred";
};

export const maxLength =
  (max: number): FildValidator =>
  (value: string) => {
    return value.length > max ? `Max length is ${max} symbols` : undefined;
  };

export const composeValidators =
  (...validators: Array<FildValidator>) =>
  (value: string) =>
    validators.reduce<string | undefined>(
      (error, validator) => error || validator(value),
      undefined
    );
