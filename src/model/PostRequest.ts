import joi from "joi";

export interface PostRequest {
  title: string;
  author: string;
  image: string;
  body: string;
}

export const schema = joi.object().keys({
  title: joi.string().required(),
  author: joi.string().required(),
  image: joi.string(),
  body: joi.string().required(),
});
