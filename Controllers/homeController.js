app.controller('homeController',homeController);


function homeController($scope, allproductsService){
   $scope.allCarts = allproductsService.products;
};