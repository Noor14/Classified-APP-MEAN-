app.controller('productDetailController', productDetailController);

function productDetailController($scope){
    $scope.quantity = 1;
$scope.productQuantity = function(){
$scope.quantity++;
};

}