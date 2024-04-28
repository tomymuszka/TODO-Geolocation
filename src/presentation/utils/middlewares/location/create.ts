import { check } from 'express-validator';


export const CreateLocationValidation = [
    check('id').isNumeric().toInt().optional().withMessage('El id es requerido en number'),
    check('name').isString().withMessage('El name es requerido en string'),
    check('direction').isString().withMessage('La direccion es requerida en string'),
    check('latitude').isFloat().withMessage('La latitud es requerida en float'),
    check('longitude').isFloat().withMessage('La longitude es requerida en float'),
    check('user_id').isString().withMessage('El user_id es requerido en string'),
];