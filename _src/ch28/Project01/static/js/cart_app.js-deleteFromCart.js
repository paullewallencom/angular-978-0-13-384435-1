$scope.deleteFromCart = function(productId) {
    for (var i=0; i<$scope.customer.cart.length; i++) {
        var item = $scope.customer.cart[i];
        if (item.product[0]._id == productId) {
            $scope.customer.cart.splice(i,1);
            break;
        }
    }
    $http.post('/customers/update/cart',
        {updatedCart: $scope.customer.cart})
    .success(function(dat, status, headers, config) {
        $scope.content = '/static/cart/html';
    })
    .error(function(data,status,headers,config) {
        $window.alert(data);
    });
};