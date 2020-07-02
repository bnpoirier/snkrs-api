const { check } = require('express-validator');
const validate = require('../middlewares/validate');

/**
 * Check date/time format
 * @param {*} value 
 */
const validateDate = (value) => {
    if(!/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}$/.test(value))
        throw new Error('Date must have following format : YYYY-MM-DD HH:MM');

    const date = new Date(value);

    if(!date instanceof Date || isNaN(date))
        throw new Error('Date value is incorrect');

    return true;
}

/**
 * Validate authentication data
 */
const validateAuthentication = validate([
    check('firstName')
        .notEmpty().withMessage('First name must be filled')
        .isLength({min: 3, max: 75}).withMessage('First name length must be in 5 and 75 characters'),
    check('lastName')
        .notEmpty().withMessage('Last name must be filled')
        .isLength({min: 3, max: 75}).withMessage('Last name length must be in 5 and 75 characters'),
    check('email')
        .notEmpty().withMessage('Last name must be filled')
        .isEmail().withMessage('Email has an invalid syntax')
        .isLength({min: 3, max: 75}).withMessage('Email length must be in 5 and 75 characters'),
    check('address')
        .notEmpty().withMessage('Address must be filled')
        .isLength({min: 3, max: 75}).withMessage('Address must be in 5 and 255 characters'),
    check('zipCode')
        .notEmpty().withMessage('Zip code must be filled')
        .isLength({min: 5, max: 5}).withMessage('French zip code has 5 numbers'),
    check('city')
        .notEmpty().withMessage('City must be filled')
        .isLength({min: 5, max: 75}).withMessage('City must be in 5 and 75 characters'),
    check('brand')
        .notEmpty().withMessage('Brand must be filled')
        .isLength({min: 5, max: 75}).withMessage('Brand must be in 5 and 75 characters'),
    check('model')
        .notEmpty().withMessage('Model must be filled')
        .isLength({min: 5, max: 75}).withMessage('Brand must be in 5 and 75 characters'),
    check('collectOn')
        .custom(validateDate).withMessage('Collect date must have following format : YYYY-MM-DD HH:MM')
]);

module.exports = validateAuthentication;