$scope.verifyBilling = function(ccv) {
    $scope.ccv = ccv;
    $http.post('/customers/update/billing',
        {updatedBilling: $scope.customer.billing[0], ccv: ccv})
    .success(function(data, status, headers, config) {
        $scope.content = '/static/review.html';
    })
    .error(function(data, status, headers, config) {
        $window.alert(data);
    });
};