const Loan = require('../models/loanModel')
const asyncHandler  = require( 'express-async-handler')




exports.createLoan = asyncHandler(async (req, res) => {
    const {
        loan,
        member,
    } = req.body

    if (loan && loan.length === 0) {
        res.status(400)
        throw new Error('No Loan')
        return
    } else {
        const Loan = new Loan({
            loan,
            member,
        })

        console.log(`loan`, loan)
        const createdLoan = await loan.save()

        res.status(201).json(createdLoan)
    }
})

exports.getLoanDetail = asyncHandler(async (req, res) => {

    const loan = await Loan.findById(req.params.id).populate("member")

    if (loan) {
        res.json({loan})
    } else {
        res.status(404)
        throw new Error('No loan Applied')
    }
})


exports.list = asyncHandler(async (req, res) => {
    await Loan.find({}).populate("member").exec((err, data) => {
        if (err) {
            return res.status(400).json({
                error: err
            });
        }
        res.json(data);
    });
})