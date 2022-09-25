
const express = require('express')
const bearerToken = require('express-bearer-token')

module.exports = (app) => {
    const router = express.Router()

    router.use(bearerToken())

    router.use(async (req, res, next) => {
        if (req.token !== 'abc')
            return res.sendStatus(403)
        next()
    })

    router.get('/edit', (req, res) => {
        res.send({
            result: 'success',
            method: 'PUT'
        })
    });
    
    app.use('/admin', router)
}
