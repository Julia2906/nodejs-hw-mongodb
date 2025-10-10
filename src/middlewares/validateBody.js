import createHttpError from 'http-errors';

export const validateBody = (Schema) => async (req, res, next) => {
  try {
    await Schema.validateAsync(req.body, {
      abortEarly: false,
    });
    next();
  } catch (error) {
    const errors = createHttpError(400, 'Bad request', {
      error: error.details,
    });
    next(errors);
  }
};
