import { check } from 'express-validator';


export const CreateTodoValidation = [
    check('id').isNumeric().toInt().optional().withMessage('El id es requerido en number'),
    check('text').isString().withMessage('El texto es requerido en string'),
    check('completed').isBoolean().toBoolean().optional().withMessage('Debes indicar si esta completo en boolean'),
    check('location_id').isNumeric().withMessage('El location_id es requerido en numero'),
    check('user_id').isString().withMessage('El user_id es requerido en string'),
];