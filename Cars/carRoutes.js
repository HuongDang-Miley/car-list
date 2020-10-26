const router = require('express').Router();
const CarSchema = require('./models/Car')

router.get('/get-cars', (req, res) => {
    CarSchema.find()
        .then((foundCars) => {
            res.render('main/index', { carsList: foundCars })
        })
        .catch(err => res.json(err))
})
router.post('/add-car', (req, res) => {
    CarSchema.findOne({ name: req.body.name })
        .then((foundCar) => {
            if (foundCar) {
                 res.render('main/error')
            }
            else {
                if (!req.body.name || !req.body.type || !req.body.year) {
                    return res.status(400).render('main/must-filled-form')
                }
                const newCar = new CarSchema({
                    name: req.body.name,
                    type: req.body.type,
                    year: req.body.year,
                })

                newCar
                    .save()
                    .then(() => res.redirect('/cars/get-cars'))
                    .catch(err => res.status(400).send('car not created'))
            }

        })
        .catch(err => res.status(500).json(err))

})

module.exports = router