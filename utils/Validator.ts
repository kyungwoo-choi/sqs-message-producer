import {query, ValidationChain, validationResult, body} from 'express-validator'
import {NextFunction, Request, Response} from "express"

export default class Validator {
  public static validate = (validations: ValidationChain[]) => {
    return async (request: Request, response: Response, next: NextFunction) => {
      for (let validation of validations) {
        const result = await validation.run(request)
        if (result.context.errors.length) break
      }

      const errors = validationResult(request)
      if (errors.isEmpty()) return next()

      response.status(400).json({success: false, errors: errors.array()})
    }
  }
}
