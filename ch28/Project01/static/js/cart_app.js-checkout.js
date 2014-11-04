$scope.checkout = function() {
    $http.post('/customers/update/cart',
        {updatedCart: $scope.customer.cart})
    .success(function(data,status, headers, config) {
        $scope.content = '/static/shipping.html';
    })
    .error(function(data, status, headers, config) {
        $window.alert(data);
    });
};