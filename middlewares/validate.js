const { validationResult } = require('express-validator');

/**
 * Global validation middleware
 * @param {Array<Promise>} validations
 */
function validate(validations) {
    return async (req, res, next) => {
        await Promise.all(validations.map(validation => validation.run(req)));
  
        const errors = validationResult(req);
        if (errors.isEmpty()) {
            return next();
        }

        res.status(400).json({ errors: errors.array() });
    };
};

module.exports = validate;