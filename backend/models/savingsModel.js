const mongoose = require("mongoose");


const savingsSchema = new mongoose.Schema(
    {
        member: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Member',
        },
        savings: [
            {
                name: { type: String, required: true },
                description: { type: String, required: true },
                amount: { type: Number, required: true },
                category: {
                    type: mongoose.Schema.Types.ObjectId,
                    required: true,
                    ref: 'Category',
                },
            },
        ],
    },
    { timestamps: true }
)




module.exports = mongoose.model("Savings", savingsSchema);