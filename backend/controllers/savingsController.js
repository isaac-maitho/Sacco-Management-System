const Savings = require('../models/savingsModel')
const asyncHandler  = require( 'express-async-handler')




exports.addSavings = asyncHandler(async (req, res) => {
    const {
        savings,
        member,
    } = req.body

    if (savings && savings.length === 0) {
        res.status(400)
        throw new Error('No Savings')
        return
    } else {
        const Savings = new Savings({
            savings,
            member,
        })

        console.log(`savings`, savings)
        const createdSavings = await savings.save()

        res.status(201).json(createdSavings)
    }
})

exports.getSavingsDetail = asyncHandler(async (req, res) => {

    const savings = await savings.findById(req.params.id).populate("member")

    if (savings) {
        res.json({savings})
    } else {
        res.status(404)
        throw new Error('No Savings Detected')
    }
})


exports.list = asyncHandler(async (req, res) => {
    await Savings.find({}).populate("member").exec((err, data) => {
        if (err) {
            return res.status(400).json({
                error: err
            });
        }
        res.json(data);
    });
})