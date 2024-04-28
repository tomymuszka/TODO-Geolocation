import { check } from 'express-validator';

export const GetLocationValidation = [
  check('id').isNumeric().toInt().optional().withMessage('El id es requerido en number'),
  check('name').isString().optional().withMessage('El name es requerido en string'),
  check('direction').isString().optional().withMessage('La direccion es requerida en string'),
  check('latitude').isFloat().optional().withMessage('La latitud es requerida en float'),
  check('longitude').isFloat().optional().withMessage('La longitude es requerida en float'),
  check('user_id').isString().optional().withMessage('El user_id es requerido en string'),
];