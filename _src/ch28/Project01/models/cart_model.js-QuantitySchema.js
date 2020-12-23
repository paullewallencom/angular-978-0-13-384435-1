var ProductQuantitySchema = new Schema({
    quantity: Number,
    product: [ProductSchema]
}, {_id: false});
mongoose.model('ProductQuantity', ProductQuantitySchema);