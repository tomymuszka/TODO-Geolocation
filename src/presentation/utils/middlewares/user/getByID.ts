import { check } from 'express-validator';

export const GetUserValidation = [
  check('name').isString().optional().withMessage('El name es requerido en string'),
  check('email').isString().optional().withMessage('El email es requerido en string'),
]