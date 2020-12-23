$scope.setContent = function(filename) {
    $scope.content = '/static/' + filename;
};

$scope.setProduct = function(productId) {
    $scope.product = this.product;
    $scope.content = '/static/product.html';
};

$scope.cartTotal = function(){
    var total = 0;
    for(var i=0; i<scope.customer.cart.length; i++) {
        var item = $scope.customer.cart[i];
        total += item.quantity * item.product[0].price;
    }
    $scope.shipping = total * 0.05;
    return total + $scope.shipping;
};