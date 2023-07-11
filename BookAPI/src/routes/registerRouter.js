const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs')
const register = require('../modals/registerdata')
const login = require('../modals/logindata')


router.post('/user-register', (req, res) => {
    console.log(req.body)
    bcrypt.hash(req.body.password, 10, function (err, hashedPass) {
        if (err) {
            return res.status(400).json({
                success: false,
                error: true,
                message: 'password hashing error'
            })
        }
        let logindata = {
            username: req.body.username,
            password: hashedPass,
            role: 2,
            status: 0
        }
        login.findOne({ username: req.body.username })
            .then(username => {
                if (username) {
                    return res.status(400).json({
                        success: false,
                        error: true,
                        message: 'username already exist!'
                    })
                }
                else {

                    
                    var item = login(logindata)
                    item.save()
                        .then(() => {
                            login.findOne({ username: logindata.username })
                                .then(function (details) {
                                    var id = details._id
                                    let registerdata = {
                                        login_id: id,
                                        email: req.body.email,
                                        mobile: req.body.mobile,
                                        city: req.body.city,
                                    }
                                    register.findOne({ mobile: registerdata.mobile })
                                        .then((mobile) => {
                                            if (!mobile) {
                                                var register_item = register(registerdata)
                                                register_item.save()
                                                    .then(() => {
                                                        res.status(200).json({
                                                            success: true,
                                                            error: false,
                                                            message: 'registration success'
                                                        })
                                                    })
                                            }
                                            else {
                                                console.log(id)
                                                login.deleteOne({ _id: id })
                                                    .then(() => {

                                                        res.status(401).json({
                                                            success: false,
                                                            error: true,
                                                            message: 'Mobile number is already registered with us'
                                                        })
                                                    })
                                            }
                                        })


                                })

                        })

                }

            })
    })

})

module.exports = router;