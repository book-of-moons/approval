import joi from "joi";
import { schema as PostRequest } from "../model/PostRequest";

const validator = (schema: joi.ObjectSchema, data: unknown) =>
  schema.validate(data).error === null;

const postValidator = (data: unknown) => validator(PostRequest, data);

export { validator, postValidator };
