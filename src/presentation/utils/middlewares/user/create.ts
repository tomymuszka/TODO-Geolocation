import { check } from 'express-validator';


export const CreateUserValidation = [
    check('name').isString().withMessage('El name es requerido en string'),
    check('email').isString().withMessage('El email es requerido en string'),
];