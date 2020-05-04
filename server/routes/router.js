const express = require('express')
const router = express.Router()
const { Hotel, Activity, Restaurant, Place, db} = require('../models')

router.get('/', async (req, res, next) => {
    console.log('inside api get')
    const hotels = await Hotel.findAll()
    const activities = await Activity.findAll()
    const restaurants = await Restaurant.findAll()
    const allAttractions = {hotels, restaurants, activities}
    // res.send('hi')
    res.json(allAttractions)
})

module.exports = router