const {body} = require("express-validator")
 const loginValidator = [
    body('email', 'email does not Empty').not().isEmpty(),
    body('email', 'Invalid email').isEmail(),
    body('name', 'username does not Empty').not().isEmpty(),
    body('refreemail', 'email does not Empty').not().isEmpty(),
    body('referralcode', 'please enter referral code').not().isEmpty(),
 ]
  module.exports = loginValidator