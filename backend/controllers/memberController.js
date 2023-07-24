const asyncHandler  = require( 'express-async-handler')
const Member = require ('../models/RegisterUserModel')



exports.getMember = asyncHandler(async (req, res) => {
    const member = await Member.findById(req.params.id)

    if (member) {
        res.json({
            _id: member._id,
            name: member.firstName,
            contact: member.contact,
        })
    } else {
        res.status(404)
        throw new Error('Member not found')
    }
})




exports.createMember = asyncHandler(async (req, res) => {
    console.log(req.body)
    const member = new Member(req.body);
    await member.save((err, data) => {
        if (err) {
            return res.status(400).json({
                error: err
            });
        }
        res.json({ data });
    });
})


exports.update = asyncHandler(async (req, res) => {
    try {
        const member = await Member.findByIdAndUpdate({_id: req.params.id}, req.body, {
            new: true,
            runValidators: true
        },)

        if (!member) {
            return res.status(404).send()
        }

        await member.save()

        res.send(member)

    } catch (e) {
        res.status(400).send(e)
    }

})



exports.remove = asyncHandler(async (req, res) => {

    const { id } = req.params

    const result = await Member.findById(id)

    if (result) {
        await result.remove()
        res.json({ message: 'Member removed' })
    } else {
        res.status(404)
        throw new Error('Member not found')
    }

})


exports.list = asyncHandler(async (req, res) => {
    try {
        const data = await Member.find({});
        res.json(data);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});
