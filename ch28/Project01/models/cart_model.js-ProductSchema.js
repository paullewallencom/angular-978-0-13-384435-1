var ProductSchema = new Schema({
    name: String,
    imagefile: String,
    description: String,
    price: String,
    instock: Number
});
mongoose.model('Product', ProductSchema);