$scope.months = [1,2,3,4,5,6,7,8,9,10,11,12];
$scope.years = [2014,2015,2016,2017,2018,2019,2020];
$scope.content = '/static/products.html';
$http.get('/products/get')
  .success(function(data, status, headers, config) {
    $scope.products = data;
    $scope.product = data[0];
  })
  .error(function(data, status, headers, config) {
    $scope.products = [];
  });

  $http.get('/customers/get')
  .success(function(data, status, headers, config) {
    $scope.customer = data;
  })
  .error(function(data,status, headers, config) {
    $scope.customer = [];
  });
  $http.get('/orders/get')
  .success(function(data, status, headers, config) {
    $scope.orders = data;
  })
  .error(function(data, status, headers, config) {
    $scope.orders = [];
  });