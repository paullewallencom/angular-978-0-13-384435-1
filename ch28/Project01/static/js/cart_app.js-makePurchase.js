$scope.makePurchase = function() {
    $http.post('/orders/add',
        {orderBilling: $scope.customer.billing[0],
         orderShipping: $scope.customer.shipping[0],
         orderItems: $scope.customer.cart })
    .success(function(data, status, headers, config) {
        $scope.customer.cart = [];
        $http.get('/orders/get')
        .success(function(data, status, headers, config) {
            $scope.orders = data;
            $scope.content = '/static/orders.html';
        })
        .error(function(data, status, headers, config) {
            $scope.orders = [];
        });
    })
    .error(function(data, status, headers, config) {
        $wondow.alert(data);
    });
};