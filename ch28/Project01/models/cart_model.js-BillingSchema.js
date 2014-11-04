var BillingSchema = new Schema ({
    cardtype: {type: String, enum: ['Visa', 'MasterCard', 'Amex']},
    name: String,
    number: String,
    expiremonth: Number,
    expreyear: Number,
    address: [AddressSchema]
}, {_id: false});
mongoose.model('Billing', BillingSchema);