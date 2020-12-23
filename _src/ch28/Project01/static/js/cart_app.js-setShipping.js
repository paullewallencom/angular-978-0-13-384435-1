$scope.setShipping = function() {
    $http.post('/customers/update/shipping',
        {updatedShipping: $scope.customer.shipping[0]})
    .success(funvtion(data, status, headers, config) {
        $scope.content = '/static/billing.html';
    })
    .error(function(data, status, headers, config) {
        $window.alert(data);
    });
};