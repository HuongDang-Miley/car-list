const router = require('express').Router();
const CarSchema = require('./models/Car')

router.get('/get-cars', (req, res) => {
    return res.render('main/index')
})
router.get('/add-car', (req, res) => {
    CarSchema.findOne({ name: req.body.name })
        .then((foundCar) => {
            if (foundCar) { return res.send('this car all exists')} 
            else {
              if (!req.body.name || !req.body.type || !req.body.year) {
                return res.status(400).send('all field must be filled')
            }
            const newCar = new CarSchema({
                name: req.body.name,
                type: req.body.type,
                year: req.body.year,
            })

            newCar.save()
                .then(() => res.redirect('cars/get-cars'))
                .catch(err => res.status(400).send('car not created'))
        } 
            
        })






})

module.exports = router