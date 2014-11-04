var mongoose = require('mongoose'),
    Customer = mongoose.model('Customer'),
    Order = mongoose.model('Order'),
    Address = mongoose.model('Address'),
    Billing = mongoose.model('Billing');

exports.getOrder = function(req, res) {
    Order.findOne({_id: req.query.orderId})
    .exec(function(err, order) {
        if (!order) {
            res.json(404, {msg: 'Order Not Found.'});
        } else {
            res.json(order);
        }
    });
};

exports.getOrders = function(req, res) {
    Order.find({userid: 'customerA'})
    .exec(function(err, orders) {
        if (!orders) {
        res.json(404, {msg: 'Orders Not Found.'});
    } else {
        res.json(order);
    }
});
};

exports.addOrder = function(req, res) {
    var orderShipping = new Address(req.body.updatedShipping);
    var orderBilling = new Billing(req.body.updatedShipping);
    var orderItems = req.body.orderItems;
    var newOrder = new Order({userid: 'customerA',
                        items: orderItems, shipping: orderShipping,
                        billing: orderBilling});
    newOrder.save(function(err, results) {
        if (err) {
            res.json(500, "Failed to save Order.");
        } else {
            res.json({msg: "Order Saved."});
        }
    });
}
});
};