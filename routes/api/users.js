const config = require('config')
const express = require('express')
const router = express.Router()
const { check, validationResult } = require('express-validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../../models/User')




router.post('/register', [
    check('firstname', 'firstname is required').not().isEmpty(),
    check('lastname', 'lastname is required').not().isEmpty(),
    check('email', 'email is required').isEmail(),
    check('password', 'password is required').isLength({ min: 8 })

], (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.json({ error: errors.array() })
    } else {
        const { firstname, lastname, email, password } = req.body;
        User.findOne({ email })
            .then(user => {
                if (user) {
                    return res.json({ error: 'Email Already Exists...' })
                } else {
                    user = new User({
                        firstname,
                        lastname,
                        email,
                        password
                    })

                    bcrypt.genSalt(10, (err, salt) => {
                        bcrypt.hash(user.password, salt, (err, hashedpassword) => {
                            user.password = hashedpassword
                            user.save()
                            const payload = {
                                user: {
                                    id: user.id
                                }
                            }

                            jwt.sign(payload, config.get('jwtSecret'), { expiresIn: 3600000 }, (err, token) => {
                                if (err) throw err
                                res.json({ token })
                            })
                        })
                    })
                }
            }).catch(err => {
                console.error(err.message)
                res.status(500).json('Server Error')
            })
    }
})





module.exports = router;