var AddressSchema = new Schema({
    name: String,
    address: String,
    city: String,
    state: String,
    zip: String
}, {_id: false});
mongoose.model('Address', AddressSchema);