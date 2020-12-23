$scope.addToCart = function(productId) {
    var found = false;
    for (var i=0; i<$scope.customer.cart.length; i++) {
        var item = $scope.customer.cart[i];
        if (item.product[0]._id == productId) {
            item.quantity += 1;
            found = true;
        }
    }

    if (!found) {
        $scope.customer.cart.push({quantity: 1, product: [this.product]});
    }
    $http.post('/customers/update/cart',
        {updatedCart: $scope.customer.cart})
    .success(function(data, status, headers, config) {
        $scope.content = '/static/cart.html';
    })
    .error(function(data,status,headers,config) {
        $window.alert(data);
    });
};