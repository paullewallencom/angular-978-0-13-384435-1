var OrderSchema = new Schema({
    userid: String,
    items: [ProductQuantitySchema],
    shipping: [AddressSchema],
    billing: [BillingSchema],
    status: {type: String, default: "Pending"},
    timestamp: {type: Date, default: Date.now}
});
mongoose.model('Order', OrderSchema);